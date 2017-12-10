import React, { Component } from "react";
import { Container, Content, Button, Text } from "native-base";
import styled from "styled-components/native";

import ConnectLinkPage from "./../user/profile/connectLink/ConnectLinkPage";
import ConnectLink from "./../user/profile/connectLink/ConnectLink";

const StyledText = styled.Text`
	color: palevioletred;
`;

export default class Home extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Content>
					<ConnectLinkPage />
				</Content>
			</Container>
		);
	}
}
