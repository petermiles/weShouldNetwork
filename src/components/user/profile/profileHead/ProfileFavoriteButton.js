import React from 'react';
import { View, AsyncStorage, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
	FavoriteButton,
	FavoriteButtonText,
	FavoriteButtonPlaceholder,
} from './styles';

import axios from 'axios';

let loading = false;

export const ProfileFavoriteButton = props => {
	return !props.ownProfile ? (
		<FavoriteButtonPlaceholder />
	) : (
		<FavoriteButton
			saved={props.saved}
			onPress={() => {
				loading = true;
				!props.saved &&
					axios
						.post('http://172.31.99.35:3001/api/user/favorites/save', {
							profileUid: props.profileUid,
							userUid: props.userUid,
						})
						.then(result => {
							AsyncStorage.setItem(
								'USER_FAVORITES',
								JSON.stringify(result.data),
								() => {
									loading = false;
									props.saveItem();
								}
							);
						});
			}}>
			<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
				{props.saved && (
					<Icon
						name={'check'}
						style={{
							color: 'white',
							fontSize: 23,
							height: 23,
							marginRight: 5,
						}}
					/>
				)}
				{loading ? (
					<ActivityIndicator size={24} color={'white;'} />
				) : (
					<FavoriteButtonText saved={props.saved}>
						{props.saved ? 'Saved' : 'Add to Favorites'}{' '}
					</FavoriteButtonText>
				)}
			</View>
		</FavoriteButton>
	);
};
