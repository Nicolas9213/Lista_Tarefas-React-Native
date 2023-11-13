import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import AddList from './src/AddList/AddList';
import ListDetails from './src/ListDetails/ListDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Your Lists" component={HomeScreen} />
        <Stack.Screen name="AddList" component={AddList} />
        <Stack.Screen name="List Details" component={ListDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;