import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import * as colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({  
  header: {
    width:'100%',    
    height:screen.height*0.08,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent:'space-between',
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.colors.grey,
  },
  button:{ 
    alignItems: 'flex-start',
    justifyContent:'center',
    color: colors.white,
  },
  config: { 
    alignItems: 'flex-end',
    justifyContent:'center',
  }
});


function Header({navigation}) {
  return (    
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.button}>
        <Entypo name="list" size={32} color={colors.colors.white} />        
      </TouchableOpacity>
      <View style={styles.config}>
        <Entypo name="cog" size={30} color={colors.colors.white} />        
      </View>
    </SafeAreaView>
  );
};


export default Header;