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
import { Vibration, AsyncStorage } from 'react-native';
import axios from 'axios';

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
			loading: true,
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
				},
				{
					name: 'Twitter',
					link: 'https://www.twitter.com/petermilesdev'
				},
				{
					name: 'Dribble',
					link: 'https://www.google.com'
				},
				{
					name: 'Add',
					link: 'none'
				}
			],
			editableName: '',
			editableLink: '',
			editableColor: ''
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
			editableColor: val.color
		});
	}

	editInfo(state) {
		let editLink = this.state.links;
		this.setState({ editable: false, editLink: state.link });
		console.log(state);
	}

	componentDidMount() {
		AsyncStorage.getItem('USER_KEY')
			.then(result => {
				axios
					.get(`http://172.31.99.35:3001/api/user/getConnectLinks/${result}`)
					.then(result => {
						console.log(result);
					});
			})
			.catch(console.log);
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
						editInfo={this.editInfo}
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
