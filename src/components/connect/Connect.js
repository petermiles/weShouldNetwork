import React, { Component } from "react";
import { Container, Content } from "native-base";

import { Vibration, AsyncStorage } from "react-native";
import axios from "axios";

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
      </Container>
    );
  }
}
