import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import { Vibration, AsyncStorage, StyleSheet, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ConnectLinkPage from './connectLink/ConnectLinkPage';

import AddLinkModal from './editLinks/AddLink/AddLinkModal';

import { Fab } from './fab/Fab';

import EditModal from './connectLink/EditModal';

const providers = ['LinkedIn', 'Twitter', 'Medium', 'Phone', 'Email'];

export default class Connect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false,
      loading: false,
      links: [],
      providers: ['LinkedIn', 'Twitter', 'Medium', 'Phone', 'Email'],
      editableName: '',
      editableLink: '',
      editableColor: '',
      ownProfile: true,
      addLink: false,
      addLinkShow: false,
      active: true,
      handleDelete: false,
    };

    this.openEditModal = this.openEditModal.bind(this);
    this.editInfo = this.editInfo.bind(this);
  }

  openEditModal(val) {
    Vibration.vibrate(15);
    this.setState({
      editableName: val.name,
      editableLink: val.link,
      editableId: val.id,
      active: false,
    });
  }

  editInfo(state) {
    const editInfo = {
      link: state.editLink,
      id: state.editId,
    };
    axios.put('http://172.31.99.35:3001/api/user/connectLink/update', editInfo).then(() => {
      console.log('saved');
      this.setState({ editable: !this.state.editable });
    });
  }

  handleDelete(state) {
    axios.delete(`http://172.31.99.35:3001/api/user/connectLink/delete/${state.id}`).then((result) => {
      console.log(result);
      AsyncStorage.setItem('USER_LINKS', JSON.stringify(result.data), () => {
        this.setState({ links: result.data });
      });
    });
  }

  getUserData() {
    AsyncStorage.getItem('USER_LINKS').then((res) => {
      this.setState({ links: JSON.parse(res) });
    });
  }

  componentDidMount() {
    this.props.navigation.state.params
      ? axios.get(`http://172.31.99.35:3001/api/user/getConnectLinks/${this.props.navigation.state.params.uid}`).then((result) => {
        this.setState({
          links: result.data,
          loading: false,
          ownProfile: false,
        });
      })
      : AsyncStorage.getItem('USER_LINKS')
        ? AsyncStorage.getItem('USER_LINKS').then((res) => {
          this.setState({
            links: JSON.parse(res),
            providers: this.state.providers.filter((x, i) => !JSON.parse(res).find(curr => x.toLowerCase() === curr.servicename.toLowerCase())),
          });
        })
        : AsyncStorage.getItem('USER_DATA')
          .then((result) => {
            axios
              .get(`http://172.31.99.35:3001/api/user/getConnectLinks/${JSON.parse(result).uid}`)
              .then((result) => {
                this.setState({ links: result.data, loading: false });
              })
              .catch(console.log);
          })
          .catch(console.log);
  }

  render() {
    return (
      <Container>
        <Content>
          <ConnectLinkPage
            handleDelete={state => this.handleDelete(state)}
            delete={this.state.handleDelete}
            links={this.state.links}
            editable={this.state.editable}
            editInfo={this.editInfo}
            handleEdit={this.openEditModal}
            ownProfile={this.state.ownProfile}
            addLink={() => this.setState({ addLink: !this.state.addLink })}
          />
          {this.state.editableLink ? (
            <EditModal
              editInfo={this.editInfo}
              visible={this.state.editable}
              closeModal={() => {
                this.setState({ editable: false });
              }}
              handleModal={this.openEditModal}
              name={this.state.editableName}
              link={this.state.editableLink}
              id={this.state.editableId}
              color={this.state.editableColor}
            />
          ) : null}
        </Content>
        {this.state.ownProfile && (
          <Fab
            linksLength={this.state.links.length}
            openItems={() => this.setState({ editable: !this.state.editable })}
            editLinks={() => this.setState({ editable: true })}
            addLink={() => this.setState({ addLink: !this.state.addLink })}
            editable={this.state.editable}
          />
        )}
        <KeyboardAvoidingView behavior="padding">
          <AddLinkModal
            closeModal={() => {
              this.setState({ addLink: false }, () => {
                AsyncStorage.getItem('USER_LINKS').then((res) => {
                  this.setState({ links: JSON.parse(res), editable: false });
                });
              });
            }}
            updateLink={() => {
              this.getUserData();
            }}
            providers={this.state.providers}
            addLinkShow={this.state.addLinkShow}
            visible={this.state.addLink}
            links={this.state.links}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
