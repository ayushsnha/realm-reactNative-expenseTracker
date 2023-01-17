import { StyleSheet } from 'react-native';
import { height, width } from '../../../../helpers/globalDimesions';

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // opacity: 0.7,
    },
    closeButton: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    formWrapper: {
        width: width * 0.9,
        height: height * 0.7,
        backgroundColor: '#FFF',
        opacity: 1,
        padding: 16,
        borderRadius: 20,
    },
    formBlock: {
        marginTop: 8,
    },
    textInputStyle: {
        borderColor: '#2F7E79',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
    },
    addButtonStyle: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        backgroundColor: '#2F7E79',
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginTop: 16,
        borderRadius: 50,
    },
});

export default styles;
