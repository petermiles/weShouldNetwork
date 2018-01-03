import React, { Component } from "react";
import styled from "styled-components/native";
import { View, Modal, BackHandler } from "react-native";

import { TextField } from "react-native-material-textfield";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
		console.log(props);
		super(props);

		this.state = {
			editLink: props.link,
			editName: props.name,
			editId: props.id,
			delete: false,
			primary: "",
			typing: false,
			sizeChange: false,
			visible: props.visible,
			baseLinks: {
				twitter: "www.twitter.com/",
				linkedin: "www.linkedin.com/in/",
				dribbble: "www.dribbble.com/",
				medium: "www.medium.com/",
				email: "",
				phone: "",
			},
		};

		this.sizeChange = this.sizeChange.bind(this);
	}

	componentWillMount() {
		BackHandler.addEventListener("hardwareBackPress", () => {
			console.log("test");
			return true;
		});
	}

	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress");
	}

	sizeChange() {
		this.setState({ sizeChange: !this.state.sizeChange });
	}

	render() {
		return (
			<Modal
				visible={this.props.visible}
				animationType={"fade"}
				transparent={true}
				onRequestClose={this.props.handleModal}
				hardwareAccelerated={true}>
				<ModalContainer>
					<ModalContent color={colors[this.props.name.toLowerCase()]} size={this.state.sizeChange}>
						<EditModalClose
							onPress={() => {
								this.props.closeModal();
							}}>
							<Icon name={"close"} style={{ color: "white", fontSize: 25, height: 25 }} />
						</EditModalClose>
						<View
							style={{
								alignItems: "center",
							}}>
							<Icon name={this.props.name.toLowerCase()} style={{ color: "white", fontSize: 50, height: 50, marginBottom: 5 }} />
							<TextField
								label={this.state.baseLinks[this.props.name.toLowerCase()] + this.props.link}
								baseColor="white"
								tintColor="white"
								textColor="white"
								containerStyle={{ width: "70%" }}
								value={this.props.editLink}
								onFocus={() => {
									this.setState({ sizeChange: true });
								}}
								onBlur={() => {
									this.setState({ sizeChange: false });
								}}
								onEndEditing={() => {
									this.setState({ sizeChange: false });
								}}
								onChangeText={editLink => this.setState({ editLink })}
								spellCheck={false}
								autoCapitalize={"none"}
								returnKeyType={"done"}
							/>
						</View>

						<ModalFooter>
							<FooterButton
								save
								activeOpacity={0.7}
								onPress={() => {
									console.log("test");
									this.props.editInfo(this.state);
								}}>
								<FooterButtonText> Save </FooterButtonText>
							</FooterButton>
						</ModalFooter>
					</ModalContent>
				</ModalContainer>
			</Modal>
		);
	}
}
