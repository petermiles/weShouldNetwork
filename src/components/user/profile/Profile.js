import React, { Component } from 'react';
import QRCode from 'react-native-qrcode';
import ProfileHead from './profileHead/ProfileHead';
import Settings from '../settings/Settings';

import { connect } from 'react-redux';
import {
  getUserInfo,
  pullUserFromLocal,
  pullUserFromDb,
} from 'src/ducks/user/actions';

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
    if (!this.props.navigation.state.params) {
      this.props.pullUserFromLocal();
    }
  }

  render() {
    const { settingsVisible } = this.state;
    const {
      profileUid,
      loading,
      company,
      position,
      name,
      profilePicURL,
      ownProfile,
    } = this.props.profileReducer;

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
          loading={loading}
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
              fgColor={loading ? '#eceff1' : '#eceff1'}
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

const mapStateToProps = ({ profileReducer, favoritesReducer }) => {
  return { profileReducer, favoritesReducer };
};

export default connect(mapStateToProps, {
  getUserInfo,
  pullUserFromLocal,
  pullUserFromDb,
})(Profile);
