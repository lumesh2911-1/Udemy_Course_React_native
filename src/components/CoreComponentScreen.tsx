import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CoreComponentScreen() {
  return (
    <View style={styles.container}>
      {/* View */}
      <View
        style={{
          height: '20%',
          width: '40%',
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white' }}>First</Text>
      </View>
      <View
        style={{
          height: '20%',
          width: '40%',
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white' }}>Second</Text>
      </View>

      {/* Text */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: '5%' }}>
        Heading
      </Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        I am learning {`\n`} react native.
      </Text>

      {/* Image */}
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        height={200}
        width={200}
        style={{ borderRadius: 100, marginTop: '5%' }}
      />

      {/* Pressable */}
      <Pressable
        style={{
          backgroundColor: 'green',
          borderRadius: 10,
          marginTop: '5%',
          paddingVertical: 20,
          paddingHorizontal: 40,
        }}
        onPress={() => console.log('Pressable Pressed...!!')}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>Pressable</Text>
      </Pressable>

      <Button
        title="Button"
        onPress={() => console.log('Button Pressed...!!')}
        color="#841584"
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
  },
});
