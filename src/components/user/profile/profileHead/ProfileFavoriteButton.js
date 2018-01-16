import React from 'react';
import { View, AsyncStorage, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
	FavoriteButton,
	FavoriteButtonText,
	FavoriteButtonPlaceholder,
} from './styles';

import axios from 'axios';
import { connect } from 'react-redux';

let loading = false;
let ownProfile = true;
let saved = false;

export const ProfileFavoriteButton = props => {
	const { profileUid, userUid, saveItem } = props;
	return ownProfile ? (
		<FavoriteButtonPlaceholder />
	) : (
		<FavoriteButton
			saved={props.saved}
			onPress={() => {
				loading = true;
				!saved &&
					axios
						.post('http://172.31.99.35:3001/api/user/favorites/save', {
							profileUid: profileUid,
							userUid: userUid,
						})
						.then(result => {
							AsyncStorage.setItem(
								'USER_FAVORITES',
								JSON.stringify(result.data),
								() => {
									loading = false;
									saved = true;
									saveItem();
								}
							);
						});
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
				{loading ? (
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

const mapStateToProps = ({ profileReducer }) => {
	ownProfile = profileReducer.uid === profileReducer.profileUid ? true : false;
	return {};
};

export default connect(mapStateToProps)(ProfileFavoriteButton);
