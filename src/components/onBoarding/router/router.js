import React from "react";
import { TabNavigator } from "react-navigation";

import { EmailSignUp } from "./screens";
import { AppOnBoard } from "./screens";
import { SignUpOnBoard } from "./screens";

export const SignUpWithEmail = TabNavigator(
  {
    Name: {
      screen: EmailSignUp,
    },
  },
  {
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: false,
      indicatorStyle: {
        backgroundColor: "white",
      },
      activeTintColor: "white",
      inactiveTintColor: "white",
      activeBackgroundColor: "#2196f3",
      inactiveBackgroundColor: "#1e88e5",
    },
  },
);

export const createRootNavigator = () => {
  return StackNavigator(
    {
      AppOnBoard: {
        screen: AppOnBoard,
      },
      SignUpOnboard: {
        screen: SignUpOnBoard,
      },
      EmailSignIn: {
        screen: SignUpWithEmail,
      },
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: AppOnBoard,
    },
  );
};
