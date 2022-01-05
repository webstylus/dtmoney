import Modal from "react-modal";
import React, {useState} from "react";
import {Container, TransactionTypeContainer} from "./styles";
import closeSvg from '../../assets/close.svg';
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');


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

            <Container>
                <h2>Cadastrar transação</h2>

                <input type="text" placeholder={'Título'}/>
                <input type="number" placeholder={'Valor'}/>

                <TransactionTypeContainer>
                    <button type={"button"}
                            onClick={() => setType('deposit')}
                    >
                        <img src={incomeSvg} alt="Entrada"/>
                        <span>Entrada</span>
                    </button>
                    <button type={"button"}
                            onClick={() => setType('withdraw')}
                    >
                        <img src={outcomeSvg} alt="Saída"/>
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <input type="text" placeholder={'Categoria'}/>

                <button type={"submit"}>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}
