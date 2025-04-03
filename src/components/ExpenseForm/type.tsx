export interface IExpenseFormProps {
    addExpense:(title: string, amount: number, currency: string) => void;
}