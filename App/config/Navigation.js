import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Music from '../screens/Music';
import MusicDetail from '../screens/MusicDetail';
import Movies from '../screens/Movies';
import MoviesDetail from '../screens/MoviesDetail';
import GotQuotes from '../screens/GotQuotes';
import BreakingBadQuotes from '../screens/BreakingBadQuotes';
import ChuckNorrisQuotes from '../screens/ChuckNorrisQuotes';

const MoviesStack = createStackNavigator();

function MoviesStackScreen() {
  return (
    <MoviesStack.Navigator screenOptions={{ initialRouteName: "MoviesHome" }}>
      <MoviesStack.Screen name="MoviesHome" component={Movies} />
      <MoviesStack.Screen name="MoviesDetail" component={MoviesDetail} option={{unmountOnBlur: true }} />
    </MoviesStack.Navigator>
  );
}

const MusicStack = createStackNavigator();

function MusicStackScreen() {
  return (
    <MusicStack.Navigator screenOptions={{ initialRouteName: "MusicHome"}}>
      <MusicStack.Screen name="MusicHome" component={Music} />
      <MusicStack.Screen name="MusicDetail" component={MusicDetail} option={{unmountOnBlur: true }} />
    </MusicStack.Navigator>
  );
}

const TabBottom = createBottomTabNavigator();

function TabBottomNavigation() {
  return (
    <TabBottom.Navigator>
      <TabBottom.Screen name="Music" component={MusicStackScreen} options={{ headerShown: false }} />
      <TabBottom.Screen name="Movies" component={MoviesStackScreen} options={{ headerShown: false }} />
    </TabBottom.Navigator>
  );
}

const TabTop = createMaterialTopTabNavigator();

function TabTopNavigation() {
  return (
    <TabTop.Navigator>
      <TabTop.Screen name="Got" component={GotQuotes} />
      <TabTop.Screen name="Bad" component={BreakingBadQuotes} />
      <TabTop.Screen name="Chuck" component={ChuckNorrisQuotes} />
    </TabTop.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
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