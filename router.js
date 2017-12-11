import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";

import SignUp from "./src/components/navigation/screens/SignUp";
import SignIn from "./src/components/navigation/screens/SignIn";
import Connect from "./src/components/connect/Connect";
import Profile from "./src/components/user/profile/Profile";
import Scan from "./src/components/scan/Scan";

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

export const SignedIn = TabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        swipeEnabled: true
      }
    },
    Connect: {
      screen: Connect,
      navigationOptions: {
        tabBarLabel: "Connect"
      }
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: true,
      activeTintColor: "white",
      inactiveTintColor: "white",
      activeBackgroundColor: "#2196f3",
      inactiveBackgroundColor: "#1e88e5"
    },
    initialRouteName: "Profile"
  }
);

export const SignedInWrapper = StackNavigator(
  {
    SignedIn: {
      screen: SignedIn,
      navigationOptions: {
        tabBarLabel: "Connect"
      }
    },
    Scan: {
      screen: Scan
    },
    Profile: {
      screen: Profile
    }
  },
  {
    mode: "modal"
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
      },
      Scan: {
        screen: Scan
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
