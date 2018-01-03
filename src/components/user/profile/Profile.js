import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import { AsyncStorage } from 'react-native';
import QRCode from 'react-native-qrcode';
import ProfileHead from './profileHead/ProfileHead';
import axios from 'axios';

import { CenteredView, QRCodeLoading, Footer, FooterText } from './styles';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      profileUid: '',
      name: '',
      position: '',
      profilePicURL: '',
      company: '',
      userUid: '',
      ownProfile: true,
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
        this.setState({
          ...format(data),
          ownProfile: false,
        });
      })
      : AsyncStorage.getItem('USER_DATA')
        ? AsyncStorage.getItem('USER_DATA').then((res) => {
          const data = JSON.parse(res);
          this.setState(format(data));
        })
        : AsyncStorage.getItem('USER_KEY').then((id) => {
          axios.get(`http://172.31.99.35:3001/api/user/getInfo/${id}`).then((result) => {
            this.setState(format(result.data));
          });
        });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <ProfileHead
            name={this.state.name}
            company={this.state.company}
            position={this.state.position}
            picURL={this.state.profilePicURL}
            loading={this.state.loading}
            navigate={navigate}
            ownProfile={this.state.ownProfile}
          />
          <CenteredView>
            {!this.state.loading ? (
              <QRCode
                value={this.props.navigation.state.params ? this.props.navigation.state.params.uid : this.state.uid}
                size={200}
                bgColor="black"
                fgColor="white"
              />
            ) : (
              <QRCodeLoading />
            )}
          </CenteredView>
        </Content>
        {!this.state.loading ? (
          <Footer
            activeOpacity={0.8}
            onPress={() => {
              this.state.ownProfile ? navigate('Scan') : navigate('SignedIn');
            }}>
            <FooterText>{this.state.ownProfile ? 'Scan' : 'Go Back To My Profile'} </FooterText>
          </Footer>
        ) : null}
      </Container>
    );
  }
}
