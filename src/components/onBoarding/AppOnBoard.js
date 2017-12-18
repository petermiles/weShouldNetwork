import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styled from 'styled-components/native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

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

export default class AppOnBoard extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} loop={false}>
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
          <SubText>Sign up to set up your profile. </SubText>
        </Slide>
      </Swiper>
    );
  }
}
