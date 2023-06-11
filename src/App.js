import React from "react";
import About from "./About";
import LandingScreen from "./Landing"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack =createStackNavigator();
export default function App() {
  return (
       
    <NavigationContainer>
   
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown:false}}/>
        <Stack.Screen name="About" component={About} />
   
      </Stack.Navigator>

    </NavigationContainer>
   
  );
}
