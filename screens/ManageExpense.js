import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { GlobalStyles } from '../constants/styles';

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; // '!!' is a JS method to convert to boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>This is the Manage Expense page</Text>
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({});
