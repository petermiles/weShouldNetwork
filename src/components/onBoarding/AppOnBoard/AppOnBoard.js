import React, { Component } from 'react';

import Swiper from 'react-native-swiper';

import { connect } from 'react-redux';

import LinkedInModal from 'react-native-linkedin';
import { Secret, ClientID, Redirect } from './config.js';

import { createAccount } from '../../../ducks/user/actions';

import {
  Slide,
  Centered,
  MainText,
  SubText,
  LinkedInButtonText,
} from './styles';

class AppOnBoard extends Component {
  render() {
    return (
      <Swiper dotColor={'white'} activeDotColor={'#B3E5FC'} loop={false}>
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
            Get taken directly to their profile with all of their information{' '}
          </SubText>
        </Slide>
        <Slide color={'#42A5F5'}>
          <MainText>Save Their Information</MainText>
          <SubText>
            All of your saved networking contacts are easily accessible within
            the app{' '}
          </SubText>
        </Slide>
        <Slide color={'#2196F3'}>
          <Centered>
            <MainText>Start Networking</MainText>

            <LinkedInModal
              animation={'slide'}
              clientID={ClientID}
              clientSecret={Secret}
              redirectUri={Redirect}
              permissions={['r_basicprofile']}
              renderButton={() => {
                return (
                  <LinkedInButtonText>Sign Up With LinkedIn</LinkedInButtonText>
                );
              }}
              onSuccess={token => {
                this.props.createAccount(token, this.props.navigation.navigate);
              }}
              onError={err => {
                return err;
              }}
            />
          </Centered>
        </Slide>
      </Swiper>
    );
  }
}

const mapStateToProps = ({ profileReducer }) => {
  return profileReducer;
};

export default connect(mapStateToProps, { createAccount })(AppOnBoard);
