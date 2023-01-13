import React from 'react';
import { ScrollView, View, Text, StatusBar } from 'react-native';
import styles from './Transactions.styles';

const Transactions = () => (
  <View style={styles.continer}>
    <StatusBar animated={true} backgroundColor="#2F7E79" />
    <View style={styles.headerWrapper}>
      <View style={styles.top}>
        <View>
          <Text style={styles.balance}>Total Balance</Text>
          <Text style={styles.amount}>$5000</Text>
        </View>
        <View>
          <Text style={styles.balance}>January ⏬</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View>
          <Text style={styles.label}>🔺Income</Text>
          <Text style={styles.value}>$6500</Text>
        </View>
        <View>
          <Text style={styles.label}>🔻Expenses</Text>
          <Text style={styles.value}>$1500</Text>
        </View>
      </View>
    </View>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Text>Space for Cards</Text>
    </ScrollView>
  </View>
);

export default Transactions;
