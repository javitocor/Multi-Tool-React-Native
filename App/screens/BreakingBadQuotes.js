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
import badCall from '../helpers/APIbad';
import {bad} from '../constants/colors';
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
    color: bad.yellow2,
  },
  author: {
    fontSize: 15,
    fontWeight: 'bold',
    color: bad.brown
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
});

const BreakingBadQuotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  async function handleClick() {
    const info = await badCall();
    setQuote(info[0].quote);
    setAuthor(info[0].author);
  };
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.colors.black} />
      <ImageBackground source={require('../assets/images/bad.jpg')} resizeMode="cover" style={styles.bgimage}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={[styles.imageContainer, {marginBottom: quote !== '' ? 5 : 150, marginTop: quote !== '' ? 5 : 30}]}>
              <Image source={require('../assets/images/badlogo.png')} resizeMode='contain' style={styles.image} />
            </View>          
            {quote !== '' && (
            <View style={styles.textCont}>
              <Text style={styles.quote}>{quote}</Text>
              <Text style={styles.author}>
                -.
                {' '}
                {author}
              </Text>
            </View>
          )}          
            <Button text='Get Quote!' onPress={()=>handleClick()} colorborder='green' colorback='yellow' colortext='green' palette='bad' />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default BreakingBadQuotes;