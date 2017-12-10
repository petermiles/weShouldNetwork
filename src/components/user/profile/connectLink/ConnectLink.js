import React, { Component } from "react";
import styled from "styled-components/native";
import { Text } from "native-base";
import { TouchableWithoutFeedback, View, Animated } from "react-native";
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

export default class ConnectLink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edited: false,
			clicked: false,
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
			}
		};
		this.testFunction = this.testFunction.bind(this);
		this.pressIn = this.pressIn.bind(this);
		this.pressOut = this.pressOut.bind(this);

		this.pressAction = new Animated.Value(0).bind(this);
	}

	testFunction() {
		console.log("test");
	}

	componentDidMount() {
		this.val = 0;
		this.setState({
			pressAction: this.pressAction.addListener(v => (this.val = v.val))
		});
		console.log(this.state.pressAction);
	}

	pressIn() {
		Animated.timing(this.pressAction, {
			duration: ACTION_TIMER,
			toValue: 1
		}).start(this.animationActionComplete);
	}

	pressOut() {
		Animated.timing(this.state.pressAction, {
			duration: this._value * ACTION_TIMER,
			toValue: 0
		}).start();
	}

	render() {
		return (
			<View>
				<NetworkContainer onPress={this.testFunction}>
					<View>
						<Animated.View>
							<JobPosition
								style={{
									backgroundColor: `${
										this.state.brandColors[this.props.name]
									}`
								}}
							>
								{" "}
								{this.props.name}{" "}
							</JobPosition>
						</Animated.View>
					</View>
				</NetworkContainer>
			</View>
		);
	}
}
