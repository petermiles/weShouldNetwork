import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Text } from 'native-base';
import {
	TouchableWithoutFeedback,
	View,
	Animated,
	Modal,
	StyleSheet,
	TextInput
} from 'react-native';

const colors = {
	LinkedIn: '#008CC9',
	Dribble: '#ea4c89',
	Facebook: '#3b5998',
	Twitter: '#1da1f2',
	Medium: 'black',
	Phone: '#ff9800',
	Email: '#f44336',
	Website: '#4caf50',
	Add: '#C8E6C9'
};

export default class EditModalItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0,
			visible: false
		};
		this.flipCard = this.flipCard.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ links: nextProps.links });
	}

	componentWillMount() {
		this.animatedValue = new Animated.Value(0);
		this.value = 0;
		this.animatedValue.addListener(({ value }) => {
			this.value = value;
		});
		this.frontInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: ['0deg', '180deg']
		});
		this.backInterpolate = this.animatedValue.interpolate({
			inputRange: [180, 360],
			outputRange: ['0deg', '180deg']
		});
	}

	flipCard() {
		if (this.value >= 90) {
			this.setState({ visible: !this.state.visible });
			Animated.spring(this.animatedValue, {
				toValue: 0,
				friction: 8,
				tension: 10
			}).start();
		} else {
			this.setState({ visible: !this.state.visible });
			Animated.spring(this.animatedValue, {
				toValue: 180,
				friction: 8,
				tension: 10
			}).start();
		}
	}

	render() {
		console.log(this.props);
		const frontAnimatedStyle = {
			transform: [{ rotateX: this.frontInterpolate }]
		};
		const backAnimatedStyle = {
			transform: [{ rotateX: this.backInterpolate }]
		};

		return (
			<TouchableWithoutFeedback
				style={{
					flex: 0.5,
					alignItems: 'center',
					justifyContent: 'center'
				}}
				onPress={() => this.flipCard()}>
				<LinkContainer>
					<View style={{ justifyContent: 'center' }}>
						<LinkLogo color={colors[this.props.name]} />
					</View>
					{this.state.visible ? (
						<Animated.View
							style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
							<LinkContainer>
								<TextInput
									defaultValue={this.props.name}
									onTextChange={text => {
										console.log(text);
									}}
								/>
							</LinkContainer>
						</Animated.View>
					) : (
						<Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
							<LinkText> {this.props.name} </LinkText>
						</Animated.View>
					)}
				</LinkContainer>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	flipCard: {
		flexDirection: 'row',
		width: '90%',
		marginTop: '1.5%',
		marginBottom: '1.5%',
		paddingTop: '1.5%',
		paddingBottom: '1.5%',
		marginLeft: '3.5%',
		marginRight: '3.5%',
		elevation: 2,
		backfaceVisibility: 'hidden'
	},
	backCard: {
		transform: [{ rotate: '-180deg' }],
		position: 'absolute',
		top: 0
	}
});

const LinkContainer = styled.View`
	flex-direction: row;
	width: 93%;
	margin-top: 1.5%;
	margin-bottom: 1.5%;
	margin-left: 3.5%;
	paddingLeft: 3%;
	margin-right 3.5%;
	background-color: #F5F5F5;
	elevation: 2;
`;

const LinkText = styled.Text`
	font-size: 24;
	margin-left: 3%;
`;

const LinkLogo = styled.View`
	height: 30;
	width: 30;
	border-radius: 20;
	elevation: 2;
	background: ${props => props.color};
`;
