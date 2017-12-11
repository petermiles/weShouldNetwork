import React, { Component } from "react";
import { Container, Content, Button, Text } from "native-base";
import styled from "styled-components/native";

import ConnectLinkPage from "./../user/profile/connectLink/ConnectLinkPage";
import ConnectLink from "./../user/profile/connectLink/ConnectLink";

// change to functional component
export default class Connect extends Component {
	render() {
		return (
			<Container>
				<Content>
					<ConnectLinkPage />
				</Content>
			</Container>
		);
	}
}
