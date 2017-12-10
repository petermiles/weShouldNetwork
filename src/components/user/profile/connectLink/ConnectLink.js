import React, { Component } from "react";

import { Col, Row } from "react-native-easy-grid";
import styled from "styled-components/native";
import { Container, Content, Button, Text, H2 } from "native-base";

const JobPosition = styled.Text`
	text-align: center;
	font-size: 20;
	padding-top: 15;
	padding-bottom: 15;
	margin-top: 15;
	margin-bottom: 15;
`;

export default class ConnectLink extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Col>
				<JobPosition> {this.props.name} </JobPosition>
			</Col>
		);
	}
}
