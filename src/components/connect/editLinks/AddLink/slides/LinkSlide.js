import React, { Component } from "react";

import { View } from "react-native";
import { Slide, colors, ProviderLinkMainText, NextButton, NextButtonText } from "../styles";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { TextField } from "react-native-material-textfield";

export default class LinkSlide extends Component {
	constructor() {
		super();

		this.state = {
			link: "",
			baseLinks: {
				twitter: "www.twitter.com",
				linkedin: "www.linkedin.com/in",
				dribbble: "www.dribbble.com",
				medium: "www.medium.com",
			},
		};
	}

	render() {
		console.log(this.props);
		return (
			<Slide>
				<View
					style={{
						backgroundColor: colors[this.props.selected.toLowerCase()],
						height: "100%",
						justifyContent: "center",
						alignItems: "center",
						padding: "5%",
					}}
				>
					<Icon name={this.props.selected.toLowerCase()} style={{ color: "white", height: 50, fontSize: 50 }} />
					<ProviderLinkMainText>
						{this.props.selected !== "Email" || this.props.selected !== "Phone" ? `What's your ${this.props.selected}?` : null}
					</ProviderLinkMainText>
					<View
						style={{
							flexDirection: "row",
							paddingTop: "3%",
							width: "75%",
							justifyContent: "space-between",
						}}
					>
						<TextField
							label={this.state.baseLinks[this.props.selected.toLowerCase()] + "/" + this.state.link}
							baseColor="white"
							tintColor="white"
							textColor="white"
							containerStyle={{ width: "100%" }}
							value={this.state.link}
							onFocus={() => {
								this.props.sizeChange(true);
							}}
							onEndEditing={() => {
								console.log("end editing");
								this.state.link ? this.props.sizeChange(false) : null;
							}}
							onBlur={() => {
								this.props.sizeChange(false);
							}}
							onChangeText={link => this.setState({ link })}
							onSubmit={() => {
								this.props.linkSave(this.state.link);
							}}
							autoCapitalize={"none"}
							returnKeyType={"done"}
						/>
					</View>
					{this.state.link ? (
						<NextButton
							onPress={() => {
								this.props.linkSave(this.state.link);
							}}
						>
							<NextButtonText> Next </NextButtonText>
						</NextButton>
					) : null}
				</View>
			</Slide>
		);
	}
}
