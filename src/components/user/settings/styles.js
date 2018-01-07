import styled from "styled-components/native";

export const SettingsTitle = styled.Text`
	padding-top: 3%
	font-weight: bold
	font-size: 26
	text-align: center
	color: black
`;

export const BackButton = styled.TouchableOpacity`
	elevation: 8;
	background-color: #F5F5F5
	width: 80;
	height: 80;
	position: absolute:
`;

export const closeIconStyle = {
	fontSize: 30,
	height: 30,
	position: "absolute",
	top: 15,
	left: 15,
};

export const ProfileImage = styled.Image`
	height: 100;
	width: 100;
	border-radius: 63;
	margin-top: 9%;
`;

export const ProfileImageChange = styled.View`
	flex-direction: row;
	justify-content: center;
`;

export const TextFieldsContainer = styled.View`
	margin-top: 4%;
	width: 86%
	margin-left: 7%
`;

export const TextFieldProps = {
	lineWidth: 1,
	fontSize: 20,
};

export const SaveButton = styled.TouchableOpacity`
	margin-top: 5%
	background-color: #2196F3
	width: 40%
	margin-left: 30%
	border-radius: 3
	elevation: 3
	align-items: center
	padding-top: 7;
	padding-bottom: 7
`;

export const SaveButtonText = styled.Text`
	color: white;
	font-size: 24;
`;
