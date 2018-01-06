import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { SettingsTitle, closeIconStyle } from "./styles";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const Settings = props => {
	return (
		<View>
			<TouchableOpacity
				hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
				style={{ elevation: 15, backgroundColor: "transparent", width: 70, height: 70, position: "absolute" }}
				onPressOut={() => {
					console.log("ay");
					props.close();
				}}>
				<Icon name={"close"} style={closeIconStyle} />
			</TouchableOpacity>
			<SettingsTitle> Settings </SettingsTitle>
		</View>
	);
};
