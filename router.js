import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { AsyncStorage } from 'react-native';

import SignUp from './src/components/navigation/screens/SignUp';
import SignIn from './src/components/navigation/screens/SignIn';
import AppOnBoard from './src/components/onBoarding/AppOnBoard';
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

export const ScannedProfile = TabNavigator(
  {
    Profile: {
      screen: Profile,
      path: `/profile/:user`,
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

export const SignedIn = TabNavigator(
  {
    Favorites: {
      screen: FavoritesPage
    },
    Profile: {
      screen: Profile,
      path: `/profile/:user`,
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
      indicatorStyle: {
        backgroundColor: 'white'
      },
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      activeBackgroundColor: '#2196f3',
      inactiveBackgroundColor: '#1e88e5'
    },
    initialRouteName: 'Profile'
  }
);

export const createRootNavigator = signedIn => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        path: '/signedIn/:user',
        initialRouteName: signedIn ? 'Profile' : 'SignedOut'
      },
      SignedOut: {
        screen: AppOnBoard
      },
      Scan: {
        screen: Scan
      },
      ScannedProfile: {
        screen: ScannedProfile,
        path: '/profile/:uid',
        initialRouteName: 'Profile'
      },
      OnBoard: {
        screen: AppOnBoard
      }
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: signedIn !== 'false' ? 'SignedIn' : 'OnBoard'
    }
  );
};
