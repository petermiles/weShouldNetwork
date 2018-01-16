import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
	FavoriteButton,
	FavoriteButtonText,
	FavoriteButtonPlaceholder,
} from './styles';

export const ProfileFavoriteButton = props => {
	const { saveItem, saved, loading } = props;
	return props.ownProfile || loading ? (
		<FavoriteButtonPlaceholder />
	) : (
		<FavoriteButton
			saved={saved}
			onPress={() => {
				!saved ? saveItem() : null;
			}}>
			<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
				{saved && (
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
				{loading && !props.ownProfile ? (
					<ActivityIndicator size={24} color={'white'} />
				) : (
					<FavoriteButtonText saved={saved}>
						{saved ? 'Saved' : 'Add to Favorites'}{' '}
					</FavoriteButtonText>
				)}
			</View>
		</FavoriteButton>
	);
};
