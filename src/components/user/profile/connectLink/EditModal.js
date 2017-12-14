import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Text, Button, Footer, FooterTab } from 'native-base';
import {
	TouchableWithoutFeedback,
	View,
	Animated,
	TouchableOpacity,
	Modal
} from 'react-native';

import { EditModalItem } from './EditModalItem';

const EditButton = styled.Text`
	font-size: 25;
	color: white;
	font-weight: 300;
`;

const ModalContainer = styled.View`
	flex: 1
	flex-direction: column;
	justify-content: center;
	align-items: center ;
	background-color: #00000080
	elevation: 4
`;

const ModalContent = styled.View`
	width: 90%;
	height: 85%;
	align-items: center
	justify-content: center
	background-color: white
`;

const ModalHeader = styled.View`
	position: absolute
	top: 0
	left: 0
	right: 0
	background-color: cornflowerblue;
	width: 100%;
`;

const ModalHeaderText = styled.Text`
	color: white;
	font-size: 24;
	padding-top: 8;
	padding-bottom: 8;
`;

const ModalFooter = styled.View`
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	padding-bottom: 15;
`;

const FooterButton = styled.TouchableOpacity`
	margin-left: 5;
	margin-right: 5;
	width: 35%;
	elevation: 2;
	background: ${props => (!props.save ? '#E53935' : '#43A047')};
	padding-top: 6;
	padding-bottom: 6;
	align-items: center;
`;

const FooterButtonText = styled.Text`
	color: white;
	font-size: 24;
`;

const LinkContainer = styled.View`
	flex-direction: row;
	width: 100%;
	margin-bottom: 3%;
`;

const LinkLogo = styled.View`
	height: 40;
	width: 40;
	background: ${props => props.color};
`;

let colors = {
	LinkedIn: '#008CC9',
	Dribble: '#ea4c89',
	Facebook: '#3b5998',
	Twitter: '#1da1f2',
	Medium: 'black',
	Phone: '#ff9800',
	Email: '#f44336',
	Website: '#4caf50'
};

export const FooterEditButton = props => {
	return (
		<Footer>
			<FooterTab>
				<Button
					onPress={() => {
						props.editFunction();
					}}>
					<EditButton> EDIT </EditButton>
				</Button>
			</FooterTab>
		</Footer>
	);
};

export default class EditModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			links: ''
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ links: nextProps.links });
	}

	render() {
		return (
			<Modal
				visible={this.props.visible}
				animationType={'fade'}
				transparent={true}
				onRequestClose={this.props.handleModal}
				hardwareAccelerated={true}>
				<ModalContainer>
					<ModalContent>
						<ModalHeader>
							<ModalHeaderText>Edit Your Connect Links</ModalHeaderText>
						</ModalHeader>
						<View>
							{this.props.links.map((link, id) => {
								return (
									<LinkContainer key={id}>
										<LinkLogo color={colors[`${link.name}`]} />
										<Text> {link.name} </Text>
									</LinkContainer>
								);
							})}
						</View>
						<ModalFooter>
							<FooterButton save activeOpacity={0.7}>
								<FooterButtonText> Save </FooterButtonText>
							</FooterButton>
							<FooterButton
								onPress={this.props.handleModal}
								activeOpacity={0.7}>
								<FooterButtonText> Cancel </FooterButtonText>
							</FooterButton>
						</ModalFooter>
					</ModalContent>
				</ModalContainer>
			</Modal>
		);
	}
}
