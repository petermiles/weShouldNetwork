import React, { Component } from 'react';
import { View, Image, Text, AsyncStorage } from 'react-native';

import {
	ProfileImage,
	ProfileImageLoading,
	MainName,
	MainNameLoading,
	JobPosition,
	JobPositionLoading,
	JobCompany,
	JobCompanyLoading,
	FavoriteButton
} from './styles';

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
