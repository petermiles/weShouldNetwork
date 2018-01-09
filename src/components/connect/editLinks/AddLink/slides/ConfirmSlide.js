import React from "react";
import { View, ActivityIndicator } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Slide, ConfirmText, SaveButton, SaveButtonText, colors } from "../styles";

import { CloseButton } from "../AddLinkModal";

export const ConfirmSlide = props => {
	return (
		<Slide color={colors[props.selected.toLowerCase()]}>
			<View
				style={{
					height: "100%",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Icon name={props.selected.toLowerCase()} style={{ color: "white", height: 60, fontSize: 60 }} />
				<ConfirmText primary> Does this look right? </ConfirmText>
				<ConfirmText> {props.confirmLink} </ConfirmText>
				<SaveButton activeOpacity={0.6} onPress={!props.loading ? props.saveLink : null}>
					{props.loading ? (
						<ActivityIndicator color="white" size={24} />
					) : (
						<SaveButtonText name={props.name}> Save </SaveButtonText>
					)}
				</SaveButton>
			</View>
		</Slide>
	);
};
