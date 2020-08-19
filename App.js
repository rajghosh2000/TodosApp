import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {


  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.main}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your todo here"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <Button
            title="ADD"
            onPress={addGoalHandler}
          />
        </View>
        <View>
          {courseGoals.map((goal) =>
            <View  
              key={goal} 
              style={styles.listItram}
            >
              <Text>
                {goal}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
  },
  main: {
    backgroundColor: '#0A3D62',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    tintColor: 'green'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
    padding: 10
  },
  listItram: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
