import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import * as colors from '../constants/colors';

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    top: 4,
    left: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    zIndex: 3,
  },
});

function HeaderBack(props) {
  const color = props.route.name === 'MusicDetail' ? colors.music.red : colors.shows.orange;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Entypo name='arrow-left' color={color} size={28} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBack;