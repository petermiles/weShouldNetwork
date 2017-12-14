import React from 'react';

import {
	View,
	TouchableWithoutFeedback,
	Text,
	Image,
	Vibration
} from 'react-native';

import styled from 'styled-components/native';

const LinkContainer = styled.View`
	flex-direction: row;
	width: 100%;
	margin-bottom: 3%;
`;

const LinkLogo = styled.View`
	height: 40;
	width: 40;
	background: ${props => props.color};
`;

let colors = {
	LinkedIn: '#008CC9',
	Dribble: '#ea4c89',
	Facebook: '#3b5998',
	Twitter: '#1da1f2',
	Medium: 'black',
	Phone: '#ff9800',
	Email: '#f44336',
	Website: '#4caf50'
};

export const EditModalItem = props => {
	console.log(props);
	return (
		<View>
			<LinkLogo color={colors[`${props.name}`]} />
			<Text> {props.name} </Text>
		</View>
	);
};
