import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './Dashboard.styles';

const Welcome = () => {
  return (
    <ScrollView contentContainerStyle={styles.backgroundStyle}>
      <View>
        <Text>Dashboard Page</Text>
      </View>
    </ScrollView>
  );
};

export default Welcome;
