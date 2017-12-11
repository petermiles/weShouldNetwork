import React, { Component } from "react";
import { Text, Form, Input, Label, Item, Content } from "native-base";
import styled from "styled-components/native";
import { Col, Row, Grid } from "react-native-easy-grid";

import { View, Modal, TextInput, Button } from "react-native";

import { chunk } from "lodash";

import ConnectLink from "./ConnectLink";

const EditableInput = styled.TextInput`
	text-align: left;
	height: 50;
	font-size: 18;
	margin-bottom: 10;
`;

const EditableName = styled.Text`
	font-size: 35;
	color: white;
	text-align: center;
	padding-top: 3;
	padding-bottom: 3;
`;

const ModalHeader = styled.View`
	position: relative;
	top: 0;
	left: 0;
	right: 0;
	height: 50
	color: #1da1f2
`;

export default class ConnectLinkPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editable: false,
			editableName: "",
			editableLink: "",
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
					name: "Facebook",
					link: "https://www.facebook.com/"
				},
				{
					name: "Medium",
					link: "https://www.medium.com/"
				}
			]
		};
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleEdit(val) {
		console.log(val);
		this.setState({
			editable: val.editable,
			editableName: val.name,
			editableLink: val.link,
			color: val.color
		});
	}

	render() {
		return (
			<View>
				<Grid>
					{_.chunk(this.state.links, 2).map((items, i) => {
						const rowContents = items.map(item => (
							<Col size={1.5} key={item.link}>
								<ConnectLink
									editable={this.handleEdit}
									link={item.link}
									name={item.name}
								/>
							</Col>
						));

						return <Row key={items[0].link + items[0].name}>{rowContents}</Row>;
					})}
				</Grid>
				<Modal
					visible={this.state.editable}
					animationType={"fade"}
					transparent={true}
					onRequestClose={() => {
						this.setState({ editable: false });
					}}
					hardwareAccelerated={true}
				>
					<View
						style={{
							flex: 1,
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#00000080"
						}}
					>
						<View
							style={{
								width: 300,
								height: 200,
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: "white"
							}}
						>
							<View
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									right: 0,
									backgroundColor: this.state.color,
									alignItems: "center",
									justifyContent: "center"
								}}
							>
								<EditableName>{this.state.editableName}</EditableName>
							</View>
							<EditableInput
								style={{ width: 250, marginTop: 40 }}
								onChangeText={text => {
									this.setState({ editableLink: text });
								}}
								value={this.state.editableLink}
							/>

							<Button
								title="Save"
								onPress={() => {
									console.log(this.state);
								}}
								color="cornflowerblue"
							/>
						</View>
					</View>
				</Modal>
			</View>
		);
	}
}
