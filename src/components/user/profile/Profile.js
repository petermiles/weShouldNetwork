import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import QRCode from "react-native-qrcode";
import ProfileHead from "./profileHead/ProfileHead";
import Settings from "../settings/Settings";

import { connect } from "react-redux";
import { getUserInfo } from "src/ducks/user/actions";

import { CenteredView, QRCodeLoading, Footer, FooterText, ProfileContainer } from "./styles";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      saved: false,
      settingsVisible: false,
    };
  }

  componentDidMount() {
    this.props.navigation.state.params
      ? this.props.getUserInfo(this.props.navigation.state.params.uid, "")
      : AsyncStorage.getItem("USER_DATA").then(result => {
          this.props.getUserInfo(JSON.parse(result).uid);
        });
  }

  componentWillReceiveProps(newProps) {
    this.setState({ ...newProps.profileReducer });
  }

  render() {
    const { loading, name, position, company, profilePicURL, profileUid, ownProfile, navigation } = this.props;
    const { settingsVisible } = this.state;
    return (
      <ProfileContainer>
        <Settings
          visible={settingsVisible}
          name={name}
          uid={profileUid}
          position={position}
          company={company}
          ownProfile={ownProfile}
          profilePic={profilePicURL}
          handleModal={() => {
            this.setState({ settingsVisible: false });
          }}
        />

        <ProfileHead
          {...this.state}
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
              value={navigation.state.params ? navigation.state.params.uid : profileUid}
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
              ownProfile ? navigation.navigate("Scan") : navigation.navigate("SignedIn");
            }}
            ownProfile={this.props.ownProfile}>
            <FooterText>{ownProfile ? "Scan" : "Go Back To My Profile"} </FooterText>
          </Footer>
        ) : null}
      </ProfileContainer>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getUserInfo })(Profile);
