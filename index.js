import React from "react";

import { AppRegistry, AsyncStorage } from "react-native";
import { createRootNavigator } from "./router";

import { checkAuth } from "./src/functions/auth";

import { Provider } from "react-redux";
import store from "./src/ducks/store";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      loading: true,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("USER_DATA").then(result => {
      this.setState({ signedIn: result, checkedSignIn: true });
    });
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    if (!checkedSignIn) {
      return null;
    }
    const Layout = createRootNavigator(signedIn);
    return (
      <Provider store={store}>
        <Layout props={checkAuth} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("android", () => App);
