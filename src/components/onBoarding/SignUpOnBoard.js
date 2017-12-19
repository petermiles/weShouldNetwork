import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

import styled from 'styled-components/native';

import { TextField } from 'react-native-material-textfield';

import LinkedInModal from 'react-native-linkedin';

import { Secret, ClientID, Redirect } from './config.js';

import { createLinkedInAccount } from './../../functions/auth';

const Slide = styled.View`
  width: ${Dimensions.get('window').width}
  height: ${props =>
    props.size
      ? Dimensions.get('window').height * props.size
      : Dimensions.get('window').height * 0.9}
  justify-content: center
  flex: 1
  padding: 10%;
  background-color: ${props => props.color || '#92BBD9'};
`;

const MainText = styled.Text`
  color: white;
  font-size: 24;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10%;
  padding-top: ${props => props.paddingTop || 0};
`;

const SubText = styled.Text`
  color: white;
  font-size: 20;
  font-weight: bold;
  text-align: center;
  padding-top: 10%
  padding-bottom: 3%
  padding-left: 10%;
  padding-right: 10%;
`;

const SocialMediaSelect = styled.TouchableOpacity`
  width: 40%;
  height: auto;
  backgroundColor: ${props => props.color}
  margin: 2%;
  padding: 2%;
  border-radius: 3;
  elevation: 4;
`;

const SocialMediaText = styled.Text`
  color: white;
  font-size: 18;
  text-align: center;
`;

export default class SignUpOnBoard extends Component {
  constructor(props) {
    super(props);

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
    console.log(this.props);
    const colors = {
      LinkedIn: '#008CC9',
      Dribbble: '#ea4c89',
      Facebook: '#3b5998',
      Twitter: '#1da1f2',
      Medium: 'black',
      Phone: '#ff9800',
      Email: '#f44336',
      Website: '#4caf50'
    };
    return (
      <ScrollView horizontal={true} showsButtons={true} pagingEnabled={true}>
        <Slide color={'#81D4FA'} size={1}>
          <MainText>
            {' '}
            You are only a few steps away from being able to easily share your
            network information.{' '}
          </MainText>
        </Slide>
        <ScrollView horizontal={false} pagingEnabled={true}>
          <Slide color={'#80DEEA'} size={0.9}>
            <MainText>We recommend signing in with LinkedIn.</MainText>

            <LinkedInModal
              animation={'slide'}
              clientID={ClientID}
              clientSecret={Secret}
              redirectUri={Redirect}
              permissions={['r_basicprofile']}
              renderButton={() => {
                return (
                  <View style={{ elevation: 2 }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        padding: ' 5%',
                        width: '100%',
                        fontSize: 20,
                        fontWeight: 'bold',
                        backgroundColor: '#42A5F5',
                        borderRadius: 3
                      }}>
                      {' '}
                      Sign Up With LinkedIn{' '}
                    </Text>
                  </View>
                );
              }}
              onSuccess={token => {
                createLinkedInAccount(token, this.props.navigation.navigate);
              }}
              onError={err => {
                return err;
              }}
            />
          </Slide>
        </ScrollView>
        <Slide color={'#80DEEA'} size={1}>
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
            <SubText>Awesome, {this.state.name}, let's keep going.</SubText>
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
            <SubText>
              We won't sell your information to anyone, we promise!
            </SubText>
          </Slide>
        ) : null}
        {this.state.email && this.state.name ? (
          <Slide color={'#29B6F6'} size={!this.state.location ? 0.4 : 0.6}>
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
    );
  }
}
