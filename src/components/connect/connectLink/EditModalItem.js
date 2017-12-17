import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Text } from 'native-base';
import {
	TouchableWithoutFeedback,
	View,
	Animated,
	Modal,
	TextInput,
	ScrollView,
	TouchableOpacity
} from 'react-native';

// import Swipeable from 'react-native-swipeable';

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
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ links: nextProps.links });
	}

	render() {
		return (
			<View>
				<LinkContainer>
					<View style={{ justifyContent: 'center' }}>
						<LinkLogo color={colors[this.props.name]} />
					</View>
					<LinkText> {this.props.name} </LinkText>
				</LinkContainer>
			</View>
		);
	}
}

const LinkContainer = styled.View`
	flex-direction: row;
	width: 93%;
	margin-top: 1.7%;
	margin-bottom: 1.7%;
	margin-left: 3.5%;
	padding-top: 2.5%;
	padding-bottom: 2.5%;
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
