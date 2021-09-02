import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Music from '../screens/Music';
import MusicDetail from '../screens/MusicDetail';
import Shows from '../screens/Shows';
import ShowsDetail from '../screens/ShowsDetail';
import GotQuotes from '../screens/GotQuotes';
import BreakingBadQuotes from '../screens/BreakingBadQuotes';
import ChuckNorrisQuotes from '../screens/ChuckNorrisQuotes';

import CustomDrawerContent from '../components/CustomDrawerContent';
import Header from '../components/Header';
import colors from '../constants/colors';

const ShowsStack = createStackNavigator();

function ShowsStackScreen() {
  return (
    <ShowsStack.Navigator screenOptions={{ initialRouteName: "TVShowsHome" }}>
      <ShowsStack.Screen name="TVShowsHome" component={Shows} options={{ headerShown: false }} />
      <ShowsStack.Screen name="ShowsDetail" component={ShowsDetail} option={{unmountOnBlur: true }} />
    </ShowsStack.Navigator>
  );
}

const MusicStack = createStackNavigator();

function MusicStackScreen() {
  return (
    <MusicStack.Navigator screenOptions={{ initialRouteName: "MusicHome"}}>
      <MusicStack.Screen name="MusicHome" component={Music} options={{ headerShown: false }} />
      <MusicStack.Screen name="MusicDetail" component={MusicDetail} option={{unmountOnBlur: true }} />
    </MusicStack.Navigator>
  );
}

const TabBottom = createBottomTabNavigator();

function TabBottomNavigation() {
  return (
    <TabBottom.Navigator>
      <TabBottom.Screen name="Music" component={MusicStackScreen} options={{ headerShown: false }} />
      <TabBottom.Screen name="TV Shows" component={ShowsStackScreen} options={{ headerShown: false }} />
    </TabBottom.Navigator>
  );
}

const TabTop = createMaterialTopTabNavigator();

function TabTopNavigation() {
  return (
    <TabTop.Navigator screenOptions={{ initialRouteName: "Got"}}>
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