/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Music from '../screens/Music';
import MusicDetail from '../screens/MusicDetail';
import Shows from '../screens/Shows';
import ShowsDetail from '../screens/ShowsDetail';
import GotQuotes from '../screens/GotQuotes';
import BreakingBadQuotes from '../screens/BreakingBadQuotes';
import ChuckNorrisQuotes from '../screens/ChuckNorrisQuotes';

import CustomBottomTabs from '../components/CustomBottomTabs';
import CustomTopTabs from '../components/CustomTopTabs';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Header from '../components/Header';
import HeaderBack from '../components/HeaderBack';
import * as colors from '../constants/colors';

const ShowsStack = createStackNavigator();

function ShowsStackScreen() {
  return (
    <ShowsStack.Navigator screenOptions={{ initialRouteName: "TVShowsHome", header: (props) => <HeaderBack {...props} /> }}>
      <ShowsStack.Screen name="TVShowsHome" component={Shows} options={{ headerShown: false }} />
      <ShowsStack.Screen name="ShowsDetail" component={ShowsDetail} options={{unmountOnBlur: true}} />
    </ShowsStack.Navigator>
  );
}

const MusicStack = createStackNavigator();

function MusicStackScreen() {
  return (
    <MusicStack.Navigator screenOptions={{ initialRouteName: "MusicHome", header: (props) => <HeaderBack {...props} />}}>
      <MusicStack.Screen name="MusicHome" component={Music} options={{ headerShown: false }} />
      <MusicStack.Screen name="MusicDetail" component={MusicDetail} options={{unmountOnBlur: true}} />
    </MusicStack.Navigator>
  );
}

const TabBottom = createBottomTabNavigator();

function TabBottomNavigation() {
  return (
    <TabBottom.Navigator 
      screenOptions={({ route }) =>({        
        initialRouteName: "Music",
        tabBarActiveTintColor: (route.name === 'Music' ? colors.music.red : colors.shows.orange),
        tabBarInactiveTintColor: colors.colors.white,
        tabBarActiveBackgroundColor: (route.name === 'Music' ? colors.music.blue : colors.shows.blue),
        tabBarInactiveBackgroundColor: colors.colors.grey,
      })} 
      tabBar={props => (
        <CustomBottomTabs {...props} />
      )}
    >
      <TabBottom.Screen 
        name="Music" 
        component={MusicStackScreen} 
        options={{ headerShown: false }} 
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Music', {screen: 'MusicHome' });
          },
        })}
      />
      <TabBottom.Screen 
        name="TV Shows" 
        component={ShowsStackScreen} 
        options={{ headerShown: false }} 
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('TV Shows', {screen: 'TVShowsHome' });
          },
      })}
      />
    </TabBottom.Navigator>
  );
}

const TabTop = createMaterialTopTabNavigator();

function TabTopNavigation() {
  return (
    <TabTop.Navigator 
      screenOptions={({ route }) => ({
        initialRouteName: "Got",
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Got') {
            iconName = focused ? 'md-paw' : 'md-paw-outline';
          } else if (route.name === 'Bad') {
            iconName = focused ? 'flask' : 'flask-outline';
          } else if (route.name === 'Chuck') {
            iconName = focused ? 'body' : 'body-outline';
          } 
          return <Ionicons name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: (route.name === 'Got' ? colors.got.yellow : route.name === 'Bad' ? colors.bad.green : colors.chuck.red),
        tabBarInactiveTintColor: colors.colors.white,
        tabBarIndicatorContainerStyle:{backgroundColor: (route.name === 'Got' ? colors.got.brown : route.name === 'Bad' ? colors.bad.yellow2 : colors.chuck.blue) },
        tabBarIndicatorStyle: {backgroundColor: (route.name === 'Got' ? colors.got.yellow : route.name === 'Bad' ? colors.bad.green : colors.chuck.red)}
      })}
    >
      <TabTop.Screen name="Got" component={GotQuotes} />
      <TabTop.Screen name="Bad" component={BreakingBadQuotes} />
      <TabTop.Screen name="Chuck" component={ChuckNorrisQuotes} />
    </TabTop.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ 
        header: (props) => <Header {...props} />,
      }}      
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Multimedia" component={TabBottomNavigation}  />
      <Drawer.Screen name="Quotes" component={TabTopNavigation}  />
    </Drawer.Navigator>
  );
}

export default () => (
  <NavigationContainer>
    <DrawerNavigation />
  </NavigationContainer>
);