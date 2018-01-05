import React from "react";
import { View, Text, AsyncStorage, ActivityIndicator } from "react-native";
import Placeholder from "rn-placeholder";
import axios from "axios";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
} from "./styles";

export default function profileHead(props) {
	let loading = false;
	const image = !props.profilePicURL ? require("./placeholder.png") : { uri: props.profilePicURL };
	if (!props.loading) {
		return (
			<CenterView>
				<ProfileImage source={image} />
				<MainName> {props.name} </MainName>
				<JobPosition> {props.position} </JobPosition>
				<JobCompany> {props.company} </JobCompany>
				{!props.ownProfile ? (
					<FavoriteButton
						saved={props.saved}
						onPress={() => {
							loading = true;
							!props.saved &&
								axios
									.post("http://172.31.99.35:3001/api/user/favorites/save", {
										profileUid: props.profileUid,
										userUid: props.userUid,
									})
									.then(result => {
										AsyncStorage.setItem("USER_FAVORITES", JSON.stringify(result.data), () => {
											loading = false;
											props.saveItem();
										});
									});
						}}>
						<View style={{ flexDirection: "row", justifyContent: "center" }}>
							{props.saved && (
								<Icon
									name={"check"}
									style={{
										color: "white",
										fontSize: 23,
										height: 23,
										marginRight: 5,
									}}
								/>
							)}
							{loading ? (
								<ActivityIndicator size={24} color={"white;"} />
							) : (
								<FavoriteButtonText saved={props.saved}>{props.saved ? "Saved" : "Add to Favorites"} </FavoriteButtonText>
							)}
						</View>
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
