import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {api} from "../services/api";

interface TransactionProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: TransactionProps[],
    createTransaction: (transaction: TransactionInputProps) => Promise<void>
}

interface TransactionProps {
    id: number,
    title: string,
    category: string,
    type: 'deposit' | 'withdraw',
    amount: number,
    createdAt: string
}

type TransactionInputProps = Omit<TransactionProps, 'id' | 'createdAt'>

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    async function createTransaction(transactionInput: TransactionInputProps) {
        const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})
        const {transaction} = response.data
        setTransactions([
            ...transactions,
            transaction
        ])
    }

    useEffect(() => {
        api.get("/transactions").then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    return useContext(TransactionsContext)
}
