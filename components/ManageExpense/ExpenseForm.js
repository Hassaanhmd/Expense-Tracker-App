import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getFormattedDate } from '../../util/date';

import Button from '../UI/Button';
import Input from './Input';

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  const [inputValues, setinputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? getFormattedDate(defaultValues.date) : '',
    description: defaultValues ? defaultValues.description : '',
  }); //whenever you fetch an input value it is a STRING even if it is numbers!

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setinputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue, // target a specific property dynamically using the identifier (in this case either 'amount', 'date' or 'description')
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount, // '+' converts string to a number
      date: new Date(inputValues.date), // works provided date matches the format of YYYY-MM-DD a new date object can be created
      description: inputValues.description,
    };

    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          //   autoCapitalize: 'none'
          //   autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
