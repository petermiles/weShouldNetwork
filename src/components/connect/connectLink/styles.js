import styled from 'styled-components/native';

export const JobPosition = styled.Text`
	flex: 1;
	text-align: center;
	justify-content: space-around;
	font-size: 30;
	color: white;
`;

export const NetworkContainer = styled.TouchableWithoutFeedback`
	flex: 1;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	elevation: 2;
`;

export const EditableInput = styled.TextInput`
	text-align: left;
	height: 50;
	font-size: 18;
	margin-bottom: 10;
`;

export const EditableName = styled.Text`
	font-size: 35;
	color: white;
	text-align: center;
	padding-top: 3;
	padding-bottom: 3;
`;

export const ModalHeader = styled.View`
	position: relative;
	top: 0;
	left: 0;
	right: 0;
	height: 50
	color: #1da1f2
`;
