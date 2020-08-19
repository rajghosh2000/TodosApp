import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = (enteredGoal) => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visibleModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your todo here"
          placeholderTextColor="black"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} color="#6AB04A" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
    backgroundColor: "#ccc",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 25,
    overflow: "hidden",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "column",
    width: "60%",
  },
  button: {
    width: "100%",
    marginBottom: 20,
  },
});

export default GoalInput;
