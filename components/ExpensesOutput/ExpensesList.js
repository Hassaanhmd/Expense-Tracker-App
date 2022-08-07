import { FlatList, StyleSheet, Text } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
    return <ExpenseItem {...itemData.item} /> //can just spread even though we have extra prop (id) bc we have prop names matching the object prop names
}

function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />;
}

export default ExpensesList;

const styles = StyleSheet.create({});