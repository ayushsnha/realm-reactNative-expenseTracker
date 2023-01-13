import { StyleSheet } from 'react-native';
import { height } from '../../../helpers/globalDimesions';

const styles = StyleSheet.create({
  continer: {
    margin: 20,
  },
  scrollView: {},
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
    fontSize: 18,
    fontWeight: '500',
    color: '#FFF',
    marginLeft: 16,
  },
});

export default styles;
