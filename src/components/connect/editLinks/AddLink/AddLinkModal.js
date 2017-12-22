import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Modal, ScrollView } from "react-native";

import {
	ModalContainer,
	ModalContent,
	ModalHeader,
	ModalHeaderText,
	Slide,
	ProviderContainer,
	Provider,
	ProviderText,
} from "./styles";

import LinkSlide from "./slides/LinkSlide";

export default class AddLinkModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			providers: ["LinkedIn", "Twitter", "Medium", "Phone", "Email"],
			selected: "",
			width: "",
		};
	}

	render() {
		return (
			<Modal transparent={true} visible={this.props.visible} onRequestClose={this.props.closeModal} animationType={"slide"}>
				<ModalContainer>
					<ModalContent>
						<ScrollView
							horizontal={true}
							pagingEnabled={true}
							ref={scrollview => (this.ScrollView = scrollview)}
							onContentSizeChange={width => {
								this.setState({ width });
							}}
						>
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
									{this.state.providers.map((x, i) => (
										<Provider
											key={i}
											color={x.toLowerCase()}
											activeOpacity={0.6}
											onPress={() => {
												this.setState({ selected: x });
												this.ScrollView.scrollTo({ x: this.state.width, y: 0, animated: "true" });
											}}
										>
											<Icon name={x.toLowerCase()} style={{ color: "white", fontSize: 30, height: 30 }} />
											<ProviderText> {x} </ProviderText>
										</Provider>
									))}
								</ProviderContainer>
							</Slide>
							{this.state.selected ? <LinkSlide selected={this.state.selected} /> : null}
						</ScrollView>
					</ModalContent>
				</ModalContainer>
			</Modal>
		);
	}
}
