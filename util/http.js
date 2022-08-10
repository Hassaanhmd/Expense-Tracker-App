import axios from 'axios';

const BACKEND_URL =
  'https://epense-tracker-app-default-rtdb.europe-west1.firebasedatabase.app';

export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + '/expenses.json',
    expenseData
  ); // "*.json" is firebase specific
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');

  const expenses = [];

  //console.log(response.data)

  for (const key in response.data) {
    const expenseOb = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseOb);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
