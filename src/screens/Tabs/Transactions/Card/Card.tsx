import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Card.styles';

const Card = ({ item }:any) => (
    <View style={styles.cardWrapper}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.categoryStyle}>
                <Icon style={styles.categoryIconStyle} name={item.icon} />
            </View>
            <View style={{ marginLeft: 12 }}>
                <Text style={{ color: '#000' }}>{item.category}</Text>
                <Text style={{ color: '#666' }}>{item.date.toDateString()}</Text>
            </View>
        </View>
        <View>
            {item.type === 'debit' ? (
                <Text style={{ color: '#F95B51', fontSize: 18, fontWeight: '500' }}>
                    + ₹
                    {item.amount}
                </Text>
            ) : (
                <Text style={{ color: '#25A969', fontSize: 18, fontWeight: '500' }}>
                    + ₹
                    {item.amount}
                </Text>
            )}
        </View>
    </View>
);

export default Card;
