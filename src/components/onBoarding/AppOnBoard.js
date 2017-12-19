import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import styled from 'styled-components/native';

import Swiper from 'react-native-swiper';

import SignUpOnBoard from './SignUpOnBoard';

const Slide = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color || '#92BBD9'};
`;

const MainText = styled.Text`
  color: white;
  font-size: 30;
  font-weight: bold;
  padding: 10%;
  text-align: center;
`;

const SubText = styled.Text`
  color: white;
  font-size: 20;
  font-weight: bold;
  text-align: center;
  padding-top: 3%
  padding-bottom: 3%
  padding-left: 10%;
  padding-right: 10%;
`;

const Footer = styled.View`
  position: absolute;
  bottom: 10%;
  left: 0;
  right: 0;
  flex-direction: row
  justify-content: center;
  align-items: center;
`;

const SignUpButton = styled.TouchableOpacity`
  elevation: 3
  background-color: ${props => props.color}
  width: 40%;
  align-items: center;
  padding: 2%;
  border-radius: 3
  margin: 1%;
`;

const SignUpButtonText = styled.Text`
  font-size: ${props => props.size}
  color: white;
  font-weight: bold;
`;

const FooterButton = styled.TouchableOpacity`
  elevation: 3
  background-color: ${props => props.color}
  width: 40%;
  align-items: center;
  padding: 2%;
  border-radius: 3
  margin: 1%;
`;

export default class AppOnBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false
    };
  }
  render() {
    return (
      <Swiper
        dotColor={'white'}
        activeDotColor={'#B3E5FC'}
        loop={false}
        showsButtons={true}>
        <Slide color={'#90CAF9'}>
          <MainText>We Should Network</MainText>
          <SubText>
            {' '}
            An easier way to share and save networking information{' '}
          </SubText>
        </Slide>
        <Slide color={'#64B5F6'}>
          <MainText marginBottom="10%">Scan a QR Code</MainText>
          <SubText>
            {' '}
            Get taken directly to their profile with all of their information.{' '}
          </SubText>
        </Slide>
        <Slide color={'#42A5F5'}>
          <SubText>
            Save their information to your favorites or share with your friends.{' '}
          </SubText>
        </Slide>
        <Slide color={'#2196F3'}>
          <View style={{ alignItems: 'center' }}>
            <SubText>Sign up to set up your profile.</SubText>
            <SignUpButton
              activeOpacity={0.8}
              color={'#81D4FA'}
              onPress={() => {
                this.props.navigation.navigate('SignUpOnBoard');
              }}>
              <SignUpButtonText size={24}> Sign Up </SignUpButtonText>
            </SignUpButton>
          </View>
          <Footer>
            <FooterButton activeOpacity={0.8} color={'#81D4FA'}>
              <SignUpButtonText size={14}> Sign In </SignUpButtonText>
            </FooterButton>
          </Footer>
        </Slide>
      </Swiper>
    );
  }
}
