import styled from "styled-components/native";

export const StyledContainer = styled.TouchableHighlight`
	width: 95%;
	height: 120;
	background-color: #eeeeee;
	margin-top: 5;
	margin-bottom: ${props => (props.last ? 85 : 5)}
	margin-left: 2.5%
	
	elevation: 4;
`;

export const IndivFavContainer = styled.View`
	align-items: center;
`;

export const CenteredRow = styled.View`
	flex: 1;
	flex-direction: row
	align-items: center;
	padding-right: 5
	padding-bottom: 5
	padding-right: 15
`;

export const ImageContainer = styled.View`
	margin-left: 10;
`;

export const FavoritePicture = styled.Image`
	width: 65;
	height: 65;
	border-radius: 100;
`;

export const FavoriteName = styled.Text`
	font-weight: bold;
	font-size: 18;
`;

export const FavoritePosition = styled.Text`

	font-size: 14
	font-weight: 500
`;

export const FavoriteCompany = styled.Text`
	font-size: 14;
`;

export const SearchContainer = styled.View`
	margin-left: 2.5%
	width: 95%
	align-items: center
	flex-direction: row
`;

export const InfoContainer = styled.View`
	flex: 1;
	flex-direction: column;
	margin-left: 20;
	padding-right: 5;
`;

export const MarginTopBottom = styled.View`
	margin-top: 5
	margin-bottom: 5
`;

export const InfoButton = styled.View`
	position: absolute;
	top: 10;
	left: 10;
	elevation: 10;
`;
