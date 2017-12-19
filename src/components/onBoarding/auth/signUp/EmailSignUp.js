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
} from "./styles";

export default class EmailSignUp extends Component {
  constructor(props) {
    super(props);

    console.log(SignIn);

    this.state = {
      name: "",
      email: "",
      job: "",
      company: "",
      password: "",
      width: "",
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <ScrollView
            pagingEnabled={true}
            horizontal={true}
            ref={scrollview => (this.ScrollView = scrollview)}
            onContentSizeChange={(width, height) => {
              this.setState({ width });
            }}>
            <Slide color={"#80CBC4"} size={1}>
              <MainText> What's your name? </MainText>
              <TextField
                label=""
                baseColor="white"
                tintColor="white"
                textColor="white"
                value={this.state.name}
                onChangeText={name => {
                  this.setState({ name });
                }}
              />
              {this.state.name ? (
                <Footer>
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
                </Footer>
              ) : null}
            </Slide>

            {this.state.name ? (
              <Slide color={"#4DB6AC"} size={1}>
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

                <Footer>
                  <BackButton
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
                      activeOpacity={0.6}
                      onPress={() => {
                        this.ScrollView.scrollTo({
                          x:
                            this.state.location && this.state.email
                              ? this.state.width / 2
                              : this.state.width,
                          y: 0,
                          animated: true,
                        });
                      }}>
                      <SubText>Next</SubText>
                    </NextButton>
                  ) : null}
                </Footer>
              </Slide>
            ) : null}
            {this.state.location && this.state.job && this.state.name ? (
              <Slide color={"#26A69A"} size={1}>
                <MainText> {this.state.name}, what's your Email? </MainText>
                <TextField
                  label="Email"
                  baseColor="white"
                  tintColor="white"
                  textColor="white"
                  value={this.state.email}
                  onChangeText={email => {
                    this.setState({ email });
                  }}
                />
                <Footer>
                  <BackButton
                    activeOpacity={0.6}
                    onPress={() => {
                      console.log(this.state.width);
                      this.ScrollView.scrollTo({
                        x: this.state.location
                          ? this.state.width / 4
                          : this.state.width,
                        y: 0,
                        animated: true,
                      });
                    }}>
                    <SubText>Back</SubText>
                  </BackButton>
                  {this.state.email ? (
                    <NextButton
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
                </Footer>
              </Slide>
            ) : null}
            {this.state.location && this.state.job && this.state.name ? (
              <Slide color={"#26A69A"} size={1}>
                <MainText>
                  {" "}
                  Thanks, {this.state.name}. Let's make sure we got this right.{" "}
                </MainText>
                <SubText>Your name is {this.state.name}.</SubText>
                <SubText>
                  You work at {this.state.location} as a {this.state.job}.
                </SubText>
                <SubText>Your email is {this.state.email}.</SubText>
                <MainText> Is this correct? </MainText>
                <Footer>
                  <BackButton
                    activeOpacity={0.6}
                    onPress={() => {
                      this.ScrollView.scrollTo({
                        x: this.state.width / 2,
                        y: 0,
                        animated: true,
                      });
                    }}>
                    <SubText>Back</SubText>
                  </BackButton>
                  {this.state.email ? (
                    <NextButton
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
                </Footer>
              </Slide>
            ) : null}
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
