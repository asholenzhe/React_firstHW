import IExpenseProps from "./type.tsx";
import "./index.css"

export default function Expense({expenses, deleteExpense}: IExpenseProps){
    return <>
        {expenses.map((expense) =>
            <li key={expense.id} className="expenseItem">
                <p>{expense.title}: {expense.amount} {expense.currency}</p>
                <button onClick={() => deleteExpense(expense.id)}>
                    <img src="src/assets/delBtn.svg" alt="delete button"/>
                </button>
            </li>
        )}
    </>
}