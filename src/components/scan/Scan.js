"use strict";
import React, { Component } from "react";
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Vibration
} from "react-native";

import axios from "axios";

import { once } from "lodash";
import Camera from "react-native-camera";

export default class Scan extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          onBarCodeRead={_.once(this.onBarCodeRead.bind(this))}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        />
      </View>
    );
  }

  onBarCodeRead(e) {
    Vibration.vibrate(200);

    axios.post("http://172.31.99.35:3001/api/user/create", {
      name: "name here"
    });
    this.props.navigation.navigate("SignedIn");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    color: "#000",
    padding: 10,
    margin: 40
  }
});
