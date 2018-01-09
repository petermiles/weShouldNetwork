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
	background-color: #FAFAFA
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

export const ProfileImageChange = styled.View`
	align-items: center;
`;

export const ProfileImage = styled.Image`
	height: 100
	width: 100
	border-radius: 65;
	margin-bottom: 5%
`;

export const TextFieldProps = {
	lineWidth: 1,
	baseColor: "#29B6F6",
	tintColor: "#29B6F6",
};

export const SaveButton = styled.TouchableOpacity`
	background-color: green
	width: 40%;
	margin-top: 5%
	margin-left: 30%
	align-items: center
	elevation: 3
	border-radius: 3
	padding-top: 5;
	padding-bottom: 5;
	
`;

export const SaveButtonText = styled.Text`
	color: white
	font-size: 24
	font-weight: bold
`;
