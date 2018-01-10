import React from "react";

import { TouchableWithoutFeedback, Vibration } from "react-native";

import { Slide, ModalHeader, ModalHeaderText, ProviderContainer, Provider, ProviderText } from "../styles";

import { CloseButton } from "../AddLinkModal";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const ProvidersSlide = props => {
	return (
		<Slide>
			<ModalHeader>
				<CloseButton />
				<ModalHeaderText> Choose a Provider </ModalHeaderText>
			</ModalHeader>

			<ProviderContainer>
				{props.providers.map((x, i) => (
					<Provider
						length={i}
						key={i}
						color={x.toLowerCase()}
						activeOpacity={0.6}
						onPress={() => {
							props.select(x);
						}}>
						<Icon name={x.toLowerCase()} style={{ color: "white", fontSize: 30, height: 30 }} />
						<ProviderText> {x} </ProviderText>
					</Provider>
				))}
			</ProviderContainer>
		</Slide>
	);
};
