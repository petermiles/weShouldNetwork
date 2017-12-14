import React, { Component } from 'react';
import { Text, Button } from 'native-base';
import styled from 'styled-components/native';

const FavoriteButton = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	background-color: #0069c0;
	height: 40;
	width: 200;
	margin-bottom: 20;
`;

export default (ProfileFavoriteButton = props => {
	return (
		<FavoriteButton
			onPress={() => {
				AsyncStorage.setItem('USER_KEY', 'false');
				navigate('SignedOut');
			}}>
			<Text style={{ textAlign: 'center', color: 'white' }}>
				Add to Favorites
			</Text>
		</FavoriteButton>
	);
});
