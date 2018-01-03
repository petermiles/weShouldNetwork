import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';

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
} from './styles';

export default function profileHead(props) {
  const image = !props.picURL ? require('./placeholder.png') : { uri: props.picURL };
  if (!props.loading) {
    return (
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<ProfileImage source={image} />
				<MainName> {props.name} </MainName>
				<JobPosition> {props.position} </JobPosition>
				<JobCompany> {props.company} </JobCompany>
				<FavoriteButton
					color="#0069c0"
					onPress={() => {
						AsyncStorage.removeItem('USER_DATA');
						props.navigate('SignedOut');
					}}>
					<Text style={{ textAlign: 'center', color: 'white' }}>Add to Favorites</Text>
				</FavoriteButton>
			</View>
    );
  }
  return (
		<View style={{ alignItems: 'center', justifyContent: 'center' }}>
			<ProfileImageLoading />
			<MainNameLoading />
			<JobPositionLoading />
			<JobCompanyLoading />
		</View>
  );
}
