import React, { Component } from 'react';
import styled from 'styled-components/native';
import { View, Modal, BackHandler } from 'react-native';

import { TextField } from 'react-native-material-textfield';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
	ModalContainer,
	ModalContent,
	ModalHeader,
	ModalHeaderText,
	ModalFooter,
	FooterButton,
	FooterButtonText,
	EditModalClose,
	brandColors,
} from './styles';

export default class EditModal extends Component {
	constructor(props) {
		console.log(props);
		super(props);

		this.state = {
			editLink: props.link,
			editName: props.name,
			editId: props.id,
			delete: false,
			primary: '',
			typing: false,
			sizeChange: false,
			visible: props.visible,
			baseLinks: {
				twitter: 'www.twitter.com/',
				linkedin: 'www.linkedin.com/in/',
				dribbble: 'www.dribbble.com/',
				medium: 'www.medium.com/',
				email: '',
				phone: '',
			},
		};

		let baselink = this.state.baseLinks[props.name.toLowerCase()];

		this.label =
			props.name !== 'email' || props.name !== 'email'
				? props.link.toLowerCase().includes(baselink)
					? props.link.substring(
							props.name === 'email' || props.name === 'phone' ? 0 : 8,
							baselink.split('').length + (props.name === 'linkedin' ? 8 : 0)
						)
					: baselink
				: baselink + props.link;

		this.sizeChange = this.sizeChange.bind(this);
	}

	componentWillMount() {
		BackHandler.addEventListener('hardwareBackPress', () => {
			return true;
		});
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress');
	}

	sizeChange() {
		this.setState({ sizeChange: !this.state.sizeChange });
	}

	render() {
		console.log(
			this.props.name,
			this.state.baseLinks,
			this.state.baseLinks[this.props.name.toLowerCase()]
		);

		return (
			<Modal
				visible={this.props.visible}
				animationType={'fade'}
				transparent={true}
				onRequestClose={this.props.handleModal}
				hardwareAccelerated={true}>
				<ModalContainer>
					<ModalContent
						color={brandColors[this.props.name.toLowerCase()]}
						size={this.state.sizeChange}>
						<EditModalClose
							onPress={() => {
								this.setState({ editLink: '', editName: '' }, () => {
									this.props.closeModal();
								});
							}}>
							<Icon
								name={'close'}
								style={{ color: 'white', fontSize: 25, height: 25 }}
							/>
						</EditModalClose>
						<View
							style={{
								alignItems: 'center',
							}}>
							<Icon
								name={this.props.name.toLowerCase()}
								style={{
									color: 'white',
									fontSize: 45,
									height: 45,
									marginBottom: 0,
								}}
							/>
							<TextField
								label={this.label}
								baseColor="white"
								tintColor="white"
								textColor="white"
								containerStyle={{ width: '70%' }}
								value={this.props.editLink}
								onFocus={() => {
									this.setState({ sizeChange: true });
								}}
								onBlur={() => {
									this.setState({ sizeChange: false });
								}}
								onEndEditing={() => {
									this.setState({ sizeChange: false });
								}}
								onChangeText={editLink => this.setState({ editLink })}
								spellCheck={false}
								autoCapitalize={'none'}
								returnKeyType={'done'}
							/>
						</View>

						<ModalFooter>
							<FooterButton
								save
								activeOpacity={0.7}
								onPress={() => {
									console.log('test');
									this.setState({ editLink: '', editName: '' }, () => {
										this.props.editInfo(this.state);
									});
								}}>
								<FooterButtonText> Save </FooterButtonText>
							</FooterButton>
						</ModalFooter>
					</ModalContent>
				</ModalContainer>
			</Modal>
		);
	}
}
