import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import Button from '../components/Button';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({  
  container: {
    flex: 1,   
    height: screen.height * 1,
    backgroundColor: colors.grey,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  logo: {
    width: screen.width * 0.90,
    height: screen.height * 0.30,
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
  },
});

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.grey} />      
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={()=>navigation.navigate("Multimedia", {screen: 'Music'})} text='Multimedia' />
        <Button onPress={()=>navigation.navigate("Quotes", {screen: "Got"})} text='Quotes' />
      </View>
    </View>
  );
};


export default Home;