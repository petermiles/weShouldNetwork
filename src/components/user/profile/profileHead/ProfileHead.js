import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProfileFavoriteButton } from './ProfileFavoriteButton';

import {
	saveFavorite,
	checkFavoritesForSaved,
} from './../../../../ducks/favorites/actions';

import {
	ProfileImage,
	ProfileImageLoading,
	MainName,
	MainNameLoading,
	JobPosition,
	JobPositionLoading,
	JobCompany,
	JobCompanyLoading,
	CenterView,
	InfoButton,
} from './styles';

class ProfileHead extends Component {
	componentDidMount() {
		const { profileUid, baseuid, ownProfile } = this.props.profileReducer;
		if (!ownProfile) {
			this.props.checkFavoritesForSaved(profileUid, baseuid);
		}
	}

	render() {
		const {
			name,
			position,
			company,
			profileUid,
			baseuid,
			profilePicURL,
			ownProfile,
		} = this.props.profileReducer;
		const { loading, saved } = this.props.favoritesReducer;
		const image = !profilePicURL
			? require('./placeholder.png')
			: { uri: profilePicURL };
		if (!this.props.loading) {
			return (
				<View>
					{ownProfile && (
						<InfoButton
							hitSlop={{ top: 15, left: 15, right: 25, bottom: 25 }}
							onPress={this.props.handleModal}>
							<Icon
								name={'settings'}
								style={{ color: '#757575', fontSize: 30, height: 70 }}
							/>
						</InfoButton>
					)}

					<CenterView>
						<ProfileImage source={image} />
						<MainName> {name} </MainName>
						<JobPosition> {position} </JobPosition>
						<JobCompany> {company} </JobCompany>
						<ProfileFavoriteButton
							loading={loading}
							saved={saved}
							profileUid={profileUid}
							userUid={baseuid}
							ownProfile={profileUid === baseuid}
							saveItem={() => {
								this.props.saveFavorite(profileUid, baseuid);
							}}
						/>
					</CenterView>
				</View>
			);
		} else {
			return (
				<CenterView>
					<ProfileImageLoading />
					<MainNameLoading />
					<JobPositionLoading />
					<JobCompanyLoading />
				</CenterView>
			);
		}
	}
}

const mapStateToProps = ({ profileReducer, favoritesReducer }) => {
	return { profileReducer, favoritesReducer };
};

export default connect(mapStateToProps, {
	saveFavorite,
	checkFavoritesForSaved,
})(ProfileHead);
