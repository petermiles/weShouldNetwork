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
			links: [],
			editableName: '',
			editableLink: '',
			editableColor: '',
			loading: true,
			ownProfile: true
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
			editableId: val.id
		});
	}

	editInfo(state) {
		let editInfo = {
			link: state.editLink,
			id: state.editId
		};
		axios
			.put('http://172.31.99.35:3001/api/user/connectLink/update', editInfo)
			.then(result => {
				console.log(result);
				this.setState({ editable: false });
			});

		// console.log(state, 'test');
	}

	componentDidMount() {
		this.props.navigation.state.params
			? axios
					.get(
						`http://172.31.99.35:3001/api/user/getConnectLinks/${
							this.props.navigation.state.params.uid
						}`
					)
					.then(result => {
						this.setState({
							links: result.data,
							loading: false,
							ownProfile: false
						});
					})
			: AsyncStorage.getItem('USER_KEY')
					.then(result => {
						axios
							.get(
								`http://172.31.99.35:3001/api/user/getConnectLinks/${result}`
							)
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
		} else {
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
}
