import React, { Component } from "react";
import { Container, Content } from "native-base";

import { AsyncStorage } from "react-native";
import QRCode from "react-native-qrcode";
import ProfileHead from "./profileHead/ProfileHead";
import axios from "axios";

import { Settings } from "../settings/Settings";

import { CenteredView, QRCodeLoading, Footer, FooterText } from "./styles";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      ownProfile: true,
      saved: false,
      settingsVisible: false,
      profileUid: "",
      name: "",
      position: "",
      profilePicURL: "",
      company: "",
      userUid: "",
    };
  }

  componentDidMount() {
    const format = data => ({
      name: data.name,
      position: data.position,
      company: data.company,
      profilePicURL: data.profilepic,
      loading: false,
      profileUid: data.uid,
    });
    this.props.navigation.state.params
      ? axios.get(`http://172.31.99.35:3001/api/user/getInfo/${this.props.navigation.state.params.uid}`).then(({ data }) => {
          AsyncStorage.getItem("USER_DATA").then(res => {
            this.setState({
              ...format(data),
              userUid: JSON.parse(res).uid,
              ownProfile: false,
            });
          });
        })
      : AsyncStorage.getItem("USER_DATA").then(res => {
          const data = JSON.parse(res);
          this.setState({ ...format(data), userUid: data.uid });
        });
  }
  render() {
    const { navigate } = this.props.navigation;
    const { loading, ownProfile, profilePicURL, settingsVisible, name, uid } = this.state;
    return (
      <Container>
        <Settings
          visible={settingsVisible}
          name={name}
          uid={uid}
          ownProfile={ownProfile}
          profilepic={profilePicURL}
          handleModal={() => {
            this.setState({ settingsVisible: false });
          }}
        />
        <Content>
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
                value={this.props.navigation.state.params ? this.props.navigation.state.params.uid : uid}
                size={200}
                bgColor="black"
                fgColor="white"
              />
            ) : (
              <QRCodeLoading />
            )}
          </CenteredView>
        </Content>

        {!loading && !settingsVisible ? (
          <Footer
            activeOpacity={0.8}
            onPress={() => {
              ownProfile ? navigate("Scan") : navigate("SignedIn");
            }}>
            <FooterText>{ownProfile ? "Scan" : "Go Back To My Profile"} </FooterText>
          </Footer>
        ) : null}
      </Container>
    );
  }
}
