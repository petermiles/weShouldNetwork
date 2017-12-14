import React, { Component } from 'react';
import { Text } from 'native-base';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const Description = styled.Text`
	font-size: 20;
	text-align: center;
	margin-top: 25;
	margin-right: 5;
	margin-left: 5;
	padding-left: 5;
	padding-right: 5;
`;

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

export default (ProfileHead = props => {
	return (
		<View style={{ alignItems: 'center' }}>
			<Row style={{ flex: 1, justifyContent: 'center' }}>
				<ProfileImage source={{ uri: props.picURL }} />
			</Row>
			<Row style={{ flex: 1, justifyContent: 'center' }}>
				<MainName> {props.name} </MainName>
			</Row>

			<Row style={{ flex: 1, justifyContent: 'center' }}>
				<JobPosition> {props.position} </JobPosition>
			</Row>
			<Row style={{ flex: 1, justifyContent: 'center' }}>
				<JobCompany> {props.company} </JobCompany>
			</Row>
		</View>
	);
});
