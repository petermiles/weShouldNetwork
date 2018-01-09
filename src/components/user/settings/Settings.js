import React, { Component } from "react";
import { View, TouchableOpacity, Modal, Dimensions } from "react-native";

import { connect } from "react-redux";

import { closeIconStyle, ProfileImageChange, ProfileImage, TextFieldProps, SaveButton, SaveButtonText } from "./styles";

import { TextField } from "react-native-material-textfield";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import { changeName } from "src/ducks/user/settings/actions";

export default class Settings extends Component {
	constructor(props) {
		super(props);

		this.state = {
			saved: false,
			name: "",
			position: "",
			company: "",
		};
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	handleTextChange(key, val) {
		this.setState({ key: val });
	}

	render() {
		const { profilePic, visible, handleModal, name, position, company } = this.props;
		const image = !profilePic ? require("../profile/profileHead/placeholder.png") : { uri: profilePic };
		return (
			<View>
				<Modal visible={visible} onRequestClose={handleModal} animationType={"fade"} transparent={true}>
					<KeyboardAwareScrollView
						resetScrollToCoords={{ x: 0, y: 0 }}
						contentContainerStyle={{
							height: Dimensions.get("window").height,

							backgroundColor: "white",
							width: "100%",
						}}
						scrollEnabled={false}>
						<TouchableOpacity
							hitSlop={{ top: 15, left: 15, right: 25, bottom: 25 }}
							style={{ elevation: 15, width: 70, height: 70, position: "absolute" }}
							onPress={handleModal}>
							<Icon name={"close"} style={closeIconStyle} />
						</TouchableOpacity>
						<View style={{ width: "84%", marginLeft: "8%", marginTop: "15%" }}>
							<ProfileImageChange>
								<ProfileImage source={image} />
							</ProfileImageChange>

							<TextField
								onChangeText={text => {
									this.handleTextChange("name", text);
								}}
								value={name}
								label={"Name"}
								{...TextFieldProps}
							/>
							<TextField
								onChangeText={text => {
									this.handleTextChange("position", text);
								}}
								value={position}
								label={"Position"}
								{...TextFieldProps}
							/>
							<TextField
								onChangeText={text => {
									this.handleTextChange("company", text);
								}}
								value={company}
								label={"Company"}
								{...TextFieldProps}
							/>

							<SaveButton>
								<SaveButtonText> {this.state.saved ? "Saved" : "Save"} </SaveButtonText>
							</SaveButton>
						</View>
					</KeyboardAwareScrollView>
				</Modal>
			</View>
		);
	}
}

// const mapStateToProps = state => state;

// export default connect(mapStateToProps, { changeName })(Settings);
