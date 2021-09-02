import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Alert,
} from 'react-native';
import { 
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { Entypo } from '@expo/vector-icons';
import * as colors from '../constants/colors';
import getScreen from '../helpers/getScreen';

const styles = StyleSheet.create({
  container:{
    height: '100%',
  },
  top:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    width: '100%',
    paddingTop:20,
    marginBottom: 20,
  },
  center:{
    height: '70%',
    padding: 10,
    flexDirection: 'column',
    marginBottom: 20,
  },
  sideMenuProfileIcon:{
    resizeMode: 'contain',
    width: 150,
    height: 150,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  logout:{
    padding: 10,    
  },
  logoutTouch:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  logoutText:{
    width: '80%',
    color: colors.colors.yellow
  },
  icon:{
    width: '15%',
  },
  expand:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconShow: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.colors.grey,
  },
  contItem: {
    flexDirection: 'column'
  },
  subItems: {
    width:'100%',
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  items:{
    width: '80%'
  },
  items2: {
    width: '100%'
  }
});

function CustomDrawerContent(props) {
  const [expandableMult, setExpandableMult] = useState(false);
  const [expandableQuo, setExpandableQuo] = useState(false);
  
  function handleMult(){
    setExpandableMult(!expandableMult)
  }

  function handleQuo(){
    setExpandableQuo(!expandableQuo)
  }
  return (
    <View style={{ flex: 1, backgroundColor: colors.colors.grey, paddingTop:10 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.sideMenuProfileIcon}
            />
          </View>
          <View style={styles.center}>
            <DrawerItem
              label={({ focused }) => <Text style={{color: focused ? colors.colors.yellow : colors.colors.white}}>Home</Text>}
              onPress={() => props.navigation.navigate('Home')}
              icon={({ focused }) =><Entypo name="home" size={20} color={focused ? colors.colors.yellow : colors.colors.white} />}
              focused={props.state.index === props.state.routes.findIndex(e => e.name === "Home")}
              activeBackgroundColor={colors.colors.yellow2}
              style={styles.items}
            />
            <View style={styles.contItem}>
              <View style={styles.expand}>
                <DrawerItem
                  label={({ focused }) => <Text style={{color: focused ? colors.colors.yellow : colors.colors.white}}>Multimedia</Text>}
                  onPress={() => handleMult()}
                  icon={({ focused }) =><Entypo name="laptop" size={20} color={focused ? colors.colors.yellow : colors.colors.white} />}
                  focused={props.state.index === props.state.routes.findIndex(e => e.name === "Multimedia")}
                  activeBackgroundColor={colors.colors.yellow2}
                  style={styles.items}
                />
                <View style={styles.iconShow}>
                  {expandableMult ? 
                        (<Entypo name="chevron-up" size={20} color={colors.colors.yellow} />)
                      : (<Entypo name="chevron-down" size={20} color={colors.colors.yellow} />)
                  }            
                </View>
              </View>
              {expandableMult && (
                <View style={styles.subItems}>
                  <DrawerItem
                    label={({ focused }) => <Text style={{color: focused ? colors.colors.yellow : colors.colors.white}}>Music</Text>}
                    onPress={() => props.navigation.navigate('Multimedia', {screen: 'Music'})}
                    icon={({ focused }) =><Entypo name="beamed-note" size={20} color={focused ? colors.colors.yellow : colors.colors.white} />}
                    focused={getScreen(props, 'Music')}
                    activeBackgroundColor={colors.colors.yellow2}
                    style={styles.items}
                  />
                  <DrawerItem
                    label={({ focused }) => <Text style={{color: focused ? colors.colors.yellow : colors.colors.white}}>TV Shows</Text>}
                    onPress={() => props.navigation.navigate('Multimedia', {screen: 'TV Shows'})}
                    icon={({ focused }) =><Entypo name="video" size={20} color={focused ? colors.colors.yellow : colors.colors.white} />}                    
                    focused={getScreen(props, 'TV Shows')}
                    activeBackgroundColor={colors.colors.yellow2}
                    style={styles.items}
                  />
                </View>
              )}
            </View>
            <View style={styles.contItem}>
              <View style={styles.expand}>
                <DrawerItem
                  label={({ focused }) => <Text style={{color: focused ? colors.colors.yellow : colors.colors.white}}>Quotes</Text>}
                  onPress={() => handleQuo()}
                  icon={({ focused }) =><Entypo name="quote" size={20} color={focused ? colors.colors.yellow : colors.colors.white} />}
                  focused={props.state.index === props.state.routes.findIndex(e => e.name === "Quotes")}
                  activeBackgroundColor={colors.colors.yellow2}
                  style={styles.items}
                />
                <View style={styles.iconShow}>
                  {expandableQuo ? 
                        (<Entypo name="chevron-up" size={20} color={colors.colors.yellow} />)
                      : (<Entypo name="chevron-down" size={20} color={colors.colors.yellow} />)
                  }            
                </View>
              </View>
              {expandableQuo && (
                <View style={styles.subItems}>
                  <DrawerItem
                    label={({ focused }) => <Text style={{color: focused ? colors.colors.yellow : colors.colors.white}}>GOT</Text>}
                    onPress={() => props.navigation.navigate('Quotes', {screen: 'Got'})}
                    icon={({ focused }) =><Entypo name="quote" size={20} color={focused ? colors.colors.yellow : colors.colors.white} />}
                    focused={getScreen(props, 'Got')}
                    activeBackgroundColor={colors.colors.yellow2}
                    style={styles.items2}
                  />
                  <DrawerItem
                    label={({ focused }) => <Text style={{color: focused ? colors.colors.yellow : colors.colors.white}}>Breaking Bad</Text>}
                    onPress={() => props.navigation.navigate('Quotes', {screen: 'Bad'})}
                    icon={({ focused }) =><Entypo name="quote" size={20} color={focused ? colors.colors.yellow : colors.colors.white} />}
                    focused={getScreen(props, 'Bad')}
                    activeBackgroundColor={colors.colors.yellow2}
                    style={styles.items2}
                  />
                  <DrawerItem
                    label={({ focused }) => <Text style={{color: focused ? colors.colors.yellow : colors.colors.white}}>Chuck Norris</Text>}
                    onPress={() => props.navigation.navigate('Quotes', {screen: 'Chuck'})}
                    icon={({ focused }) =><Entypo name="quote" size={20} color={focused ? colors.colors.yellow : colors.colors.white} />}
                    focused={getScreen(props, 'Chuck')}
                    activeBackgroundColor={colors.colors.yellow2}
                    style={styles.items2}
                  />
                </View>
              )}
            </View>                        
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.logout}>
        <TouchableOpacity onPress={() => Alert.alert('Logout Successfully', 'Please, come again later')} style={styles.logoutTouch}>
          <Text style={styles.logoutText}>Logout</Text>
          <View style={styles.icon}>
            <Entypo name="log-out" size={20} color={colors.colors.yellow} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawerContent;