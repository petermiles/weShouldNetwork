import React from "react";

import { View } from "react-native";
import { Slide, colors, ProviderLinkMainText, NextButton, NextButtonText } from "../styles";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { TextField } from "react-native-material-textfield";

export default class LinkSlide extends React.Component {
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
							containerStyle={{ width: "65%" }}
							value={this.state.link}
							onChangeText={link => this.setState({ link })}
							onSubmit={() => {
								console.log("test");
							}}
							autoCapitalize={"none"}
							returnKeyType={"done"}
						/>
						{this.state.link ? (
							<Icon
								name={"send"}
								style={{
									color: "white",
									height: 16,
									fontSize: 16,
								}}
							/>
						) : null}
					</View>
				</View>
			</Slide>
		);
	}
}
