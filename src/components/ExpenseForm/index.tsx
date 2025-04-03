import "./index.css"
import {useState} from "react";
import {IExpenseFormProps} from "./type.tsx";

const currencies = ["RUB", "USD", "EUR", "GBP", "CNY"];

export default function ExpenseForm({addExpense}: IExpenseFormProps) {
    const [title, setTitle] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [currency, setCurrency] = useState<string>('RUB');

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(isValid(title, amount)) {
            addExpense(title, amount, currency);
        }
        else{
            alert("Use correct values");
        }
    }

    function isValid(title: string, amount: number): boolean { /*проверка валидности вводных данных*/
        return title.trim().length > 0 && amount>=0
    }

    return <>
        <form onSubmit={handleFormSubmit} className="expenseForm">
            <div className="expenseFormInput">
                <label htmlFor="title">Название: </label>
                <input onChange={(e) => setTitle(e.target.value)}
                       id="title"
                       type="text"
                       value={title}
                       className="expenseFormInputTitle"/>
            </div>
            <div className="expenseFormInput">
                <label htmlFor="amount">Сумма:</label>
                <div className="expenseAmountContainer">
                    <input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="expenseFormInputAmount"
                    />
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="currencySelect">
                        {currencies.map((cur) => (
                            <option key={cur} value={cur}>{cur}</option>
                        ))}
                    </select>
                </div>
            </div>
            <button type="submit">
                +
            </button>
        </form>
    </>
}