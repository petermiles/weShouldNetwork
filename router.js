import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";

import SignUp from "./src/components/navigation/screens/SignUp";
import SignIn from "./src/components/navigation/screens/SignIn";
import Home from "./src/components/home/Home";
import Profile from "./src/components/user/profile/Profile";

export const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In"
    }
  }
});

/* Add Custom Component to add header, footer, and other content to drawer.
https://reactnavigation.org/docs/navigators/drawer
*/

export const SignedIn = TabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        swipeEnabled: true
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home"
      }
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#e91e63"
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
