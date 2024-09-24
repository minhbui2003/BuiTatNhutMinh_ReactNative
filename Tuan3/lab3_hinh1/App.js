import React from 'react';
import {View, Text, button } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#00bfff', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ width: 100, height: 100, borderRadius: 500, borderWidth:10, borderColor: 'black', marginBottom: 70 }}/>  
      <Text style={{fontSize: 32, fontWeight: 'bold', color: 'black' }}>GROW</Text>
      <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black' }}>YOUR BUSINESS</Text>
      <Text style={{textAlign: 'center', marginBottom: 50, color: 'black', fontWeight:'bold', marginTop:50 }}>
        We will help you to grow your business using online server
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
        <button style={{ backgroundColor: '#ffcc00', padding: 15, borderRadius: 5, margin: 10, flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>LOGIN</Text>
        </button>
        <button style={{ backgroundColor: '#ffcc00', padding: 15, borderRadius: 5, margin: 10, flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>SIGN UP</Text>
        </button>
      </View>
    </View>
  );
};

export default App;
