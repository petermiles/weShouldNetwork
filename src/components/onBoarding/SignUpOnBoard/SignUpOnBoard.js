import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';

import { SignIn } from 'src/components';

import styled from 'styled-components/native';

import { TextField } from 'react-native-material-textfield';

import LinkedInModal from 'react-native-linkedin';

import { Secret, ClientID, Redirect } from './config.js';

import { createLinkedInAccount } from 'src/functions/auth';

import {
  Slide,
  MainText,
  SubText,
  SocialMediaSelect,
  SocialMediaText,
  Colors
} from './styles';

export default class SignUpOnBoard extends Component {
  constructor(props) {
    super(props);

    console.log(SignIn);

    this.state = {
      name: '',
      email: '',
      job: '',
      company: '',
      chosenProviders: [],
      providers: [
        'LinkedIn',
        'Twitter',
        'Facebook',
        'Medium',
        'Dribbble',
        'Website'
      ],
      chosenProviderInfo: [],
      linkedInModal: false
    };
  }

  render() {
    console.log(ClientID, Secret, Redirect);

    return (
      <ScrollView horizontal={true} showsButtons={true} pagingEnabled={true}>
        <Slide
          color={'#81D4FA'}
          size={1}
          width={Dimensions.get('window').width}
          height={Dimensions.get('window').height}>
          <MainText>
            {' '}
            You are only a few steps away from being able to easily share your
            network information.{' '}
          </MainText>
        </Slide>
        <ScrollView horizontal={false} pagingEnabled={true}>
          <Slide color={'#80DEEA'}>
            <MainText paddingBottom={'5%'}>
              We recommend signing in with LinkedIn.
            </MainText>

            <LinkedInModal
              animation={'slide'}
              clientID={ClientID}
              clientSecret={Secret}
              redirectUri={Redirect}
              permissions={['r_basicprofile']}
              renderButton={() => {
                return (
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      padding: ' 5%',
                      width: '100%',
                      fontSize: 20,
                      fontWeight: 'bold',
                      backgroundColor: '#0077B5',
                      borderRadius: 3
                    }}>
                    {' '}
                    Sign Up With LinkedIn{' '}
                  </Text>
                );
              }}
              onSuccess={token => {
                createLinkedInAccount(token, this.props.navigation.navigate);
              }}
              onError={err => {
                return err;
              }}
            />

            <View
              style={{ position: 'absolute', bottom: '7%', right: 0, left: 0 }}>
              <SubText>
                {' '}
                If you'd like to sign up with your email, scroll down.{' '}
              </SubText>
            </View>
          </Slide>
          <ScrollView
            pagingEnabled={true}
            horizontal={true}
            ref={scrollview => (this.ScrollView = scrollview)}>
            <Slide color={'#26A69A'} size={1}>
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
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{ position: 'absolute', bottom: '5%', right: '7%' }}>
                  <SubText>Next</SubText>
                </TouchableOpacity>
              ) : null}
            </Slide>
            {this.state.name ? (
              <Slide color={'#80CBC4'} size={1}>
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
                <View
                  style={{
                    position: 'absolute',
                    bottom: '7%',
                    right: 0,
                    left: 0
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{ position: 'absolute', bottom: 0, left: '5%' }}>
                    <SubText>Back</SubText>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    position: 'absolute',
                    bottom: '7%',
                    right: 0,
                    left: 0
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                      console.log(this, 'hello');
                    }}
                    style={{ position: 'absolute', bottom: '5%', right: '7%' }}>
                    <SubText>Next</SubText>
                  </TouchableOpacity>
                </View>
              </Slide>
            ) : null}
            {this.state.email && this.state.name ? (
              <Slide color={'#29B6F6'} size={1}>
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
                    <SubText paddingTop={'5%'}>
                      {' '}
                      What do you do at {this.state.location}?{' '}
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
              </Slide>
            ) : null}
          </ScrollView>
        </ScrollView>
      </ScrollView>
    );
  }
}
