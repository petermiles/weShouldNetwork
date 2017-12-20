import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";

import { Container, Content } from "native-base";

import { SignIn } from "src/components";

import { TextField } from "react-native-material-textfield";

import {
  Slide,
  MainText,
  SubText,
  BackButton,
  NextButton,
  Footer,
  Header,
  SkipButton,
  CreateAccountButton,
} from "./styles";

import { createAccount } from "./../../../../functions/auth";

export default class EmailSignUp extends Component {
  constructor(props) {
    super(props);

    console.log(SignIn);

    this.state = {
      name: "",
      email: "",
      job: "",
      location: "",
      password: "",
      width: "",
      skipped: false,
      password2: "",
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <ScrollView
            pagingEnabled={true}
            horizontal={true}
            scrollEnabled={false}
            ref={scrollview => (this.ScrollView = scrollview)}
            onContentSizeChange={(width, height) => {
              this.setState({ width });
            }}>
            <Slide color={"#80CBC4"} size={1}>
              <View style={{ padding: "2%" }}>
                <MainText> What's your name? </MainText>
                <TextField
                  label=""
                  baseColor="white"
                  tintColor="white"
                  textColor="white"
                  containerStyle={{ width: "100%" }}
                  value={this.state.name}
                  onChangeText={name => {
                    this.setState({ name });
                  }}
                />
              </View>
              {this.state.name ? (
                <NextButton
                  activeOpacity={0.6}
                  onPress={() => {
                    this.ScrollView.scrollTo({
                      x: 360,
                      y: 0,
                      animated: true,
                    });
                  }}>
                  <SubText>Next</SubText>
                </NextButton>
              ) : null}
            </Slide>

            {this.state.name ? (
              <Slide color={"#4DB6AC"} size={1}>
                <SkipButton
                  hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                  onPress={() => {
                    this.setState({ skipped: true });
                    this.ScrollView.scrollTo({
                      x: Dimensions.get("window").width * 2,
                      y: 0,
                      animated: true,
                    });
                  }}>
                  <SubText> Skip </SubText>
                </SkipButton>

                <View style={{ padding: "2%" }}>
                  <MainText> {this.state.name}, where do you work? </MainText>
                  <TextField
                    label="Company"
                    baseColor="white"
                    tintColor="white"
                    textColor="white"
                    value={this.state.location}
                    onChangeText={location => {
                      this.setState({ location });
                    }}
                  />
                </View>
                {this.state.location ? (
                  <View>
                    <SubText paddingTop={"5%"}>
                      {" "}
                      What do you do at {this.state.location}?{" "}
                    </SubText>
                    <TextField
                      label="Job"
                      baseColor="white"
                      tintColor="white"
                      textColor="white"
                      value={this.state.job}
                      onChangeText={job => {
                        this.setState({ job });
                      }}
                    />
                  </View>
                ) : null}

                <BackButton
                  hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                  activeOpacity={0.6}
                  onPress={() => {
                    this.ScrollView.scrollTo({
                      x: 0,
                      y: 0,
                      animated: true,
                    });
                  }}>
                  <SubText>Back</SubText>
                </BackButton>
                {this.state.job && this.state.location ? (
                  <NextButton
                    hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                    activeOpacity={0.6}
                    onPress={() => {
                      this.ScrollView.scrollTo({
                        x: Dimensions.get("window").width * 2,
                        y: 0,
                        animated: true,
                      });
                    }}>
                    <SubText>Next</SubText>
                  </NextButton>
                ) : null}
              </Slide>
            ) : null}
            {(this.state.location && this.state.job && this.state.name) ||
            this.state.skipped ? (
              <Slide color={"#26A69A"} size={1}>
                <MainText> {this.state.name}, what's your Email? </MainText>
                <TextField
                  keyboardType="email-address"
                  label="Email"
                  baseColor="white"
                  tintColor="white"
                  textColor="white"
                  value={this.state.email}
                  onChangeText={email => {
                    this.setState({ email });
                  }}
                />

                <BackButton
                  hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                  activeOpacity={0.6}
                  onPress={() => {
                    console.log("test");
                    this.ScrollView.scrollTo({
                      x: Dimensions.get("window").width,
                      y: 0,
                      animated: true,
                    });
                  }}>
                  <SubText>Back</SubText>
                </BackButton>
                {this.state.email ? (
                  <NextButton
                    hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                    activeOpacity={0.6}
                    onPress={() => {
                      this.ScrollView.scrollTo({
                        x: Dimensions.get("window").width * 3,
                        y: 0,
                        animated: true,
                      });
                    }}>
                    <SubText>Next</SubText>
                  </NextButton>
                ) : null}
              </Slide>
            ) : null}
            {(this.state.location && this.state.job && this.state.name) ||
            this.state.skipped ? (
              <Slide color={"#26A69A"} size={1}>
                <MainText> Create your password. </MainText>
                <TextField
                  secureTextEntry={true}
                  label="Password"
                  baseColor="white"
                  tintColor="white"
                  textColor="white"
                  value={this.state.password}
                  onChangeText={password => {
                    this.setState({ password });
                  }}
                />
                <TextField
                  secureTextEntry={true}
                  label="Confirm Your Password"
                  baseColor="white"
                  tintColor="white"
                  textColor="white"
                  value={this.state.password2}
                  onChangeText={password2 => {
                    this.setState({ password2 });
                  }}
                />

                <BackButton
                  hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                  activeOpacity={0.6}
                  onPress={() => {
                    console.log(
                      this.state.width - Dimensions.get("window").width * 3,
                    );
                    this.ScrollView.scrollTo({
                      x: this.state.width - Dimensions.get("window").width * 3,
                      y: 0,
                      animated: true,
                    });
                  }}>
                  <SubText>Back</SubText>
                </BackButton>
                {this.state.password &&
                this.state.password === this.state.password2 ? (
                  <NextButton
                    hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                    activeOpacity={0.6}
                    onPress={() => {
                      this.ScrollView.scrollTo({
                        x: Dimensions.get("window").width * 4,
                        y: 0,
                        animated: true,
                      });
                    }}>
                    <SubText>Next</SubText>
                  </NextButton>
                ) : null}
              </Slide>
            ) : null}
            {(this.state.location &&
              this.state.job &&
              this.state.name &&
              this.state.password === this.state.password2) ||
            (this.state.skipped &&
              this.state.password === this.state.password2) ? (
              <Slide color={"#009688"} size={1}>
                <MainText paddingBottom={"20%"}>
                  {" "}
                  Let's make sure we got this right.{" "}
                </MainText>

                <View>
                  <SubText>Your name is {this.state.name}.</SubText>
                  {this.state.skipped ? (
                    <SubText>
                      {" "}
                      You chose not to share your work information{" "}
                    </SubText>
                  ) : (
                    <SubText>
                      You work at {this.state.location} as a {this.state.job}.
                    </SubText>
                  )}
                  <SubText>Your email is {this.state.email}.</SubText>
                  <CreateAccountButton
                    onPress={() => {
                      createAccount(this.state, this.props.navigation.navigate);
                    }}>
                    <MainText> Create Account.</MainText>
                  </CreateAccountButton>
                </View>

                <BackButton
                  activeOpacity={0.6}
                  hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                  onPress={() => {
                    this.ScrollView.scrollTo({
                      x: this.state.width - Dimensions.get("window").width * 2,
                      y: 0,
                      animated: true,
                    });
                  }}>
                  <SubText>Back</SubText>
                </BackButton>
              </Slide>
            ) : null}
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
