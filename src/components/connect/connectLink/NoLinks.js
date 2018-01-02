import React from "react";

import { Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { NoLinkContainer, NoLinkText, AddLinkButton, AddLinkButtonText } from "./styles";

export const NoLinks = props => {
	return (
		<NoLinkContainer>
			<Icon name="emoticon-sad" style={{ color: "#2196f3", fontSize: 150, height: 150 }} />
			<NoLinkText primary> Your profile doesn't have any links. </NoLinkText>

			<AddLinkButton activeOpacity={0.8} onPress={props.addLink}>
				<AddLinkButtonText> Add a Link </AddLinkButtonText>
			</AddLinkButton>
		</NoLinkContainer>
	);
};
