import axios from "axios";

export function addExpenseToDb (expenseData) {
    axios("https://rn-expensetracker-8e1d7-default-rtdb.firebaseio.com/expenses.json",
            expenseData
        )
}