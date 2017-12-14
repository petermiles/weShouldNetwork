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
import ConnectLink from './connectLink/ConnectLink';
import ConnectLinkPage from './connectLink/ConnectLinkPage';
import ProfileHead from './profileHead/ProfileHead';
import ProfileContent from './ProfileContent';
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

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			uid: '',
			name: '',
			position: '',
			profilePicURL: '',
			company: ''
		};
	}

	componentDidMount() {
		AsyncStorage.getItem('USER_KEY').then(result => {
			this.props.navigation.setParams({ user: result });
			axios
				.get('http://172.31.99.35:3001/api/user/getInfo/' + result)
				.then(result => {
					this.setState({
						name: result.data.name,
						position: result.data.position,
						company: result.data.company,
						profilePicURL: result.data.profilepic,
						loading: false,
						uid: result.data.uid
					});
				});
		});
	}
	render() {
		const { navigate } = this.props.navigation;
		if (this.state.loading) {
			return <Text> Loading </Text>;
		} else {
			return (
				<Container>
					<Content>
						<ProfileHead
							name={this.state.name}
							company={this.state.company}
							position={this.state.position}
							picURL={this.state.profilePicURL}
						/>
						<CenteredView>
							<ProfileFavoriteButton />
						</CenteredView>

						<CenteredView>
							<QRCode
								value={this.props.navigation.state.params.user}
								size={200}
								bgColor="black"
								fgColor="white"
							/>
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
}
