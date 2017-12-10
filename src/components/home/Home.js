import React, { Component } from "react";
import { Container, Content, Button, Text } from "native-base";
import styled from "styled-components/native";

const StyledText = styled.Text`
	color: palevioletred;
`;

export default class Home extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Content>
					<StyledText>Hey, you are on the home page.</StyledText>
					<Button
						onPress={() => {
							console.log(this.props);

							navigate("Profile");
						}}
					>
						<Text> Navigate To Auth Page </Text>
					</Button>
				</Content>
			</Container>
		);
	}
}
