import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
        <TouchableOpacity style={styles.date}>
          <Text style={styles.balance}>January</Text>
          <MaterialCommunityIcons name="chevron-down" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <View>
          <View style={styles.date}>
            <MaterialCommunityIcons name="arrow-up" style={styles.iconStyle} />
            <Text style={styles.label}>Income</Text>
          </View>
          <Text style={styles.value}>$6500</Text>
        </View>
        <View>
          <View style={styles.date}>
            <MaterialCommunityIcons
              name="arrow-down"
              style={styles.iconStyle}
            />
            <Text style={styles.label}>Expenses</Text>
          </View>
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
