/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  Image,
  Dimensions
 } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    bottom: 3,
    flexDirection: 'row',
    backgroundColor: colors.colors.grey,
    height:60,
    borderRadius:50,
    justifyContent:"space-between",
    alignItems:"center",
    borderWidth: 2,
    borderColor: colors.colors.black,
    marginHorizontal: 3,
    overflow: "hidden",
  },
  text: {
    fontSize: 14
  },
  button: {
    justifyContent:"center",
    alignItems:"center",
    width: '50%',
    height: '100%',
  },
  imageCont: {
    flex:1,
    position:'absolute',
    bottom: 0,
    zIndex:3,
    left: screen.width * 0.40,
    height:60,
    justifyContent:"center",
    alignItems:"center",
  },
  image: {
    width: 65,
    height: 65,
  },
});
function CustomBottomTabs(props) {
  const {state, descriptors, navigation} = props;
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <>
      {keyboardStatus ? (
        <View />
      ):(
        <View style={styles.container}>
          <View style={styles.imageCont}><Image source={require('../assets/images/logo.png')} resizeMode='contain' style={styles.image} /></View>
          
          {state.routes.map((route, index) => {        
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            
            const isFocused = state.index === index;

            let iconName;
            if (route.name === 'Music') {
              iconName = isFocused ? 'disc' : 'disc-outline';
            } else if (route.name === 'TV Shows') {
              iconName = isFocused ? 'film' : 'film-outline';
            } 
            

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate({ name: route.name, merge: true });
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                key={route.name}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={[styles.button, {backgroundColor: isFocused ? options.tabBarActiveBackgroundColor : options.tabBarInactiveBackgroundColor}]}
              >
                <Ionicons name={iconName} size={18} color={isFocused ? options.tabBarActiveTintColor : options.tabBarInactiveTintColor} />
                <Text style={[styles.text, {color: isFocused ? options.tabBarActiveTintColor : options.tabBarInactiveTintColor}]}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </>
  );
}

export default CustomBottomTabs;