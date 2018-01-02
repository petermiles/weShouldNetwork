import React, { Component } from "react";
import { Container, Content } from "native-base";

import { Vibration, AsyncStorage, StyleSheet, KeyboardAvoidingView } from "react-native";
import axios from "axios";

import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/MaterialIcons";

import ConnectLinkPage from "./connectLink/ConnectLinkPage";

import AddLinkModal from "./editLinks/AddLink/AddLinkModal";

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
      // editable: !this.state.editable,
      editableName: val.name,
      editableLink: val.link,
      editableColor: val.color,
      editableId: val.id,
      active: false,
    });
  }

  editInfo(state) {
    console.log(state);
    const editInfo = {
      link: state.editLink,
      id: state.editId,
    };
    axios.put("http://172.31.99.35:3001/api/user/connectLink/update", editInfo).then(() => {
      this.setState({ editable: false });
    });
  }

  handleDelete(state) {
    console.log(state);
    axios.delete("http://172.31.99.35:3001/api/user/connectLink/delete/" + state.id).then(result => {
      AsyncStorage.setItem("USER_LINKS", JSON.stringify(result.data), () => {
        this.setState({ links: result.data });
      });
    });
  }

  getUserData() {
    console.log("test");
    AsyncStorage.getItem("USER_LINKS").then(res => {
      this.setState({ links: JSON.parse(res) });
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
        {this.state.ownProfile && (
          <ActionButton
            spacing={15}
            buttonColor="#F44336"
            icon={
              <Icon name={this.state.editable ? "close" : "more-horiz"} style={{ color: "white", fontSize: 30, height: 30 }} />
            }
            activeOpacity={1}
            hideShadow={false}
            degrees={90}
            offsetX={20}
            offsetY={20}
            fixNativeFeedbackRadius={true}
            onPress={() => {
              this.setState({ editable: this.state.editable && false });
            }}>
            <ActionButton.Item
              buttonColor="#42A5F5"
              title="Edit Links"
              onPress={() => {
                console.log("test");
                this.setState({ editable: true });
              }}>
              <Icon name="create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor="#66BB6A"
              title="Add A Link"
              onPress={() => this.setState({ addLink: true, active: false })}>
              <Icon name="add" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        )}
        <KeyboardAvoidingView behavior={"padding"}>
          <AddLinkModal
            closeModal={() => {
              this.setState({ addLink: false }, () => {
                AsyncStorage.getItem("USER_LINKS").then(res => {
                  this.setState({ links: JSON.parse(res) });
                });
              });
            }}
            updateLink={() => {
              this.getUserData;
            }}
            addLinkShow={this.state.addLinkShow}
            visible={this.state.addLink}
            links={this.state.links}
          />
        </KeyboardAvoidingView>
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
