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
				<InfoButton hitSlop={{ top: 15, left: 15, right: 25, bottom: 25 }} onPress={props.handleModal}>
					<Icon name={"settings"} style={{ color: "#757575", fontSize: 30, height: 70 }} />
				</InfoButton>
				<CenterView>
					<ProfileImage source={image} />
					<MainName> {props.name} </MainName>
					<JobPosition> {props.position} </JobPosition>
					<JobCompany> {props.company} </JobCompany>
					{props.ownProfile ? (
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
