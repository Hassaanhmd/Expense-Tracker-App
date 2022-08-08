import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

import { GlobalStyles } from '../constants/styles';

function RecentExpenses({ navigation }) {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />
}

export default RecentExpenses;

