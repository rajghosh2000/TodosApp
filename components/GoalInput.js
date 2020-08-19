import React, {useState} from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState("");
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your todo here"
        placeholderTextColor="black"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button 
        title="ADD" 
        onPress={props.onAddGoal.bind(this,enteredGoal)} 
        style={styles.addButton} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    tintColor: "green",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ccc",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 25,
    overflow: "hidden",
  },
  addButton: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 25,
  },
});

export default GoalInput;
