import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Home = ({ navigation }: any) => (
  <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    contentContainerStyle={styles.backgroundStyle}>
    <View>
      <Text>Hello</Text>
      <Button
        title="Go to Expenses"
        onPress={() => navigation.navigate('Expenses')}
      />
    </View>
  </ScrollView>
);

const Expenses = () => (
  <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    contentContainerStyle={styles.backgroundStyle}>
    <View>
      <Text>Expenses</Text>
    </View>
  </ScrollView>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Expenses"
          component={Expenses}
          options={{ title: 'Expenses' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#EEF8F7',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
