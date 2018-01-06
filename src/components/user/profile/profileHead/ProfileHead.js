import React from "react";
import { View } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ProfileFavoriteButton } from "./ProfileFavoriteButton";

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
} from "./styles";

export default function profileHead(props) {
	const image = !props.profilePicURL ? require("./placeholder.png") : { uri: props.profilePicURL };
	if (!props.loading) {
		return (
			<View>
				<InfoButton
					onPress={() => {
						console.log(props);
						props.openSettings();
					}}>
					<Icon name={"settings"} style={{ color: "#757575", fontSize: 30, height: 70 }} />
				</InfoButton>
				<CenterView>
					<ProfileImage source={image} />
					<MainName> {props.name} </MainName>
					<JobPosition> {props.position} </JobPosition>
					<JobCompany> {props.company} </JobCompany>
					{!props.ownProfile ? (
						<ProfileFavoriteButton userUid={props.userUid} saveItem={props.saveItem} />
					) : (
						<View style={{ height: 40, marginBottom: 20 }} />
					)}
				</CenterView>
			</View>
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
