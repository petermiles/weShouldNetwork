import React, { Component } from "react";
import {
	Container,
	Content,
	Text,
	Tab,
	Tabs,
	Footer,
	FooterTab,
	Button,
	Icon
} from "native-base";
import styled from "styled-components/native";
import { Image, TouchableOpacity, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

import QRCode from "react-native-qrcode";

import { chunk } from "lodash";

import ConnectLink from "./connectLink/ConnectLink";
import ConnectLinkPage from "./connectLink/ConnectLinkPage";
import ProfileDescription from "./description/Description";
import ProfileContent from "./ProfileContent";

const ProfileImage = styled.Image`
	height: 90;
	width: 90;
	border-radius: 63;
	margin-top: 15;
	margin-bottom: 10;
`;

const MainName = styled.Text`
	text-align: center;
	font-size: 30;
`;

const JobPosition = styled.Text`
	font-weight: 500;
	text-align: center;
	font-size: 17;
	padding-top: 5;
	padding-bottom: 2;
	padding-left: 10;
	padding-right: 10;
`;

const JobCompany = styled.Text`
	text-align: center;
	font-size: 16;
	padding-top: 1;
	padding-bottom: 12;
	padding-left: 10;
	padding-right: 10;
`;

const MessageButton = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	background-color: #0069c0;
	height: 40;
	width: 200;
	margin-bottom: 20;
`;

export default class Profile extends Component {
	render() {
		const { navigate } = this.props.navigation;

		return (
			<Container>
				<Content>
					<Grid>
						<Row style={{ flex: 1, justifyContent: "center" }}>
							<ProfileImage source={require("./profile.png")} />
						</Row>
						<Row style={{ flex: 1, justifyContent: "center" }}>
							<MainName> Peter Miles </MainName>
						</Row>

						<Row style={{ flex: 1, justifyContent: "center" }}>
							<JobPosition> Senior Web Component Architect </JobPosition>
						</Row>
						<Row style={{ flex: 1, justifyContent: "center" }}>
							<JobCompany> Amazon Web Services </JobCompany>
						</Row>
					</Grid>
					<View style={{ alignItems: "center" }}>
						<MessageButton
							onPress={() => {
								console.log("pressed");
							}}
						>
							<Text style={{ textAlign: "center", color: "white" }}>
								{" "}
								Message Me{" "}
							</Text>
						</MessageButton>
					</View>

					<View style={{ alignItems: "center" }}>
						<QRCode
							value="google.com"
							size={200}
							bgColor="black"
							fgColor="white"
						/>
					</View>
				</Content>
				<Footer>
					<FooterTab>
						<Button
							onPress={() => {
								navigate("Scan");
							}}
						>
							<Text> SCAN </Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}
