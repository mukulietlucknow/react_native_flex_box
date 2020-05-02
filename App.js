import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding : 70 , flexDirection : 'column' , alignItems : 'stretch' }}>
      <View
        style={{
          backgroundColor: 'red',
          
          justifyContent:'center',
          alignItems : 'center'

        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          
          
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          
          
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
