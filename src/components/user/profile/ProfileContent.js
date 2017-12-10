import React from "react";
import { TabNavigator } from "react-navigation";

import Description from "./description/Description";
import ConnectLinkPage from "./connectLink/ConnectLinkPage";

export default (ProfileContent = TabNavigator(
  {
    Description: {
      screen: Description,
      navigationOptions: {
        tabBarLabel: "Description",
        swipeEnabled: true
      }
    },
    Connect: {
      screen: ConnectLinkPage,
      navigationOptions: {
        tabBarLabel: "Connect",
        swipeEnabled: true
      }
    }
  },
  {
    animationEnabled: true,
    tabBarOptions: {
      showLabel: true,
      activeTintColor: "#e91e63"
    }
  }
));
