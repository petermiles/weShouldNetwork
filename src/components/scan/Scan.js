import React, { Component } from 'react';
import { StyleSheet, View, Vibration, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationActions } from 'react-navigation';
import { once } from 'lodash';
import Camera from 'react-native-camera';

import { scanProfile } from '../../ducks/user/actions';

class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCamera: false,
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(val) {
    const navigateAction = NavigationActions.navigate({
      routeName: !val ? 'ScannedProfile' : 'SignedIn',
      params: { uid: val.data },
    });
    this.props.navigation.dispatch(navigateAction);
    Vibration.vibrate(200);
  }

  render() {
    if (this.state.hideCamera) {
      return null;
    }
    return (
      <View style={styles.container}>
        <Camera
          onBarCodeRead={_.once(event => {
            this.setState({ hideCamera: true }, () => {
              this.navigate(event);
            });
          })}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
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
      </View>
    );
  }
}

const mapStateToProps = ({ profileReducer }) => {
  return profileReducer;
};

export default connect(mapStateToProps, { scanProfile })(Scan);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
