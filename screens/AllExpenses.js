import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';

function AllExpenses({ navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" />;
}

export default AllExpenses;

const styles = StyleSheet.create({});
