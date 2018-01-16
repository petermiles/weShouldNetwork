import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import QRCode from 'react-native-qrcode';
import ProfileHead from './profileHead/ProfileHead';
import Settings from '../settings/Settings';

import { connect } from 'react-redux';
import { getUserInfo, pullUserFromLocal } from 'src/ducks/user/actions';

import {
  CenteredView,
  QRCodeLoading,
  Footer,
  FooterText,
  ProfileContainer,
} from './styles';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
      settingsVisible: false,
    };
  }

  componentDidMount() {
    let userData = AsyncStorage.getItem('USER_DATA');
    this.props.navigation.state.params
      ? this.props.getUserInfo(this.props.navigation.state.params.uid, '')
      : userData ? this.props.pullUserFromLocal() : null;
  }

  // AsyncStorage.getItem('USER_DATA').then(result => {
  //         this.props.getUserInfo(JSON.parse(result).uid,);
  //       });

  render() {
    const { settingsVisible } = this.state;
    const {
      profileUid,
      loading,
      company,
      position,
      name,
      profilePicURL,
      uid,
      ownProfile,
    } = this.props;
    return (
      <ProfileContainer>
        <Settings
          visible={settingsVisible}
          name={name}
          uid={profileUid}
          position={position}
          company={company}
          ownProfile={this.state.ownProfile}
          profilePic={profilePicURL}
          handleModal={() => {
            this.setState({ settingsVisible: false });
          }}
        />
        <ProfileHead
          profilePicURL={profilePicURL}
          company={company}
          name={name}
          position={position}
          loading={loading}
          ownProfile={profileUid === uid}
          handleModal={() => {
            this.setState({ settingsVisible: true });
          }}
          saveItem={() => {
            this.setState({ saved: true });
          }}
        />
        <CenteredView>
          {!loading ? (
            <QRCode
              value={
                this.props.navigation.state.params
                  ? this.props.navigation.state.params.uid
                  : profileUid
              }
              size={200}
              bgColor="black"
              fgColor="white"
            />
          ) : (
            <QRCodeLoading />
          )}
        </CenteredView>

        {!loading && !settingsVisible ? (
          <Footer
            activeOpacity={0.8}
            onPress={() => {
              ownProfile
                ? this.props.navigation.navigate('Scan')
                : this.props.navigation.navigate('SignedIn');
            }}
            ownProfile={ownProfile}>
            <FooterText>
              {ownProfile ? 'Scan' : 'Go Back To My Profile'}{' '}
            </FooterText>
          </Footer>
        ) : null}
      </ProfileContainer>
    );
  }
}

const mapStateToProps = ({ profileReducer }) => {
  return profileReducer;
};

export default connect(mapStateToProps, { getUserInfo, pullUserFromLocal })(
  Profile
);
