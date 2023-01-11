import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import styles from './Welcome.styles';
const PersonImg = require('../../../assets/Images/person.png');
const BackGroundImg = require('../../../assets/Images/background2.png');

const Welcome = ({ navigation }: any) => {
  return (
    <View style={styles.viewStyle}>
      <ImageBackground
        source={BackGroundImg}
        resizeMode="stretch"
        style={styles.bgImageStyles}>
        <Image
          source={PersonImg}
          resizeMode="contain"
          style={styles.imageStyles}
        />
        <Text style={styles.textStyle}>Spend Smarter</Text>
        <Text style={styles.textStyle}>Save More</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
          style={styles.buttonStyle}>
          <Text style={{ color: '#FFFFFF', fontWeight: '500' }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
