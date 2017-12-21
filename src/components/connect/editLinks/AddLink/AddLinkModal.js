import React, { Component } from "react";

import { View, Text, Modal } from "react-native";

export default class AddLinkModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Modal
				visible={this.props.visible}
				onRequestClose={() => {
					this.setState({ addLink: false });
				}}
				animationType={"slide"}
			>
				<Text> Test </Text>
			</Modal>
		);
	}
}
