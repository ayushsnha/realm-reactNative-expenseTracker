import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome, Dashboard } from '../screens';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default Routes;
