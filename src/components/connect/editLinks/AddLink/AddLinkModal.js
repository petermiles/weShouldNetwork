import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Modal, ScrollView, View, Dimensions } from "react-native";

import {
	ModalContainer,
	ModalContent,
	ModalHeader,
	ModalHeaderText,
	ModalFooter,
	FooterButton,
	FooterButtonText,
	Slide,
	ProviderContainer,
	Provider,
	ProviderText,
} from "./styles";

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
		console.log(this.props);
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
										name={"times"}
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
												this.ScrollView.scrollTo({ x: 720, y: 0, animated: "true" });
											}}
										>
											<Icon name={x.toLowerCase()} style={{ color: "white", fontSize: 30, height: 30 }} />
											<ProviderText> {x} </ProviderText>
										</Provider>
									))}
								</ProviderContainer>
							</Slide>
							{this.state.selected ? (
								<View>
									<Slide color={"red"}>
										<ModalHeader color={this.state.selected.toLowerCase()}>
											<ModalHeaderText> {this.state.selected} </ModalHeaderText>
										</ModalHeader>
									</Slide>
								</View>
							) : null}
						</ScrollView>
					</ModalContent>
				</ModalContainer>
			</Modal>
		);
	}
}
