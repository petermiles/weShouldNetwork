import styled from "styled-components/native";

export const StyledContainer = styled.TouchableOpacity`
	width: 95%;
	height: 110;
	background-color: #eeeeee;
	margin-top: 5;
	margin-bottom: 5;
	elevation: 4;
`;

export const IndivFavContainer = styled.View`
	align-items: center;
`;

export const CenteredRow = styled.View`
	flex: 1;
	flex-direction: row
	align-items: center;
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
	width: 92%
	align-items: center
	flex-direction: row
`;
