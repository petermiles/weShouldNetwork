import React from "react";
import { View, TouchableOpacity, Modal, Dimensions } from "react-native";

import { SettingsTitle, closeIconStyle } from "./styles";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const Settings = props => {
	return (
		<View>
			<Modal visible={props.visible} onRequestClose={props.handleModal} animationType={"fade"} transparent={true}>
				<View
					style={{
						height: Dimensions.get("window").height * 0.885,
						position: "absolute",
						bottom: 0,
						backgroundColor: "white",
						width: "100%",
					}}>
					<TouchableOpacity
						hitSlop={{ top: 15, left: 15, right: 25, bottom: 25 }}
						style={{ elevation: 15, width: 70, height: 70, position: "absolute" }}
						onPress={props.handleModal}>
						<Icon name={"close"} style={closeIconStyle} />
					</TouchableOpacity>
					<SettingsTitle> Settings </SettingsTitle>
				</View>
			</Modal>
		</View>
	);
};
