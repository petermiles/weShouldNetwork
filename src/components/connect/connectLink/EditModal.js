import React, { Component } from "react";

import { View, Modal, TextInput } from "react-native";

import {
	ModalContainer,
	ModalContent,
	ModalHeader,
	ModalHeaderText,
	ModalFooter,
	FooterButton,
	FooterButtonText,
	colors,
} from "./styles";

export default class EditModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editLink: props.link,
			editName: props.name,
			editId: props.id,
			delete: false,
			primary: "",
			typing: false,
		};
	}

	render() {
		return (
			<Modal
				visible={this.props.visible}
				animationType={"fade"}
				transparent={true}
				onRequestClose={this.props.handleModal}
				hardwareAccelerated={true}
			>
				<ModalContainer>
					<ModalContent>
						<ModalHeader color={colors[`${this.props.name}`]}>
							<ModalHeaderText>
								{this.props.name ? this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1) : null}
							</ModalHeaderText>
						</ModalHeader>
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "row",
							}}
						>
							<TextInput
								onChangeText={text => {
									this.setState({ editLink: text });
								}}
								defaultValue={this.props.link}
								editable={true}
								style={{ fontSize: 20, flex: 0.8 }}
								returnKeyType={"done"}
								onFocus={() => {
									this.setState({ typing: true });
								}}
								onEndEditing={() => {
									this.setState({ typing: false });
								}}
							/>
						</View>

						<ModalFooter>
							<FooterButton
								save
								activeOpacity={0.7}
								onPress={() => {
									this.props.editInfo(this.state);
								}}
							>
								<FooterButtonText> Save </FooterButtonText>
							</FooterButton>
							<FooterButton onPress={this.props.handleModal} activeOpacity={0.7}>
								<FooterButtonText> Cancel </FooterButtonText>
							</FooterButton>
						</ModalFooter>
					</ModalContent>
				</ModalContainer>
			</Modal>
		);
	}
}
