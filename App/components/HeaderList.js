/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {colors} from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:'center',
    marginVertical: 20,
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    textDecorationLine: 'underline',
    textDecorationColor: colors.white,
  }
});

const HeaderList = ({value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default HeaderList;