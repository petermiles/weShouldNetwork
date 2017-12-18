import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Vibration
} from 'react-native';

import axios from 'axios';
import { NavigationActions } from 'react-navigation';
import { once } from 'lodash';
import Camera from 'react-native-camera';

export default class Scan extends Component {
  constructor(props) {
    super(props);
    console.log(props, ' here it is');
    this.state = {
      hideCamera: false
    };
  }

  shouldComponentUpdate(prev, next) {
    return next.hideCamera;
  }

  render() {
    if (this.state.hideCamera) {
      return null;
    } else {
      return (
        <View style={styles.container}>
          <Camera
            onBarCodeRead={_.once(this.onBarCodeRead.bind(this))}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
          />
        </View>
      );
    }
  }

  componentWillUnmount() {
    this.setState({ hideCamera: !this.hideCamera });
  }

  onBarCodeRead(e) {
    const navigateAction = NavigationActions.navigate({
      routeName: 'ScannedProfile',
      params: { uid: e.data }
    });
    this.setState({ hideCamera: true });
    this.props.navigation.dispatch(navigateAction);

    Vibration.vibrate(200);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
