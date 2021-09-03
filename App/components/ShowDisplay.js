import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Button from "./Button";

import * as colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  content: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: colors.colors.grey,
    borderColor: colors.music.blue,
    borderWidth: 2,
    borderRadius: 5,
  },
  top: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: colors.music.blue
  },
  leftCont: {
    width: '38%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightCont: {
    width: '62%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  center: {
    flexDirection: 'column',
    padding: 7,
    borderBottomWidth: 2,
    borderBottomColor: colors.music.blue
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 5,
    color: colors.music.blue
  },
  albumInfo: {
    width: '100%',
    flexDirection: 'column',
  },
  buttonCont: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  }
});

const ShowDisplay = ({item, onButtonPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.top}>
          <View style={styles.leftCont}>
            <Image source={{uri:item.show.image.original}} resizeMode='cover' style={styles.image} />
          </View>
          <View style={styles.rightCont}>
            <Text style={styles.text}>
              {item.show.name !== null ? item.show.name : 'unknown'}
            </Text>
          </View>
        </View>        
        <View style={styles.center}>
          <View style={styles.albumInfo}> 
            <View style={styles.infoContainer}>
              <Entypo name='gauge' size={14} color={colors.music.blue} />
              <Text style={styles.text}>
                Status:
                {' '}
                {item.show.status !== null ? item.show.status : 'unknown'}
              </Text>
            </View>           
            <View style={styles.infoContainer}>
              <Entypo name='time-slot' size={14} color={colors.music.blue} />
              <Text style={styles.text}>
                Runtime:  
                {' '}
                {item.show.averageRuntime !== null ? item.show.averageRuntime : 'unknown'}
              </Text>
            </View>              
            <View style={styles.infoContainer}>
              <Entypo name='tv' size={14} color={colors.music.blue} />
              <Text style={styles.text}>
                Network:
                {' '}
                {item.show.network !== null ? item.show.network.name : 'unknown'}
              </Text>
            </View>              
            <View style={styles.infoContainer}>
              <Entypo name='clapperboard' size={14} color={colors.music.blue} />
              <Text style={styles.text}>
                Premier:
                {' '}
                {item.show.premiered !== null ? item.show.premiered : 'unknown'}
              </Text>
            </View>              
            <View style={styles.infoContainer}>
              <Entypo name='star' size={14} color={colors.music.blue} />
              <Text style={styles.text}>
                Rating:
                {' '}
                {item.show.rating.average !== null ? item.show.rating.average : 'unknown'}
              </Text>
            </View>              
          </View>          
        </View>
        <View style={styles.buttonCont}>
          <Button 
            onPress={onButtonPress} 
            text='Go to site' 
            colorborder='blue'
            colorback='transparent'
            colortext='blue'
            palette='music'
          />
        </View>
      </View>
    </View>
  );
};

export default ShowDisplay;