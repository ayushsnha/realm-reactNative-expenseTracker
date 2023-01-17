import React, { useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from './Card';
import Modal from './Modal';

import styles from './Transactions.styles';

// interface ItemProp {
//     id: Number,
//     amount: Number;
//     category: String;
//     date: Date;
//     comment: String;
// }

const defaultData = [
    {
        id: 1,
        amount: 100,
        category: 'Food',
        date: new Date(),
        comment: 'At KFC',
        icon: 'food',
        type: 'debit',
    },
    {
        id: 2,
        amount: 400,
        category: 'Grocery',
        date: new Date(),
        comment: 'Relience Smart',
        icon: 'cart',
        type: 'debit',
    },
    {
        id: 3,
        amount: 600,
        category: 'Freelance',
        date: new Date(),
        comment: 'At & T',
        icon: 'file-code-outline',
        type: 'credit',
    },
    {
        id: 4,
        amount: 100,
        category: 'Food',
        date: new Date(),
        comment: 'At KFC',
        icon: 'food',
        type: 'debit',
    },
    {
        id: 5,
        amount: 400,
        category: 'Grocery',
        date: new Date(),
        comment: 'Relience Smart',
        icon: 'cart',
        type: 'debit',
    },
    {
        id: 6,
        amount: 600,
        category: 'Freelance',
        date: new Date(),
        comment: 'At & T',
        icon: 'file-code-outline',
        type: 'credit',
    },
    {
        id: 7,
        amount: 600,
        category: 'Freelance',
        date: new Date(),
        comment: 'At & T',
        icon: 'file-code-outline',
        type: 'credit',
    },
    {
        id: 8,
        amount: 600,
        category: 'Freelance',
        date: new Date(),
        comment: 'At & T',
        icon: 'file-code-outline',
        type: 'credit',
    },
    {
        id: 9,
        amount: 800,
        category: 'Freelance',
        date: new Date(),
        comment: 'At & T',
        icon: 'file-code-outline',
        type: 'credit',
    },
    {
        id: 10,
        amount: 100,
        category: 'Food',
        date: new Date(),
        comment: 'At KFC',
        icon: 'food',
        type: 'debit',
    },
    {
        id: 11,
        amount: 400,
        category: 'Grocery',
        date: new Date(),
        comment: 'Relience Smart',
        icon: 'cart',
        type: 'debit',
    },
];

const Transactions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState(defaultData);
    return (
        <View style={styles.container}>
            <StatusBar animated backgroundColor="#2F7E79" />
            <View style={styles.headerWrapper}>
                <View style={styles.top}>
                    <View>
                        <Text style={styles.balance}>Total Balance</Text>
                        <Text style={styles.amount}>₹5000</Text>
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
                        <Text style={styles.value}>₹6500</Text>
                    </View>
                    <View>
                        <View style={styles.date}>
                            <MaterialCommunityIcons
                                name="arrow-down"
                                style={styles.iconStyle}
                            />
                            <Text style={styles.label}>Expenses</Text>
                        </View>
                        <Text style={styles.value}>₹1500</Text>
                    </View>
                </View>
            </View>
            <View style={{ ...styles.listSection }}>
                <Text style={styles.transactionHeader}>Transactions History</Text>
                <FlatList
                    data={data}
                    renderItem={Card}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 250 }}
                />
            </View>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => setIsOpen(true)}
            >
                <MaterialCommunityIcons
                    name="plus"
                    size={26}
                    color="#FFF"
                />
            </TouchableOpacity>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setData={setData}
            />
        </View>
    );
};

export default Transactions;
