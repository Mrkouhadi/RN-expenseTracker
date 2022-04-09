import axios from "axios";

const BACKEND__URL = "https://rn-expensetracker-8e1d7-default-rtdb.firebaseio.com";


export async function addExpenseToDb(expenseData) {
    const res = await axios.post(BACKEND__URL+"/expenses.json", expenseData);
    const id = res.data.name; // firebase means by name an id
    return id;
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

export const updateExpenseInDb = (id, expenseData)=>{
    return axios.put(BACKEND__URL+`expenses/${id}.json`, expenseData);
}
export const deleteExpenseIFromDb = id =>{
    return axios.delete(BACKEND__URL+`expenses/${id}.json`);
}