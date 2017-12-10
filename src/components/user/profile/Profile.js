import React, { Component } from "react";
import { Container, Content, Button, Text, H2, Tab, Tabs } from "native-base";
import styled from "styled-components/native";
import { Image } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

import { chunk } from "lodash";

import ConnectLink from "./connectLink/ConnectLink";
import ConnectLinkPage from "./connectLink/ConnectLinkPage";
import ProfileDescription from "./description/Description";
import ProfileContent from "./ProfileContent";

const ProfileImage = styled.Image`
	height: 110;
	width: 110;
	border-radius: 63;
	margin-top: 10;
	margin-bottom: 10;
`;

const MainName = styled.Text`
	text-align: center;
	font-size: 30;
`;

const JobPosition = styled.Text`
	text-align: center;
	font-size: 20;
	padding-top: 15;
	padding-bottom: 15;
	margin-top: 15;
	margin-bottom: 15;
`;

export default class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			links: [
				{
					name: "LinkedIn",
					link: "https://www.linkedin.com/in/peter-miles"
				},
				{
					name: "Twitter",
					link: "https://www.twitter.com/petermilesdev"
				},
				{
					name: "Dribble",
					link: "https://www.google.com"
				},
				{
					name: "Gmail",
					link: "https://www.twitter.com/petermilesdev"
				},
				{
					name: "Facebook",
					link: "https://www.twitter.com/petermilesdev"
				}
			]
		};
	}

	render() {
		console.log(this.props);
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Content>
					<Grid>
						<Row>
							<Col
								size={1}
								style={{
									alignItems: "center"
								}}
							>
								<ProfileImage source={require("./profile.png")} />
							</Col>
							<Col size={1.7} style={{ alignItems: "center" }}>
								<Row style={{ alignItems: "center" }}>
									<MainName> Peter Miles </MainName>
								</Row>
								<Row>
									<JobPosition> Student Mentor at DevMountain </JobPosition>
								</Row>
							</Col>
						</Row>
					</Grid>
				</Content>
				<Tabs initialPage={2} tabBarPosition={"overlayBottom"}>
					<Tab style={{ backgroundColor: "#fafafa" }} heading="Messaging">
						<Text> This where messaging will go </Text>
					</Tab>
					<Tab heading="Connect">
						<ConnectLinkPage />
					</Tab>
					<Tab heading="Description">
						<ProfileDescription style={{ flex: 1 }} />
					</Tab>
				</Tabs>
			</Container>
		);
	}
}
