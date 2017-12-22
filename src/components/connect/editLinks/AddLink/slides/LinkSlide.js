import React from "react";

import { Slide, ModalHeader, ModalHeaderText } from "../styles";

import { TextField } from "react-native-material-textfield";

export default class LinkSlide extends React.Component {
	constructor() {
		super();

		this.state = {
			link: "",
		};
	}

	render() {
		return (
			<Slide>
				<ModalHeader color={this.props.selected.toLowerCase()}>
					<ModalHeaderText> {this.props.selected} </ModalHeaderText>
					<TextField
						label=""
						baseColor="black"
						tintColor="black"
						textColor="black"
						containerStyle={{ width: "100%" }}
						value={this.state.link}
						onChangeText={link => {
							this.setState({ link });
						}}
					/>
				</ModalHeader>
			</Slide>
		);
	}
}
