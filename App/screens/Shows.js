/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import Button from '../components/Button';
import { KeyboardSpacer } from '../components/KeyboardSpacer';
import * as colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  bgimage: {
    flex: 1,
    width: screen.width * 1,
    height: screen.height * 1,   
    alignItems: 'center',
    justifyContent:'center',
  },
  content: {
    height: screen.height * 0.7,
    width: screen.width * 0.85,
    flexDirection: 'column',    
    alignItems: 'center',
    justifyContent:'center',
  },
  inputCont: {
    width:'100%',
    height: 150,
    alignItems: 'center',
    marginTop: 20,
  },
  button: {    
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
  },
  inputText:{
    width:'85%',
    backgroundColor: colors.shows.orange,
    borderColor: colors.blue,
    borderWidth: 2, 
    borderRadius: 5,
    height: '40%',
    padding: 8,
    color: colors.shows.white,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: 'flex-start',
  },
  image: {
    width: screen.width * 0.90,
    height: screen.height * 0.30,
  },
});

const Shows = (props) => {
  const {navigation} = props;
  const [value, setValue] = useState('');
  const [scrollEnabled, setScrollEnabled] = useState(false);


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.colors.grey} />
      <ImageBackground source={require('../assets/images/shows.jpg')} resizeMode="cover" style={styles.bgimage}>
        <ScrollView scrollEnabled={scrollEnabled}>
          <View style={styles.content}> 
            <View style={styles.imageContainer}>
              <Image source={require('../assets/images/showslogo.png')} resizeMode='contain' style={styles.image} />
            </View>                  
            <View style={styles.inputCont}>
              <TextInput 
                style={styles.inputText}
                placeholder="Type here the TV Show name!"
                placeholderTextColor={colors.shows.white}
                placeholderStyle={{ fontWeight: 'bold' }}
                onChangeText={text => setValue(text)}
              />
            </View>
            <View style={styles.button}>
              <Button 
                text="Search!"
                onPress={() => navigation.navigate('ShowsDetail', {value})}
                colorborder='orange'
                colorback='blue'
                colortext='orange'
                palette='shows'
              />
            </View>
            <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};


export default Shows;