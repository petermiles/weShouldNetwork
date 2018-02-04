import styled from 'styled-components/native';

export const ErrorContainer = styled.View`
	width: 100%;
	height: 20%;
	justify-content: center;
	align-items: center;
`;

export const ErrorText = styled.Text`
	font-size: 20
	color: white;
	font-weight: bold;
`;

export const CameraContainer = styled.View`
	flex: 1;
`;

export const cameraPreview = {
	flex: 1,
	justifyContent: 'flex-end',
	alignItems: 'center',
};

export const ExitCamera = styled.TouchableOpacity`
	position: absolute;
	height: 30;
	top: 20;
	left: 15;
	elevation: 3;
`;
