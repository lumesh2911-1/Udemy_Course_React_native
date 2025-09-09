import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
const friends = [
  {
    id: '1',
    name: 'Friend #1',
  },
  {
    id: '2',
    name: 'Friend #2',
  },
  {
    id: '3',
    name: 'Friend #3',
  },
  {
    id: '4',
    name: 'Friend #4',
  },
];

export default function ListViewScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={({ id }) => id}
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
