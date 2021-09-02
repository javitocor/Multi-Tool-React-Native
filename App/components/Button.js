import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import getColor from '../helpers/getColor';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2, 
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const Button = ({ onPress, text, colorborder, colorback, colortext, palette }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, {backgroundColor: getColor(palette, colorback), borderColor: getColor(palette, colorborder)}]}>
      <Text style={[styles.buttonText, {color: getColor(palette, colortext)}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;