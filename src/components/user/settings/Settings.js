import React, { Component } from "react";
import { View, TouchableOpacity, Modal, Dimensions, KeyboardAvoidingView } from "react-native";

import {
	closeIconStyle,
	ProfileImageChange,
	ProfileImage,
	TextFieldsContainer,
	TextFieldProps,
	SaveButton,
	SaveButtonText,
} from "./styles";

import { TextField } from "react-native-material-textfield";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Settings extends Component {
	constructor(props) {
		super(props);

		this.state = {
			saved: false,
			name: "",
			position: "",
			company: "",
		};
	}

	render() {
		const { profilePic, visible, handleModal, name, position, company } = this.props;
		const image = !profilePic ? require("../profile/profileHead/placeholder.png") : { uri: profilePic };
		return (
			<View>
				<Modal visible={visible} onRequestClose={handleModal} animationType={"fade"} transparent={true}>
					<View
						style={{
							height: Dimensions.get("window").height * 0.885,
							position: "absolute",
							bottom: 0,
							backgroundColor: "white",
							width: "100%",
						}}>
						<TouchableOpacity
							hitSlop={{ top: 15, left: 15, right: 25, bottom: 25 }}
							style={{ elevation: 15, width: 70, height: 70, position: "absolute" }}
							onPress={handleModal}>
							<Icon name={"close"} style={closeIconStyle} />
						</TouchableOpacity>
						<ProfileImageChange>
							<ProfileImage source={image} />
						</ProfileImageChange>

						<TextFieldsContainer>
							<KeyboardAvoidingView behavior={"padding"}>
								<TextField
									onChangeText={text => {
										this.props.handleTextChange("name", text);
									}}
									value={name}
									label={"Name"}
									{...TextFieldProps}
								/>
								<TextField
									onChangeText={text => {
										this.props.handleTextChange("position", text);
									}}
									value={position}
									label={"Position"}
									{...TextFieldProps}
								/>
								<TextField
									onChangeText={text => {
										this.props.handleTextChange("company", text);
									}}
									value={company}
									label={"Company"}
									{...TextFieldProps}
								/>
							</KeyboardAvoidingView>
						</TextFieldsContainer>

						<SaveButton>
							<SaveButtonText> {this.state.saved ? "Saved" : "Save"} </SaveButtonText>
						</SaveButton>
					</View>
				</Modal>
			</View>
		);
	}
}
