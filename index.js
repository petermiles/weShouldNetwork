import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { createRootNavigator } from './router';

import { checkAuth } from './src/functions/auth';

import { Provider } from 'react-redux';
import store from './src/ducks/store';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      loading: true,
    };
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
  }

  componentDidMount() {
    AsyncStorage.getItem('USER_DATA').then(result => {
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
        <Layout props={checkAuth} uid={this.props.uid} />
      </Provider>
    );
  }
}

const mapStateToProps = ({ profileReducer }) => {
  return { uid: profileReducer.uid };
};

export default connect(mapStateToProps, {})(App);

AppRegistry.registerComponent('android', () => App);
