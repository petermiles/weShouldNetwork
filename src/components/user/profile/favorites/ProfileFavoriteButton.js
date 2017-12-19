import React, { Component } from 'react';
import { Text, Button } from 'native-base';
import { AsyncStorage } from 'react-native';

import { FavoriteButton } from './styles';

// Missing Button Text Component, make in styles.js folder

export default class ProfileFavoriteButton extends Component {
	render() {
		return (
			<FavoriteButton
				color="#0069c0"
				onPress={() => {
					AsyncStorage.setItem('USER_KEY', false);
					props.navigation.navigate('SignedOut');
				}}>
				<Text style={{ textAlign: 'center', color: 'white' }}>
					Add to Favorites
				</Text>
			</FavoriteButton>
		);
	}
}
