import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Text } from 'native-base';
import {
	TouchableWithoutFeedback,
	View,
	Animated,
	TouchableOpacity
} from 'react-native';

// Figure out why I can't align items in center plz
const JobPosition = styled.Text`
	flex: 1;
	text-align: center;
	justify-content: space-around;
	font-size: 30;
	color: white;
`;

const NetworkContainer = styled.TouchableWithoutFeedback`
	flex: 1;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	elevation: 2;
`;

export default class ConnectLink extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editable: false,
			held: false,
			pressAction: new Animated.Value(0),
			brandColors: {
				linkedin: '#008CC9',
				linkedinActive: '#006794',
				dribble: '#ea4c89',
				dribbleActive: '#E32B72',
				facebook: '#3b5998',
				facebookActive: '#14306B',
				twitter: '#1da1f2',
				twitterActive: '#036EAE',
				medium: 'black',
				mediumActive: '#464646',
				email: '#00BCD4',
				emailActive: '#00ACC1',
				website: '#4caf50',
				websiteActive: '#087f23'
			}
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
			duration: 400,
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
	}

	completePress() {
		var editInfo = {
			name: this.props.name,
			link: this.props.link,
			color: this.state.brandColors[this.props.name],
			id: this.props.id
		};
		if (this.state.pressAction._value === 1) {
			this.handleEdit(editInfo);
		}
		this.val = 0;
	}

	render() {
		return (
			<NetworkContainer onPressIn={this.pressIn} onPressOut={this.pressOut}>
				<Animated.View
					style={{
						justifyContent: 'center'
					}}>
					<JobPosition
						style={{
							backgroundColor: !this.state.held
								? this.state.brandColors[`${this.props.name}`]
								: this.state.brandColors[`${this.props.name}Active`],
							height: 120
						}}>
						{' '}
						{this.props.name
							? this.props.name.charAt(0).toUpperCase() +
								this.props.name.slice(1)
							: null}{' '}
					</JobPosition>
				</Animated.View>
			</NetworkContainer>
		);
	}
}
