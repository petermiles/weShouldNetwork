import React, { Component } from "react";
import { Container, Content } from "native-base";

import { Vibration, AsyncStorage, View, StyleSheet } from "react-native";
import axios from "axios";

import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/MaterialIcons";

import ConnectLinkPage from "./connectLink/ConnectLinkPage";

import EditModal from "./connectLink/EditModal";

export default class Connect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false,
      loading: true,
      links: [],
      editableName: "",
      editableLink: "",
      editableColor: "",
      ownProfile: true,
    };

    this.openEditModal = this.openEditModal.bind(this);
    this.editInfo = this.editInfo.bind(this);
  }

  openEditModal(val) {
    Vibration.vibrate(15);
    this.setState({
      editable: !this.state.editable,
      editableName: val.name,
      editableLink: val.link,
      editableColor: val.color,
      editableId: val.id,
      active: false,
    });
  }

  editInfo(state) {
    const editInfo = {
      link: state.editLink,
      id: state.editId,
    };
    axios.put("http://172.31.99.35:3001/api/user/connectLink/update", editInfo).then(() => {
      this.setState({ editable: false });
    });
  }

  componentDidMount() {
    this.props.navigation.state.params
      ? axios.get(`http://172.31.99.35:3001/api/user/getConnectLinks/${this.props.navigation.state.params.uid}`).then(result => {
          this.setState({
            links: result.data,
            loading: false,
            ownProfile: false,
          });
        })
      : AsyncStorage.getItem("USER_LINKS")
        ? AsyncStorage.getItem("USER_LINKS").then(res => {
            this.setState({ links: JSON.parse(res) });
          })
        : AsyncStorage.getItem("USER_DATA")
            .then(result => {
              axios
                .get(`http://172.31.99.35:3001/api/user/getConnectLinks/${JSON.parse(result).uid}`)
                .then(result => {
                  this.setState({ links: result.data, loading: false });
                })
                .catch(console.log);
            })
            .catch(console.log);
  }

  render() {
    if (!this.state.links.length) {
      return null;
    }
    return (
      <Container>
        <Content>
          <ConnectLinkPage
            links={this.state.links}
            editInfo={this.editInfo}
            editable={this.openEditModal}
            ownProfile={this.state.ownProfile}
          />
          {this.state.editableLink ? (
            <EditModal
              editInfo={this.editInfo}
              visible={this.state.editable}
              handleModal={this.openEditModal}
              name={this.state.editableName}
              link={this.state.editableLink}
              id={this.state.editableId}
              color={this.state.editableColor}
            />
          ) : null}
        </Content>
        <ActionButton buttonColor="#F44336" activeOpacity={1} hideShadow={false} offsetX={20} offsetY={20}>
          <ActionButton.Item buttonColor="#66BB6A" title="Edit Links" onPress={() => console.log("notes tapped!")}>
            <Icon name="create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor="#42A5F5" title="Add A Link" onPress={() => console.log("notes tapped!")}>
            <Icon name="add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        <View />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});
