import styled from "styled-components/native";

export const FavoriteButton = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	background-color: ${props => props.color || "#ECEFF1"};
	height: 40;
	width: 200;
	margin-bottom: 20;
`;
