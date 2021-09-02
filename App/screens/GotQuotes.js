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
import gotCall from '../helpers/APIgot';
import {got} from '../constants/colors';
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
    width: screen.width *0.80
  },
  quote: {
    fontSize: 25,
    width: '100%',
    fontWeight: 'bold',
    color: got.white,
  },
  author: {
    fontSize: 15,
    fontWeight: '400',
    color: got.yellow
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
    height: screen.height * 0.30,
  },
  house: {
    fontSize: 12,
    fontWeight: '400',
    color: got.yellow,
  },
});

const GotQuotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [house, setHouse] = useState('');
  
  async function handleClick() {
    const info = await gotCall();
    setQuote(info.sentence);
    setAuthor(info.character.name);
    setHouse(info.character.house.name)
  };
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.colors.black} />
      <ImageBackground source={require('../assets/images/got.jpg')} resizeMode="cover" style={styles.bgimage}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={[styles.imageContainer, {marginBottom: quote !== '' ? 5 : 150, marginTop: quote !== '' ? 5 : 30}]}>
              <Image source={require('../assets/images/logogot.png')} resizeMode='contain' style={styles.image} />
            </View>          
            {quote !== '' && (
            <View style={styles.textCont}>
              <Text style={styles.quote}>{quote}</Text>
              <Text style={styles.author}>
                -.
                {' '}
                {author}
              </Text>
              <Text style={styles.house}>{house}</Text>
            </View>
          )}          
            <Button text='Get Quote!' onPress={()=>handleClick()} colorborder='white' colorback='brown' colortext='yellow' palette='got' />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default GotQuotes;