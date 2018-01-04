import React from "react";
import { View } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Slide, ConfirmText, SaveButton, SaveButtonText, colors } from "../styles";

export const ConfirmSlide = props => {
	return (
		<Slide color={colors[props.selected.toLowerCase()]}>
			<View
				style={{
					height: "100%",
					justifyContent: "center",
					alignItems: "center",
					padding: "5%",
				}}
			>
				<Icon name={props.selected.toLowerCase()} style={{ color: "white", height: 50, fontSize: 50 }} />
				<ConfirmText primary> Does this look right? </ConfirmText>
				<ConfirmText> {props.confirmLink} </ConfirmText>
				<SaveButton activeOpacity={0.6} onPress={props.saveLink}>
					<SaveButtonText> Save </SaveButtonText>
				</SaveButton>
			</View>
		</Slide>
	);
};
