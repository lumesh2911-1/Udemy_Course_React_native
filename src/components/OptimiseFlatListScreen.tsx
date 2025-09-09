import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
const students = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Michael Johnson' },
  { id: '4', name: 'Emily Davis' },
  { id: '5', name: 'William Brown' },
  { id: '6', name: 'Olivia Wilson' },
  { id: '7', name: 'James Taylor' },
  { id: '8', name: 'Sophia Martinez' },
  { id: '9', name: 'Benjamin Anderson' },
  { id: '10', name: 'Ava Thomas' },
];

const StudentListItem = ({ name }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
export default function OptimiseFlatListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        renderItem={({ item }) => <StudentListItem name={item.name} />}
        keyExtractor={student => student.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 50,
  },
});
