import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import AppOnBoard from "./src/components/onBoarding/AppOnBoard/AppOnBoard";
import SignUpOnBoard from "./src/components/onBoarding/SignUpOnBoard/SignUpOnBoard";
import EmailSignUp from "./src/components/onBoarding/auth/signUp/EmailSignUp";
import Connect from "./src/components/connect/Connect";
import Profile from "./src/components/user/profile/Profile";
import Scan from "./src/components/scan/Scan";
import FavoritesPage from "./src/components/favorites/FavoritesPage";

export const ScannedProfile = TabNavigator(
  {
    Profile: {
      screen: Profile,
      path: `/profile/:user`,
      initialRouteParams: { user: "test" },
      navigationOptions: {
        tabBarLabel: "Profile",
        swipeEnabled: true,
      },
    },
    Connect: {
      screen: Connect,
      navigationOptions: {
        tabBarLabel: "Connect",
      },
    },
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: true,
      activeTintColor: "white",
      inactiveTintColor: "white",
      activeBackgroundColor: "#2196f3",
      inactiveBackgroundColor: "#1e88e5",
    },
    initialRouteName: "Profile",
  },
);

export const SignedIn = TabNavigator(
  {
    Favorites: {
      screen: FavoritesPage,
    },
    Profile: {
      screen: Profile,
      path: `/profile/:user`,
      initialRouteParams: { user: "test" },
      navigationOptions: {
        tabBarLabel: "Profile",
        swipeEnabled: true,
      },
    },
    Connect: {
      screen: Connect,
      navigationOptions: {
        tabBarLabel: "Connect",
      },
    },
  },
  {
    animationEnabled: true,
    swipeEnabled: true,

    tabBarOptions: {
      showLabel: true,
      indicatorStyle: {
        backgroundColor: "white",
      },
      activeTintColor: "white",
      inactiveTintColor: "white",
      activeBackgroundColor: "#2196f3",
      inactiveBackgroundColor: "#1e88e5",
    },
    initialRouteName: "Profile",
  },
);

export const createRootNavigator = (signedIn = false) => {
  console.log(signedIn);
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        path: "/signedIn/:user",
        initialRouteName: signedIn ? "Profile" : "SignedOut",
      },
      SignedOut: {
        screen: AppOnBoard,
      },
      Scan: {
        screen: Scan,
      },
      ScannedProfile: {
        screen: ScannedProfile,
        path: "/profile/:uid",
        initialRouteName: "Profile",
      },
      OnBoard: {
        screen: AppOnBoard,
      },
      SignUpOnBoard: {
        screen: SignUpOnBoard,
      },
      EmailSignUp: {
        screen: EmailSignUp,
      },
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "OnBoard",
    },
  );
};
