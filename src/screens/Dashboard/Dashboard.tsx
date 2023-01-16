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

const Icon = ({ name, color, size }:any) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
);

const BottomTabs = () => (
    <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
            tabBarActiveTintColor: '#2F7E79',
            headerShown: false,
        }}
    >
        <Tab.Screen
            name="Transactions"
            component={Transactions}
            options={{
                tabBarLabel: 'Transactions',
                tabBarIcon: ({ color, size }) => Icon({ name: 'home', color, size }),
            }}
        />
        <Tab.Screen
            name="Graph"
            component={Route2}
            options={{
                tabBarLabel: 'Graph',
                tabBarIcon: ({ color, size }) => Icon({ name: 'chart-donut', color, size }),
                // tabBarBadge: 3,
            }}
        />
    </Tab.Navigator>
);

const Welcome = () => (
    <View style={styles.backgroundStyle}>
        <BottomTabs />
    </View>
);

export default Welcome;
