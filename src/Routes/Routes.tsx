import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome, Dashboard } from '../screens';

const Stack = createNativeStackNavigator();

const Routes = () => (
    <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

export default Routes;
