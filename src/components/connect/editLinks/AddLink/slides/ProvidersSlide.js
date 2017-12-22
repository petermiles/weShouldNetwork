import React, { Component } from "react";

import { Slide, ModalHeader, ModalHeaderText, ProviderContainer, Provider, ProviderText } from "../styles";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class ProvidersSlide extends Component {
	render() {
		return (
			<Slide>
				<ModalHeader>
					<Icon
						name={"close"}
						style={{ color: "white", fontSize: 20, height: 20, position: "absolute", top: "31%", left: "5%" }}
						onPress={this.props.closeModal}
					/>
					<ModalHeaderText> Choose a Provider </ModalHeaderText>
				</ModalHeader>
				<ProviderContainer>
					{this.props.providers.map((x, i) => (
						<Provider
							key={i}
							color={x.toLowerCase()}
							activeOpacity={0.6}
							onPress={() => {
								this.props.select(x);
								this.props.scrollview.scrollTo({ x: 720, y: 0, animated: "true" });
							}}
						>
							<Icon name={x.toLowerCase()} style={{ color: "white", fontSize: 30, height: 30 }} />
							<ProviderText> Test </ProviderText>
						</Provider>
					))}
				</ProviderContainer>
			</Slide>
		);
	}
}
