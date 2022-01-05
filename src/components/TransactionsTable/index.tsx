import {Container} from "./styles";
import {useEffect} from "react";
import {api} from "../../services/api";

export function TransactionsTable() {

    useEffect(() => {
        api.get("/transactions").then(data => console.log(data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Desenvolvimento de website</td>
                    <td className={'deposit'}>R$ 12000,00</td>
                    <td>Desenvolvimento</td>
                    <td>04/01/2022</td>
                </tr>
                <tr>
                    <td>Aluguel</td>
                    <td className={'withdraw'}>-R$ 1860,00</td>
                    <td>Casa</td>
                    <td>28/12/2021</td>
                </tr>
                </tbody>
            </table>
        </Container>
    )
}
