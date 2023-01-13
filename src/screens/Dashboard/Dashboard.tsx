import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Dashboard.styles';
import { Transactions } from '../Tabs';

const Tab = createBottomTabNavigator();

const Route2 = () => (
  <View>
    <Text>Route 2</Text>
  </View>
);

const BottomTabs = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      headerShown: false,
      // tabBarStyle: { position: 'absolute' },
    }}>
    <Tab.Screen
      name="Transactions"
      component={Transactions}
      options={{
        tabBarLabel: 'Transactions',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Route 2"
      component={Route2}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
        tabBarBadge: 3,
      }}
    />
  </Tab.Navigator>
);

const Welcome = () => {
  return (
    <View style={styles.backgroundStyle}>
      <BottomTabs />
    </View>
  );
};

export default Welcome;
