import styled from 'styled-components/native';

export const CenteredView = styled.View`
	align-items: center;
	elevation: 2;
`;

export const QRCodeLoading = styled.View`
	width: 200;
	height: 200;
	background-color: #cfd8dc;
`;

export const Footer = styled.TouchableOpacity`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #4caf50;
	justify-content: center;
	height: 10%;
`;
export const FooterText = styled.Text`
	color: white;
	font-size: 24;
	text-align: center;
`;

export const FavoriteButton = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	background-color: #0069c0;
	height: 40;
	width: 200;
	margin-bottom: 20;
`;
