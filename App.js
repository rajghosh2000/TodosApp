import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from "react-native";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';



export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, {
      gid : Math.random().toString(),
      value : goalTitle
    }]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput
        onAddGoal={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item,index) => item.gid}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem 
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

  
  
});
