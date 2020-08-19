import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Text
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: goalTitle,
      },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelAddGoalModal = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.startTextView} >
        <Text style={styles.startText}>
          Todos App 
        </Text>
      </View>
      <Button
        title="Add Task"
        color="#6AB04A"
        onPress={() => setIsAddMode(true)}
      />

      <GoalInput
        visibleModal={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelAddGoalModal}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: "#0A3D62",
    flex: 1,
  },
  startTextView : {
    justifyContent:'center',
    alignItems:'center',
    marginBottom:50
  },
  startText: {
    fontSize : 30,
    color : "white",
    fontWeight : 'bold',
    fontFamily: "Roboto"
  }
});
