import React, { useState } from 'react';
import {
    View,
    Text,
    Modal as NativeModal,
    Pressable,
    TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TransactionProp } from '../Transaction.prop';
import styles from './Modal.styles';

interface ModalProp {
    isOpen: boolean;
    setIsOpen: Function;
    setData: Function;
}

const Modal = ({ isOpen, setIsOpen, setData }:ModalProp) => {
    const [amount, setAmount] = useState('');
    return (
        <NativeModal
            animationType="fade"
            transparent
            visible={isOpen}
            onRequestClose={() => setIsOpen(false)}
        >
            <View style={styles.modalContainer}>
                <View style={styles.formWrapper}>
                    <View style={styles.closeButton}>
                        <Pressable
                            onPress={() => setIsOpen(false)}
                        >
                            <Icon name="close" size={22} />
                        </Pressable>
                    </View>
                    <View style={styles.formBlock}>
                        <Text style={{ color: '#2F7E79', fontSize: 12, marginBottom: 4 }}>Amount</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder="0"
                            // autoFocus
                            keyboardType="number-pad"
                            value={amount}
                            onChangeText={(text) => setAmount(text.replace(/[^0-9]/g, ''))}
                        />
                    </View>
                    <Pressable
                        style={styles.addButtonStyle}
                        onPress={() => {
                            setData((prev: TransactionProp[]) => (
                                [
                                    {
                                        id: Date.now(),
                                        amount: Number(amount),
                                        category: 'Food',
                                        date: new Date(),
                                        comment: 'At KFC',
                                        icon: 'food',
                                        type: 'debit',
                                    },
                                    ...prev,
                                ]
                            ));
                            setIsOpen(false);
                            setAmount('');
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="check" color="#FFF" size={18} />
                            <Text style={{ color: '#FFF', fontSize: 14 }}>Add</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </NativeModal>
    );
};

export default Modal;
