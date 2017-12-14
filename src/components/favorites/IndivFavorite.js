import React from 'react';

import {
	View,
	Text,
	TouchableWithoutFeedback,
	Vibration,
	Card
} from 'react-native';

import styled from 'styled-components/native';

const StyledContainer = styled.View`
	width: 95%;
	height: 110;
	background-color: #eeeeee;
	margin-top: 3;
	margin-bottom: 3;
	border-color: transparent;
	border-bottom-width: 1;
	elevation: 4;
	width: 95%;
`;

const ImagePlaceholder = styled.View`
	width: 60;
	height: 60;
	margin-left: 10;
	border-radius: 35;
	background-color: #bdbdbd;
`;

const StyledView = styled.View`
	border-color: transparent;
	border-bottom-width: 1;
	elevation: 1;
	width: 95%;
`;

export default (IndivFavorite = props => {
	if (props.loading) {
		return (
			<View style={{ alignItems: 'center' }}>
				<StyledContainer>
					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
						<ImagePlaceholder />
						<View style={{ flex: 1, flexDirection: 'column' }}>
							<Text
								style={{
									fontWeight: 'bold',
									fontSize: 18,
									marginBottom: 15,
									marginLeft: 20
								}}>
								{props.name}
							</Text>
							<Text style={{ marginBottom: 3, marginLeft: 20 }}>
								{props.position}
							</Text>
							<Text style={{ marginBottom: 3, marginLeft: 20 }}>
								{props.company}
							</Text>
						</View>
					</View>
				</StyledContainer>
			</View>
		);
	} else {
		return (
			<StyledContainer>
				<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
					<ImagePlaceholder />
					<Text style={{ marginBottom: 50, marginLeft: 20 }}>
						{' '}
						Not Loading Anymore{' '}
					</Text>
				</View>
			</StyledContainer>
		);
	}
});
