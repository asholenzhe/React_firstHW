import {TExpense} from "../ExpenseTracker/type.tsx";
export default  interface IExpenseProps{
    expenses: TExpense[],
    deleteExpense: (id:number) => void;
}