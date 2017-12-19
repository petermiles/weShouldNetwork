import React, { Component } from 'react';

import styled from 'styled-components/native';

import {
	View,
	Modal,
	Text,
	TextInput,
	Vibration,
	Dimensions
} from 'react-native';

import { chunk } from 'lodash';

import ConnectLink from './ConnectLink';

import {
	EditableInput,
	EditableName,
	ModalHeader,
	ConnectLinkPageContainer,
	ConnectLinkContainer
} from './styles';

export default class ConnectLinkPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editable: false,
			editableName: '',
			editableLink: '',
			containerHeight: ''
		};
		this.openModal = props.editable.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleEdit(val) {
		this.props.editable(val);
	}

	render() {
		return (
			<ConnectLinkPageContainer>
				{this.props.links.map((x, i) => {
					return (
						<ConnectLinkContainer key={i} index={i}>
							<ConnectLink
								editable={this.handleEdit}
								editInfo={this.props.editInfo}
								id={x.id}
								link={x.link}
								name={x.servicename}
							/>
						</ConnectLinkContainer>
					);
				})}
			</ConnectLinkPageContainer>
		);
	}
}
