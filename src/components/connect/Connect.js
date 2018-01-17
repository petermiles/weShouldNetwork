import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { Vibration, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import ConnectLinkPage from './connectLink/ConnectLinkPage';
import AddLinkModal from './editLinks/AddLink/AddLinkModal';
import { Fab } from './fab/Fab';
import EditModal from './connectLink/EditModal';
import { connect } from 'react-redux';

import { getLinksFromNav, getLinksFromLocal } from 'src/ducks/links/actions';

class Connect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false,
      loading: false,
      links: [],
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
    axios
      .put('http://172.31.99.35:3001/api/user/connectLink/update', editInfo)
      .then(() => {
        this.setState({ editable: !this.state.editable });
      });
  }

  handleDelete(state) {
    axios
      .delete(
        `http://172.31.99.35:3001/api/user/connectLink/delete/${state.id}`
      )
      .then(result => {
        AsyncStorage.setItem('USER_LINKS', JSON.stringify(result.data), () => {
          this.setState({ links: result.data });
        });
      });
  }

  getUserData() {
    AsyncStorage.getItem('USER_LINKS').then(res => {
      this.setState({ links: JSON.parse(res) });
    });
  }

  componentDidMount() {
    this.props.navigation.state.params
      ? this.props.getLinksFromNav(this.props.navigation.state.params.uid)
      : this.props.getLinksFromLocal();
  }

  render() {
    const {
      editable,
      ownProfile,
      handleDelete,
      addLink,
      editableName,
      editableLink,
      editableId,
      editableColor,
      addLinkShow,
    } = this.state;
    const { providers, links, saved } = this.props;

    return (
      <Container>
        <Content>
          <ConnectLinkPage
            handleDelete={state => this.handleDelete(state)}
            delete={handleDelete}
            links={links}
            editable={editable}
            editInfo={this.editInfo}
            handleEdit={this.openEditModal}
            ownProfile={ownProfile}
            addLink={() => this.setState({ addLink: !addLink })}
          />
          {this.state.editableLink ? (
            <EditModal
              editInfo={this.editInfo}
              visible={this.state.editable}
              closeModal={() => {
                this.setState({ editable: false });
              }}
              handleModal={this.openEditModal}
              name={editableName}
              link={editableLink}
              id={editableId}
              color={editableColor}
            />
          ) : null}
        </Content>
        {!this.props.navigation.state.params && (
          <Fab
            openItems={() => this.setState({ editable: !editable })}
            editLinks={() => this.setState({ editable: true })}
            addLink={() => this.setState({ addLink: !addLink })}
            linksLength={links.length}
            ownProfile={ownProfile}
            editable={this.state.editable}
          />
        )}
        <AddLinkModal
          closeModal={() => {
            this.setState({ addLink: false }, () => {
              AsyncStorage.getItem('USER_LINKS').then(res => {
                this.setState({ links: JSON.parse(res), editable: false });
              });
            });
          }}
          updateLink={() => {
            this.getUserData();
          }}
          providers={providers}
          addLinkShow={addLinkShow}
          visible={addLink}
          saved={saved}
          links={this.props.links}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ linkReducer }) => {
  return linkReducer;
};

export default connect(mapStateToProps, { getLinksFromNav, getLinksFromLocal })(
  Connect
);
