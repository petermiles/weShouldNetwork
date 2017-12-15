import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Text, Button, Footer, FooterTab } from 'native-base';
import {
	TouchableWithoutFeedback,
	View,
	Animated,
	TouchableOpacity,
	Modal,
	StyleSheet
} from 'react-native';

import EditModalItem from './EditModalItem';

const colors = {
	LinkedIn: '#008CC9',
	Dribble: '#ea4c89',
	Facebook: '#3b5998',
	Twitter: '#1da1f2',
	Medium: 'black',
	Phone: '#ff9800',
	Email: '#f44336',
	Website: '#4caf50',
	Add: '#C8E6C9'
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
			<View>
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
									if (link.name !== 'Add') {
										return (
											<EditModalItem
												key={id}
												name={link.name}
												link={link.link}
											/>
										);
									}
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
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	flipCard: {
		flexDirection: 'row',
		width: '90%',
		marginTop: '1.5%',
		marginBottom: '1.5%',
		paddingTop: '2.5%',
		paddingBottom: '2.5%',
		marginLeft: '3.5%',
		marginRight: '3.5%',
		elevation: 2,
		backfaceVisibility: 'hidden'
	}
});

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
	width: 95%;
	height: 94%;
	justify-content: center
	background-color: #FAFAFA
`;

const ModalHeader = styled.View`
	position: absolute
	top: 0
	left: 0
	right: 0
	background-color: cornflowerblue;
	width: 100%;
	elevation: 3
`;

const ModalHeaderText = styled.Text`
	color: white;
	font-size: 24;
	padding-top: 3%;
	padding-bottom: 3%;
	text-align: center;
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
	font-size: 22;
`;

const LinkContainer = styled.View`
	flex-direction: row;
	width: 93%;
	margin-top: 1%;
	margin-bottom: 1%;
	margin-left: 3.5%;
	margin-right 3.5%;
	background-color: #F5F5F5;
	elevation: 2;
`;

const LinkText = styled.Text`
	font-size: 24;
	margin-left: 7%;
`;

const LinkLogo = styled.View`
	height: 35;
	width: 35;
	border-radius: 20;
	elevation: 2;
	background: ${props => props.color};
`;
