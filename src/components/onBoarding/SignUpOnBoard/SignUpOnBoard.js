import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, Dimensions } from "react-native";

import { SignIn } from "src/components";

import { TextField } from "react-native-material-textfield";

import LinkedInModal from "react-native-linkedin";

import { Secret, ClientID, Redirect } from "./config.js";

import { createLinkedInAccount } from "src/functions/auth";

import {
  Slide,
  MainText,
  SubText,
  LinkedInButtonText,
  SocialMediaSelect,
  SocialMediaText,
  BackButton,
  NextButton,
  Colors,
} from "./styles";

export default class SignUpOnBoard extends Component {
  constructor(props) {
    super(props);

    console.log(SignIn);

    this.state = {
      name: "",
      email: "",
      job: "",
      company: "",
      linkedInModal: false,
    };
  }

  render() {
    console.log(ClientID, Secret, Redirect);

    return (
      <ScrollView horizontal={true} showsButtons={true} pagingEnabled={true}>
        <Slide color={"#81D4FA"} size={1} width={Dimensions.get("window").width} height={Dimensions.get("window").height}>
          <MainText> You are only a few steps away from being able to easily share your network information. </MainText>
        </Slide>
        <Slide color={"#80DEEA"}>
          <MainText paddingBottom={"5%"}>We recommend signing in with LinkedIn.</MainText>

          <LinkedInModal
            animation={"slide"}
            clientID={ClientID}
            clientSecret={Secret}
            redirectUri={Redirect}
            permissions={["r_basicprofile"]}
            renderButton={() => {
              return <LinkedInButtonText> Sign Up With LinkedIn </LinkedInButtonText>;
            }}
            onSuccess={token => {
              createLinkedInAccount(token, this.props.navigation.navigate);
            }}
            onError={err => {
              return err;
            }}
          />
          <View style={{ position: "absolute", bottom: "5%", right: 0, left: 0 }}>
            <BackButton
              onPress={() => {
                this.props.navigation.navigate("EmailSignUp");
              }}
            >
              <SubText> Sign up with email. </SubText>
            </BackButton>
          </View>
        </Slide>
      </ScrollView>
    );
  }
}
