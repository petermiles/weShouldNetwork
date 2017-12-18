import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import styled from 'styled-components/native';
import { View, AsyncStorage, TouchableOpacity, Text } from 'react-native';
import QRCode from 'react-native-qrcode';
import ProfileHead from './profileHead/ProfileHead';
import axios from 'axios';

const CenteredView = styled.View`
	align-items: center;
`;

const QRCodeLoading = styled.View`
	width: 200;
	height: 200;
	background-color: #cfd8dc;
`;

const Footer = styled.TouchableOpacity`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #4caf50;
	justify-content: center;
	height: 10%;
`;
const FooterText = styled.Text`
	color: white;
	font-size: 24;
	text-align: center;
`;

const FavoriteButton = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	background-color: #0069c0;
	height: 40;
	width: 200;
	margin-bottom: 20;
`;

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			profileUid: '',
			name: '',
			position: '',
			profilePicURL: '',
			company: '',
			userUid: '',
			ownProfile: true
		};
	}

	componentDidMount() {
		this.props.navigation.state.params
			? axios
					.get(
						'http://172.31.99.35:3001/api/user/getInfo/' +
							this.props.navigation.state.params.uid
					)
					.then(result => {
						this.setState({
							name: result.data.name,
							position: result.data.position,
							company: result.data.company,
							profilePicURL: result.data.profilepic,
							loading: false,
							ownProfile: false,
							profileUid: result.data.uid
						});
					})
			: AsyncStorage.getItem('USER_KEY').then(id => {
					axios
						.get('http://172.31.99.35:3001/api/user/getInfo/' + id)
						.then(result => {
							this.setState({
								name: result.data.name,
								position: result.data.position,
								company: result.data.company,
								profilePicURL: result.data.profilepic,
								loading: false,
								profileUid: result.data.uid
							});
						});
				});
	}
	render() {
		const { navigate, goBack } = this.props.navigation;
		return (
			<Container>
				<Content>
					<ProfileHead
						name={this.state.name}
						company={this.state.company}
						position={this.state.position}
						picURL={this.state.profilePicURL}
						loading={this.state.loading}
					/>
					<CenteredView>
						<FavoriteButton
							onPress={() => {
								AsyncStorage.setItem('USER_KEY', 'false');
								this.props.navigation.navigate('SignedOut');
							}}>
							<Text style={{ textAlign: 'center', color: 'white' }}>
								Add to Favorites
							</Text>
						</FavoriteButton>
					</CenteredView>

					<CenteredView>
						{!this.state.loading ? (
							<QRCode
								value={
									this.props.navigation.state.params
										? this.props.navigation.state.params.uid
										: this.state.uid
								}
								size={200}
								bgColor="black"
								fgColor="white"
							/>
						) : (
							<QRCodeLoading />
						)}
					</CenteredView>
				</Content>
				{!this.state.loading ? (
					this.state.ownProfile ? (
						<Footer
							activeOpacity={0.8}
							onPress={() => {
								navigate('Scan');
							}}>
							<FooterText> Scan </FooterText>
						</Footer>
					) : (
						<Footer
							activeOpacity={0.8}
							onPress={() => {
								navigate('SignedIn');
							}}>
							<FooterText> Go Back To My Profile </FooterText>
						</Footer>
					)
				) : null}
			</Container>
		);
	}
}
