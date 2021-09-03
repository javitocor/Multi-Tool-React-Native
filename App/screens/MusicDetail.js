/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  Linking,
  Alert
} from 'react-native';
import { colors } from '../constants/colors';
import musicCall from '../helpers/APImusic';
import generateKey from '../helpers/generateKey';
import MusicDisplay from '../components/MusicDisplay';
import HeaderList from '../components/HeaderList';
import valueToApi from '../helpers/valueToApi';

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
  waiting:{
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 100,
  },
  content:{
    width: screen.width * 0.9
  },
});

const MusicDetail = (props) => {
  const { value } = props.route.params;
  const [data, setData] = useState([]);  
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    (async () => {
      try {
       setIsPending(true);
       const info = await musicCall(valueToApi(value, 'music'));
       setData(info.results)
       setIsPending(false);
      } catch (error) {
        console.log(error)
      }           
    })();  
  },[]);  

  const openLink = (url) =>
  Linking.openURL(url).catch(() =>
    Alert.alert('Sorry, something went wrong.', 'Please try again later.')
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.grey} />
      <ImageBackground source={require('../assets/images/music.jpg')} resizeMode="cover" style={styles.bgimage}>
        {isPending ? (
          <ActivityIndicator color={colors.grey} size="large" style={styles.waiting} />
          ):(
            <View style={styles.content}> 
              <FlatList 
                data={data}
                ListHeaderComponent={<HeaderList value={value} />}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (<MusicDisplay key={generateKey(item.collectionId)} item={item} onButtonPress={()=>openLink(item.collectionViewUrl)} />)}
                keyExtractor={item =>generateKey(item.releaseDate)}
              />            
            </View>
          )}          
      </ImageBackground>
    </View>
  );
};


export default MusicDetail;