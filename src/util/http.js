import axios from "axios";

const BACKEND__URL = "https://rn-expensetracker-8e1d7-default-rtdb.firebaseio.com";


export function addExpenseToDb(expenseData) {
    axios.post(BACKEND__URL+"/expenses.json", expenseData)
}
export async function fetchExpensesFromDb(){
    const res = await axios.get(BACKEND__URL+"/expenses.json");
    let expenses = [];

    for(const key in res.data){
        const expenseObj = {
            id:key,
            amount:res.data[key].amount,
            date:new Date(res.data[key].date),
            description:res.data[key].description,
        }
        expenses.push(expenseObj);
    }
    return expenses;
}