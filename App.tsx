import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="#A0EDE7" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
