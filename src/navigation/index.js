import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Practices from '../screens/Practices';
import Meditation from '../screens/Meditation';

const navOptionHandler = (navigation) => ({
  headerShown: false,
});

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: navOptionHandler,
  },
});

const MainTabs = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name='home' color={tintColor} size={28} />
      )
    }
  },
  Practices: {
    screen: Practices,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name='book-open' color={tintColor} size={28} />
      )
    }
  },
  Meditation: {
    screen: Meditation,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name='zap' color={tintColor} size={28} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name='user' color={tintColor} size={28} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#4A80F0',
    inactiveTintColor: '#89909A',
    showLabel: false,
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 8
    },
  },
});

export default createAppContainer(MainTabs);
