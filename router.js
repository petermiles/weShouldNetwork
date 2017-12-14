import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { AsyncStorage } from 'react-native';

import SignUp from './src/components/navigation/screens/SignUp';
import SignIn from './src/components/navigation/screens/SignIn';
import Connect from './src/components/connect/Connect';
import Profile from './src/components/user/profile/Profile';
import Scan from './src/components/scan/Scan';
import FavoritesPage from './src/components/favorites/FavoritesPage';

const userID = () => {
  AsyncStorage.getItem('USER_KEY').then(result => {
    return result;
  });
};

export const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up'
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign In'
    }
  }
});

export const SignedIn = TabNavigator(
  {
    Favorites: {
      screen: FavoritesPage
    },
    Profile: {
      screen: Profile,
      path: `profile/:user`,
      initialRouteParams: { user: 'test' },
      navigationOptions: {
        tabBarLabel: 'Profile',
        swipeEnabled: true
      }
    },
    Connect: {
      screen: Connect,
      navigationOptions: {
        tabBarLabel: 'Connect'
      }
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: true,
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      activeBackgroundColor: '#2196f3',
      inactiveBackgroundColor: '#1e88e5'
    },
    initialRouteName: 'Profile'
  }
);

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        path: 'signedIn/:user',
        initialRouteName: signedIn ? 'Profile' : 'SignedOut',
        userID: userID()
      },
      SignedOut: {
        screen: SignedOut
      },
      Scan: {
        screen: Scan
      }
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  );
};
