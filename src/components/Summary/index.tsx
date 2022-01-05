import {Container} from "./styles";
import incomeSvg from '../../assets/income.svg'
import outcomeSvg from '../../assets/outcome.svg'
import totalSvg from '../../assets/total.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeSvg} alt=""/>
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeSvg} alt=""/>
                </header>
                <strong>- R$ 500,00</strong>
            </div>
            <div className={'highlight-background'}>
                <header>
                    <p>Total</p>
                    <img src={totalSvg} alt=""/>
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}
