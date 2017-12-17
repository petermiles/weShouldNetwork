import React, { Component } from 'react';
import {
	Container,
	Content,
	Text,
	Footer,
	FooterTab,
	Button
} from 'native-base';
import styled from 'styled-components/native';
import { View, AsyncStorage } from 'react-native';
import QRCode from 'react-native-qrcode';
import ProfileHead from './profileHead/ProfileHead';
import ProfileFavoriteButton from './favorites/ProfileFavoriteButton';
import axios from 'axios';

const ProfileImage = styled.Image`
	height: 90;
	width: 90;
	border-radius: 63;
	margin-top: 15;
	margin-bottom: 10;
`;

const MainName = styled.Text`
	text-align: center;
	font-size: 30;
`;

const JobPosition = styled.Text`
	font-weight: 500;
	text-align: center;
	font-size: 17;
	padding-top: 5;
	padding-bottom: 2;
	padding-left: 10;
	padding-right: 10;
`;

const JobCompany = styled.Text`
	text-align: center;
	font-size: 16;
	padding-top: 1;
	padding-bottom: 12;
	padding-left: 10;
	padding-right: 10;
`;

const CenteredView = styled.View`
	align-items: center;
`;

const QRCodeLoading = styled.View`
	width: 200;
	height: 200;
	background-color: #cfd8dc;
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
			userUid: ''
		};

		AsyncStorage.getItem('USER_KEY').then(result => {
			this.setState({ userUid: result });
		});
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
		const { navigate } = this.props.navigation;
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
						<ProfileFavoriteButton loading={this.state.loading} />
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
				<Footer>
					<FooterTab>
						<Button
							onPress={() => {
								navigate('Scan');
							}}>
							<Text> SCAN </Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}
