import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";

import Swiper from "react-native-swiper";

import SignUpOnBoard from "../SignUpOnBoard/SignUpOnBoard.js";

import {
  Slide,
  Centered,
  MainText,
  SubText,
  SignUpButton,
  SignUpButtonText,
  Footer,
  FooterButton,
} from "./styles";

export default class AppOnBoard extends Component {
  render() {
    console.log(this.props);
    return (
      <Swiper dotColor={"white"} activeDotColor={"#B3E5FC"} loop={false}>
        <Slide color={"#90CAF9"}>
          <MainText>We Should Network</MainText>
          <SubText>
            {" "}
            An easier way to share and save networking information{" "}
          </SubText>
        </Slide>
        <Slide color={"#64B5F6"}>
          <MainText marginBottom="10%">Scan a QR Code</MainText>
          <SubText>
            {" "}
            Get taken directly to their profile with all of their information.{" "}
          </SubText>
        </Slide>
        <Slide color={"#42A5F5"}>
          <MainText>Save Their Information</MainText>
          <SubText>
            All of your saved networking contacts are easily accessible within
            the app.{" "}
          </SubText>
        </Slide>
        <Slide color={"#2196F3"}>
          <Centered>
            <MainText>Start Networking.</MainText>
            <SignUpButton
              activeOpacity={0.8}
              color={"#81D4FA"}
              onPress={() => {
                this.props.navigation.navigate("SignUpOnBoard");
              }}>
              <SignUpButtonText size={24}> Sign Up </SignUpButtonText>
            </SignUpButton>
          </Centered>
          <Footer>
            <FooterButton activeOpacity={0.8} color={"#81D4FA"}>
              <SignUpButtonText size={14}> Sign In </SignUpButtonText>
            </FooterButton>
          </Footer>
        </Slide>
      </Swiper>
    );
  }
}
