import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
  Text,
  Image,
  ScrollView
} from 'react-native';
import Button from '../components/Button';
import chuckCall from '../helpers/APIchuck';
import {chuck} from '../constants/colors';
import * as colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  bgimage: {
    flex: 1,
    width: screen.width*1,
    height: screen.height * 1,   
    alignItems: 'center',
    justifyContent:'center',
  },
  content: {
    width: screen.width *0.80,
  },
  quote: {
    fontSize: 25,
    width: '100%',
    fontWeight: 'bold',
    color: chuck.white,
  },
  textCont: {
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: 'flex-start',
  },
  image: {
    width: screen.width * 0.90,    
  },
});

const ChuckNorrisQuotes = () => {
  const [quote, setQuote] = useState('');

  async function handleClick() {
    const info = await chuckCall();
    setQuote(info.value);
  };
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.colors.black} />
      <ImageBackground source={require('../assets/images/chuck.jpg')} resizeMode="cover" style={styles.bgimage}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={[styles.imageContainer, {marginBottom: quote !== '' ? 5 : 5, marginTop: quote !== '' ? 5 : 5}]}>
              <Image source={{uri:'http://www.google.es'}} resizeMode='contain' style={[styles.image, {height: quote !== '' ? screen.height * 0.05 : screen.height * 0.30,}]} />
            </View>          
            {quote !== '' && (
            <View style={styles.textCont}>
              <Text style={styles.quote}>{quote}</Text>
            </View>
          )}          
            <Button text='Get Quote!' onPress={()=>handleClick()} colorborder='white' colorback='blue' colortext='red' palette='chuck' />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ChuckNorrisQuotes;