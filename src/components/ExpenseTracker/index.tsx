import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseForm from '../ExpenseForm';
import Expense from '../Expense';
import {AppDispatch, RootState} from "../../store.ts";
import {addExpense, removeExpense} from "../../expensesSlice.ts";

export default function ExpenseTracker() {
    const dispatch = useDispatch<AppDispatch>();
    const expenses = useSelector((state: RootState) => state.expenses.expenses);

    useEffect(() => {
        const storedExpenses = localStorage.getItem('expenses');
        if (storedExpenses) {
            const parsedExpenses = JSON.parse(storedExpenses);
            parsedExpenses.forEach((expense: any) => {
                dispatch(addExpense(expense));
            });
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    function handleAddExpense(title: string, amount: number, currency: string) {
        const newExpense = {
            id: Date.now(),
            title,
            amount,
            currency,
        };
        dispatch(addExpense(newExpense));
    }

    function handleRemoveExpense(id: number) {
        dispatch(removeExpense(id));
    }

    return (
        <>
            <ExpenseForm addExpense={handleAddExpense} />
            <ul className="expenseContainer">
                <Expense expenses={expenses} deleteExpense={handleRemoveExpense} />
            </ul>
        </>
    );
}
