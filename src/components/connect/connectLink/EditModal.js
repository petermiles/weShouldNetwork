import React, { Component } from "react";
import styled from "styled-components/native";
import { View, Modal } from "react-native";

import { TextField } from "react-native-material-textfield";

import {
	ModalContainer,
	ModalContent,
	ModalHeader,
	ModalHeaderText,
	ModalFooter,
	FooterButton,
	FooterButtonText,
	EditModalClose,
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
			baseLinks: {
				twitter: "www.twitter.com/",
				linkedin: "www.linkedin.com/in/",
				dribbble: "www.dribbble.com/",
				medium: "www.medium.com/",
				email: "",
				phone: "",
			},
		};
	}

	render() {
		console.log(this.props);
		return (
			<Modal
				visible={this.props.visible}
				animationType={"fade"}
				transparent={true}
				onRequestClose={this.props.handleModal}
				hardwareAccelerated={true}>
				<ModalContainer>
					<ModalContent color={colors[`${this.props.name}`]}>
					<EditModalClose> 
							
					</EditModalClose>
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "row",
							}}>
							<TextField
								label={this.state.baseLinks[this.props.name.toLowerCase()] + this.props.link}
								baseColor="white"
								tintColor="white"
								textColor="white"
								containerStyle={{ width: "70%" }}
								value={this.props.name}
								onFocus={() => {
									this.props.sizeChange(true);
								}}
								onChangeText={editLink => this.setState({ editLink })}
								autoCapitalize={"none"}
								returnKeyType={"done"}
							/>
						</View>

						<ModalFooter>
							<FooterButton
								save
								activeOpacity={0.7}
								onPress={() => {
									this.props.editInfo(this.state);
								}}>
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
