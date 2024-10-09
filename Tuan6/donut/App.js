import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import MasterPortrait from './MasterPortrait';
import DetailPortrait from './DetailPortrait';

const Stack = createNativeStackNavigator();

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText1}>Welcome, Minh!</Text>
      <Text style={styles.headerText2}>Choose Your Best Food</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MasterPortrait">
        <Stack.Screen 
          name="MasterPortrait" 
          component={MasterPortrait} 
          options={{ headerTitle: () => <CustomHeader /> }} 
        />
        <Stack.Screen 
          name="DetailPortrait" 
          component={DetailPortrait} 
          options={{ title: 'Food Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerText1: {
    fontWeight:'bold',
    color: 'gray',
  },
  headerText2: {
    fontSize: 18,
    fontWeight:'bold',
  },
});

export default App;
