import React, { Component } from 'react';
import {
	Container,
	Content,
	Footer,
	FooterTab,
	Button,
	Text
} from 'native-base';
import styled from 'styled-components/native';
import { Vibration } from 'react-native';

import ConnectLinkPage from './connectLink/ConnectLinkPage';
import ConnectLink from './connectLink/ConnectLink';
import EditModal, { FooterEditButton } from './connectLink/EditModal';

const EditButton = styled.Text`
	font-size: 25;
	color: white;
	font-weight: 300;
`;

// change to functional component
export default class Connect extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editable: false,
			links: [
				{
					name: 'Phone',
					link: '316-213-8374'
				},
				{
					name: 'Email',
					link: 'hello@petermiles.io'
				},
				{
					name: 'Website',
					link: 'petermiles.io'
				},
				{
					name: 'LinkedIn',
					link: 'https://www.linkedin.com/in/peter-miles'
				}
			],
			editableName: '',
			editableLink: '',
			editableColor: ''
		};

		this.openEditModal = this.openEditModal.bind(this);
	}

	openEditModal(val) {
		Vibration.vibrate(15);
		this.setState({
			editable: !this.state.editable,
			editableName: val.name,
			editableLink: val.link,
			editableColor: val.color
		});
	}

	render() {
		return (
			<Container>
				<Content>
					<ConnectLinkPage
						links={this.state.links}
						editable={this.openEditModal}
					/>
					<EditModal
						visible={this.state.editable}
						handleModal={this.openEditModal}
						name={this.state.editableName}
						link={this.state.editableLink}
						color={this.state.editableColor}
					/>
				</Content>
			</Container>
		);
	}
}
