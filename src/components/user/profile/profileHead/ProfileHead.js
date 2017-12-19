import React, { Component } from 'react';
import { View, Image, Text, AsyncStorage } from 'react-native';
import styled from 'styled-components/native';

const ProfileImage = styled.Image`
	height: 90;
	width: 90;
	border-radius: 63;
	margin-top: 15;
	margin-bottom: 10;
`;

const ProfileImageLoading = styled.View`
	height: 90;
	width: 90;
	border-radius: 63;
	margin-top: 15;
	margin-bottom: 10;
	background-color: #eceff1;
`;

const ProfileTextLoading = styled.View`
	background-color: #ECEFF1
	height: 5;
	width: ${props => props.size || 130}
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

const MainNameLoading = styled.View`
	height: 30;
	width: 90;
	background-color: #cfd8dc;
	margin-bottom: 3
	margin-top: 3
`;

const JobPositionLoading = styled.View`
	height: 17;
	width: 130;
	padding-top: 5;
	padding-bottom: 2;
	padding-left: 10;
	padding-right: 10;
	margin-bottom: 3
	margin-top: 3
	background-color: #cfd8dc;
`;

const JobCompanyLoading = styled.Text`
	text-align: center;
	font-size: 16;
	padding-top: 1;
	padding-bottom: 12;
	padding-left: 10;
	padding-right: 10;
`;

const FavoriteButton = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	background-color: ${props => props.color || '#42A5F5'};
	height: 40;
	width: 200;
	margin-bottom: 20;
	elevation: 2;
`;

export default (ProfileHead = props => {
	console.log(props);
	if (!props.loading) {
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<ProfileImage source={{ uri: props.picURL }} />
				<MainName> {props.name} </MainName>
				<JobPosition> {props.position} </JobPosition>
				<JobCompany> {props.company} </JobCompany>
				<FavoriteButton
					color="#0069c0"
					onPress={() => {
						AsyncStorage.setItem('USER_KEY', 'false');
						props.navigate('SignedOut');
					}}>
					<Text style={{ textAlign: 'center', color: 'white' }}>
						Add to Favorites
					</Text>
				</FavoriteButton>
			</View>
		);
	} else {
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<ProfileImageLoading />
				<MainNameLoading />
				<JobPositionLoading />
				<JobPositionLoading />
			</View>
		);
	}
});
