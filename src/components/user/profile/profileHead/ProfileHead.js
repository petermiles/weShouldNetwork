import React, { Component } from 'react';
import { Text } from 'native-base';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const ProfileImage = styled.Image`
	height: 90;
	width: 90;
	border-radius: 63;
	margin-top: 15;
	margin-bottom: 10;
`;

const ProfileImageLoading = styled.View`
	height: 90;
	width: 90;
	border-radius: 63;
	margin-top: 15;
	margin-bottom: 10;
	background-color: #eceff1;
`;

const ProfileTextLoading = styled.View`
	background-color: #ECEFF1
	height: 5;
	width: ${props => props.size || 130}
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

const MainNameLoading = styled.View`
	height: 30;
	width: 90;
	background-color: #cfd8dc;
	margin-bottom: 3
	margin-top: 3
`;

const JobPositionLoading = styled.View`
	height: 17;
	width: 130;
	padding-top: 5;
	padding-bottom: 2;
	padding-left: 10;
	padding-right: 10;
	margin-bottom: 3
	margin-top: 3
	background-color: #cfd8dc;
`;

const JobCompanyLoading = styled.Text`
	text-align: center;
	font-size: 16;
	padding-top: 1;
	padding-bottom: 12;
	padding-left: 10;
	padding-right: 10;
`;

export default (ProfileHead = props => {
	if (!props.loading) {
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
	} else {
		return (
			<View style={{ alignItems: 'center' }}>
				<Row style={{ flex: 1, justifyContent: 'center' }}>
					<ProfileImageLoading />
				</Row>
				<Row style={{ flex: 1, justifyContent: 'center' }}>
					<MainNameLoading />
				</Row>

				<Row style={{ flex: 1, justifyContent: 'center' }}>
					<JobPositionLoading />
				</Row>
				<Row style={{ flex: 1, justifyContent: 'center' }}>
					<JobPositionLoading />
				</Row>
			</View>
		);
	}
});
