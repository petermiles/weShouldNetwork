import React from 'react';
import { TabNavigator } from 'react-navigation';

import ConnectLinkPage from './connectLink/ConnectLinkPage';

export default (ProfileContent = TabNavigator(
  {
    Connect: {
      screen: ConnectLinkPage,
      navigationOptions: {
        tabBarLabel: 'Connect',
        swipeEnabled: true
      }
    }
  },
  {
    animationEnabled: true,
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#e91e63'
    }
  }
));
