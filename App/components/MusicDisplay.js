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

const MusicDisplay = ({item, onButtonPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.top}>
          <View style={styles.leftCont}>
            <Image source={{uri:item.artworkUrl100}} resizeMode='cover' style={styles.image} />
          </View>
          <View style={styles.rightCont}>
            <Text style={styles.text}>
              Album:
              {' '}
              {item.collectionName}
            </Text>
          </View>
        </View>        
        <View style={styles.center}>
          <View style={styles.albumInfo}> 
            <View style={styles.infoContainer}>
              <Entypo name='user' size={14} color={colors.music.blue} />
              <Text style={styles.text}>{item.artistName}</Text>
            </View>           
            <View style={styles.infoContainer}>
              <Entypo name='credit' size={14} color={colors.music.blue} />
              <Text style={styles.text}>
                Price:  
                {' '}
                {item.collectionPrice}
                {' '}
                -
                {' '}
                {item.currency}
              </Text>
            </View>              
            <View style={styles.infoContainer}>
              <Entypo name='note' size={14} color={colors.music.blue} />
              <Text style={styles.text}>
                Tracks:
                {' '}
                {item.trackCount}
              </Text>
            </View>              
            <View style={styles.infoContainer}>
              <Entypo name='cake' size={14} color={colors.music.blue} />
              <Text style={styles.text}>
                Released:
                {' '}
                {item.releaseDate.slice(0, 10)}
              </Text>
            </View>              
            <View style={styles.infoContainer}>
              <Entypo name='info' size={14} color={colors.music.blue} />
              <Text style={styles.text}>
                Genre:
                {' '}
                {item.primaryGenreName}
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

export default MusicDisplay;