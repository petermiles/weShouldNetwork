import React, { Component } from "react";
import styled from "styled-components/native";
import { Text } from "native-base";
import {
	TouchableWithoutFeedback,
	View,
	Animated,
	StyleSheet,
	TouchableOpacity
} from "react-native";
import { Col } from "react-native-easy-grid";

// Figure out why I can't align items in center plz
const JobPosition = styled.Text`
	flex: 1;
	text-align: center;
	font-size: 30;
	color: white;
	height: 150;
`;

const NetworkContainer = styled.TouchableWithoutFeedback`
	flex: 1;
	align-items: center;
	flex-direction: row;
`;

var COLORS = ["rgb(255,255,255)", "rgb(111,235,62)"];

export default class ConnectLink extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editable: false,
			clicked: false,
			pressAction: new Animated.Value(0),
			brandColors: {
				LinkedIn: "#008CC9",
				LinkedInActive: "#006794",
				Dribble: "#ea4c89",
				DribbleActive: "#E32B72",
				Facebook: "#3b5998",
				FacebookActive: "#14306B",
				Twitter: "#1da1f2",
				TwitterActive: "#036EAE",
				Medium: "black",
				MediumActive: "#464646"
			},
			buttonWidth: 0,
			buttonHeight: 0
		};
		this.pressIn = this.pressIn.bind(this);
		this.pressOut = this.pressOut.bind(this);
		this.completePress = this.completePress.bind(this);
		this.handleEdit = props.editable.bind(this);
	}

	componentWillMount() {
		this.val = 0;
		this.state.pressAction.addListener(v => (this.val = v.val));
	}

	pressIn() {
		Animated.timing(this.state.pressAction, {
			duration: 500,
			toValue: 1
		}).start(this.completePress);
		this.setState({ held: true });
	}

	pressOut() {
		Animated.timing(this.state.pressAction, {
			duration: 0,
			toValue: 0
		}).start();
		this.setState({ held: false });
		this.state.pressAction._value = 0;
	}

	completePress() {
		var editInfo = {
			name: this.props.name,
			link: this.props.link,
			color: this.state.brandColors[this.props.name]
		};
		if (this.state.pressAction._value === 1) {
			this.handleEdit(Object.assign({}, editInfo, { editable: true }));
		}

		this.val = 0;
	}

	render() {
		return (
			<NetworkContainer onPressIn={this.pressIn} onPressOut={this.pressOut}>
				<View>
					<Animated.View>
						<JobPosition
							style={{
								backgroundColor: !this.state.held
									? this.state.brandColors[`${this.props.name}`]
									: this.state.brandColors[`${this.props.name}Active`]
							}}
						>
							{" "}
							{this.props.name}{" "}
						</JobPosition>
					</Animated.View>
				</View>
			</NetworkContainer>
		);
	}
}
