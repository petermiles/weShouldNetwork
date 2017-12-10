import React, { Component } from "react";
import { Text } from "native-base";
import styled from "styled-components/native";
import { Col, Row, Grid } from "react-native-easy-grid";

import { chunk } from "lodash";

import ConnectLink from "./ConnectLink";

const JobPosition = styled.Text`
	text-align: center;
	font-size: 20;
	padding-top: 15;
	padding-bottom: 15;
	margin-top: 15;
	margin-bottom: 15;
`;

export default class ConnectLinkPage extends Component {
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
		return (
			<Grid>
				{_.chunk(this.state.links, 2).map((items, i) => {
					const rowContents = items.map(item => (
						<Col key={item.link}>
							<ConnectLink link={item.link} name={item.name} />
						</Col>
					));

					return <Row key={items[0].link + items[0].name}>{rowContents}</Row>;
				})}
			</Grid>
		);
	}
}
