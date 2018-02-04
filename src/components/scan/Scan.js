import React, { Component } from 'react';
import { Vibration, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationActions } from 'react-navigation';
import { once } from 'lodash';
import Camera from 'react-native-camera';
import {
  ErrorContainer,
  ErrorText,
  CameraContainer,
  cameraPreview,
} from './styles';

import { getUserInfo, pullUserFromLocal } from '../../ducks/user/actions';

class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCamera: false,
      error: false,
      loading: false,
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(val) {
    const navigateAction = NavigationActions.navigate({
      routeName: val ? 'ScannedProfile' : 'SignedIn',
      params: { uid: val },
    });
    this.setState({ loading: true }, () => {
      this.props.getUserInfo(val, false).then(result => {
        if (result.value) {
          Vibration.vibrate(200);
          this.props.navigation.dispatch(navigateAction);
        } else {
          this.props.pullUserFromLocal();
          this.setState({ error: true, hideCamera: false }, () => {
            Vibration.vibrate(500);
          });
        }
      });
    });
  }

  render() {
    if (this.state.hideCamera) {
      return null;
    }
    return (
      <CameraContainer>
        <Camera
          onBarCodeRead={_.once(event => {
            this.setState({ hideCamera: true }, () => {
              this.navigate(event.data);
            });
          })}
          style={cameraPreview}
          aspect={Camera.constants.Aspect.fill}>
          {this.state.error && (
            <ErrorContainer>
              <ErrorText>Please scan a valid QR code</ErrorText>
            </ErrorContainer>
          )}

          <TouchableOpacity
            style={{
              position: 'absolute',
              height: 30,
              top: 20,
              left: 15,
              elevation: 30,
            }}
            activeOpacity={0.8}
            onPress={() => {
              this.setState({ hideCamera: true }, () => {
                this.props.navigation.navigate('SignedIn');
                Vibration.vibrate(50);
              });
            }}>
            <Icon name="close" style={{ color: 'white', fontSize: 30 }} />
          </TouchableOpacity>
        </Camera>
      </CameraContainer>
    );
  }
}

const mapStateToProps = ({ profileReducer }) => {
  return profileReducer;
};

export default connect(mapStateToProps, { getUserInfo, pullUserFromLocal })(
  Scan
);
