import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Placeholder from 'rn-placeholder';
import axios from 'axios';

import {
  ProfileImage,
  ProfileImageLoading,
  MainName,
  MainNameLoading,
  JobPosition,
  JobPositionLoading,
  JobCompany,
  JobCompanyLoading,
  FavoriteButton,
  FavoriteButtonText,
  CenterView,
} from './styles';

export default function profileHead(props) {
  const image = !props.profilePicURL ? require('./placeholder.png') : { uri: props.profilePicURL };
  if (!props.loading) {
    return (
			<CenterView>
				<ProfileImage source={image} />
				<MainName> {props.name} </MainName>
				<JobPosition> {props.position} </JobPosition>
				<JobCompany> {props.company} </JobCompany>
				{!props.ownProfile ? (
					<FavoriteButton
						onPress={() => {
							console.log(props);
							axios
								.post('http://172.31.99.35:3001/api/favorites/save', { profileUid: props.profileUid, userUid: props.userUid })
								.then((result) => {
									console.log(result);
								});
						}}>
						<FavoriteButtonText>Add to Favorites </FavoriteButtonText>
					</FavoriteButton>
				) : (
					<View style={{ height: 40, marginBottom: 20 }} />
				)}
			</CenterView>
    );
  }
  return (
		<CenterView>
			<ProfileImageLoading />
			<MainNameLoading />
			<JobPositionLoading />
			<JobCompanyLoading />
		</CenterView>
  );
}
