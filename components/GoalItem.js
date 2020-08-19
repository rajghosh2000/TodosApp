import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableNativeFeedback 
        onPress={props.onDelete}
        activeOpacity={0.8}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 25,
    overflow: "hidden",
  },
});

export default GoalItem;
