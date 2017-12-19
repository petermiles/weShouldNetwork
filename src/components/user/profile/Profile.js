import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import { View, AsyncStorage, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode';
import ProfileHead from './profileHead/ProfileHead';
import axios from 'axios';

import { CenteredView, QRCodeLoading, Footer, FooterText } from './styles';

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
			: AsyncStorage.getItem('USER_DATA')
				? AsyncStorage.getItem('USER_DATA').then(res => {
						const result = JSON.parse(res);
						this.setState({
							name: result.name,
							position: result.position,
							company: result.company,
							profilePicURL: result.profilepic,
							loading: false,
							profileUid: result.uid
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
						navigate={navigate}
					/>
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
