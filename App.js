import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 40}}>
      <View style={{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignContent: 'center'
      }}>
        <TextInput
          placeholder="Enter your todo here"
          style={{
            width : '80%',
            borderColor : 'black',
            borderWidth: 2,
            padding : 10
          }}
        />
        <Button
          title="ADD"
        />
      </View>
      <View>

      </View>      
    </View>
  );
}

const styles = StyleSheet.create({

});
