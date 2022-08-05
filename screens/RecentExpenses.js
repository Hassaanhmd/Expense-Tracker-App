import { View, Text, StyleSheet, Button } from 'react-native';

import { GlobalStyles } from '../constants/styles';

function AllExpenses({ navigation }) {
  function manageButtonPressHandler() {
    navigation.navigate('ManageExpense');
  }
  return (
    <View>
      <Text>This is the Recent Expenses page</Text>
      <Button title="Manage" onPress={manageButtonPressHandler} />
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({});
