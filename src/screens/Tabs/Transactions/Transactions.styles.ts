import { StyleSheet } from 'react-native';
import { height } from '../../../helpers/globalDimesions';

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    listSection: {
        marginVertical: 16,
    },
    balance: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FFF',
    },
    amount: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFF',
        marginTop: 2,
    },
    headerWrapper: {
        padding: 20,
        height: height / 4,
        backgroundColor: '#2F7E79',
        borderRadius: 20,
        justifyContent: 'space-between',
    },
    top: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    section: {
    // marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 14,
        fontWeight: '300',
        color: '#FFF',
    },
    value: {
        fontSize: 20,
        fontWeight: '500',
        color: '#FFF',
        textAlign: 'right',
    },
    date: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconStyle: {
        fontSize: 14,
        padding: 6,
        marginRight: 6,
        fontWeight: '300',
        color: '#FFF',
        backgroundColor: '#4E918D',
        borderRadius: 15,
    },
    transactionHeader: {
        fontSize: 16,
        color: '#222222',
        fontWeight: '700',
    },
});

export default styles;
