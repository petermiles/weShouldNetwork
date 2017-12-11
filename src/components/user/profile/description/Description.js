import React, { Component } from "react";
import { Text } from "native-base";
import { View } from "react-native";
import styled from "styled-components/native";
import { Col, Row, Grid } from "react-native-easy-grid";

const Description = styled.Text`
	font-size: 20;
	text-align: center;
	margin-top: 25;
	margin-right: 5;
	margin-left: 5;
	padding-left: 5;
	padding-right: 5;
`;

export default class ProfileDescription extends Component {
	render() {
		return (
			<View style={{ alignItems: "center" }}>
				<Description>
					{" "}
					I've always thought of the internet as the greatest
					creative-medium that's ever existed. I aspire to learn as
					much as I can in order to make the beautiful, performant web
					applications of tomorrow.{" "}
				</Description>
			</View>
		);
	}
}
