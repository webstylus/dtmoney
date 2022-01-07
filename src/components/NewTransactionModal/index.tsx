import Modal from "react-modal";
import React, {FormEvent, useState} from "react";
import {Container, TransactionTypeContainer, RadioBox} from "./styles";
import closeSvg from '../../assets/close.svg';
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import {useTransactions} from "../../hooks/useTransactionsContext";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const {createTransaction} = useTransactions();
    const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()
        await createTransaction({title, type, amount, category})
        setTitle('')
        setType('deposit')
        setCategory('')
        setAmount(0)
        onRequestClose()
    }

    return (
        <Modal isOpen={isOpen}
               onRequestClose={onRequestClose}
               overlayClassName={"react-modal-overlay"}
               className={"react-modal-content"}
        >
            <button type={"button"}
                    onClick={onRequestClose}
                    className={'react-modal-close'}>
                <img src={closeSvg} alt="Fechar"/>
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input type="text" placeholder={'Título'}
                       value={title}
                       onChange={event => setTitle(event.target.value)}
                />
                <input type="number" placeholder={'Valor'}
                       value={amount}
                       onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox type={"button"}
                              isActive={type === 'deposit'}
                              activeColor={'green'}
                              onClick={() => setType('deposit')}
                    >
                        <img src={incomeSvg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type={"button"}
                              isActive={type === 'withdraw'}
                              activeColor={'red'}
                              onClick={() => setType('withdraw')}
                    >
                        <img src={outcomeSvg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input type="text" placeholder={'Categoria'}
                       value={category}
                       onChange={event => setCategory(event.target.value)}
                />

                <button type={"submit"}>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}
