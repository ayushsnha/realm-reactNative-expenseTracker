import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './Routes';

const App = () => (
    <NavigationContainer>
        <StatusBar animated backgroundColor="#A0EDE7" />
        <Routes />
    </NavigationContainer>
);

export default App;
