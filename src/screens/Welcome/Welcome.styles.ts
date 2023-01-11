import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#EEF8F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewStyle: {
    backgroundColor: '#EEF8F7',
    width: width,
    height: height,
  },
  bgImageStyles: {
    alignItems: 'center',
    height: height / 1.7,
  },
  imageStyles: {
    marginTop: height / 12,
    height: height / 1.8,
    width: width / 2,
  },
  textStyle: {
    fontWeight: 'bold',
    color: '#438883',
    fontSize: 26,
  },
  buttonStyle: {
    marginTop: 24,
    paddingVertical: 12,
    alignItems: 'center',
    width: width * 0.5,
    backgroundColor: '#69AEA9',
    borderRadius: 24,
    fontWeight: 'bold',
    color: '#438883',
    fontSize: 26,
  },
});

export default styles;
