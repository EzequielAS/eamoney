import { Container } from "./styles";
import { useTransactions } from "../../hooks/UseTransactions";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'



export function Summary() {
    const { transactions } = useTransactions()

    // const totalDeposits = transactions.reduce((acc, transaction) =>{
    //     if (transaction.type === 'deposit') {
    //         return acc + transaction.value
    //     }

    //     return acc
    // }, 0)

    const summary = transactions.reduce((acc, transaction) => {

        if(transaction.type === 'deposit') {
            acc.deposits += transaction.value
            acc.total += transaction.value
        }else{
            acc.withdraws += transaction.value
            acc.total -= transaction.value
        }

        return acc

    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })


    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas"/>
                </header>
                <strong>
                        -
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}