import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

export const JobPosition = styled.Text`
	font-size: 30;
	color: white;
`;

export const NetworkContainer = styled.TouchableWithoutFeedback`
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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

export const ConnectLinkPageContainer = styled.View`
	padding-top: 3%;
	flex-direction: row;
	flex-wrap: wrap;
	margin-left: 3%;
	margin-right: 3%;
	width: 93%;
`;

export const ConnectLinkContainer = styled.View`
	margin: 1%;
	width: ${props => (props.index === 0 ? '98%' : '48%')};
`;

export const brandColors = {
  linkedin: '#008CC9',
  linkedinActive: '#006794',
  dribbble: '#ea4c89',
  dribbbleActive: '#E32B72',
  twitter: '#1da1f2',
  twitterActive: '#036EAE',
  medium: 'black',
  mediumActive: '#464646',
  email: '#607D8B',
  emailActive: '#455A64',
  website: '#4caf50',
  websiteActive: '#087f23',
  phone: '#66BB6A',
  phoneActive: '#43A047',
};

export const EditButton = styled.Text`
	font-size: 25;
	color: white;
	font-weight: 300;
`;

export const LinkContainer = styled.TouchableOpacity`
	flex-direction: row;
	width: 93%;
	margin-top: 1.5%;
	margin-bottom: 1.5%;
	padding-top: 2.5%;
	padding-bottom: 2.5%;
	margin-left: 3.5%;
	margin-right 3.5%;
	background-color: #F5F5F5;
	elevation: 2;
`;

export const LinkTextContainer = styled.View`
	justify-content: center;
`;

export const LinkText = styled.Text`
	font-size: 24;
	margin-left: 10%;
`;

export const LinkLogo = styled.View`
	margin-left: 5%;
	height: 30;
	width: 30;
	border-radius: 20;
	a: 2;
	background: ${props => props.color};
`;

export const colors = {
  linkedin: '#008CC9',
  dribble: '#ea4c89',
  twitter: '#1da1f2',
  medium: 'black',
  phone: '#66BB6A',
  email: '#EF5350',
  website: '#4caf50',
  add: '#C8E6C9',
};

export const ModalContainer = styled.View`
	flex: 1
	flex-direction: column;
	justify-content: center;
	align-items: center ;
	background-color: #00000080
	elevation: 4
`;

export const ModalContent = styled.View`
	width: 95%;
	height: ${props => (!props.size ? '42%' : '80%')}
	justify-content: center
	background-color: ${props => props.color || 'white'}
`;

export const ModalHeader = styled.View`
	position: absolute
	top: 0
	left: 0
	right: 0
	background-color: ${props => (props.color ? props.color : 'cornflowerblue')}
	width: 100%;
	elevation: 3
`;

export const ModalHeaderText = styled.Text`
	color: white;
	font-size: 24;
	padding-top: 3%;
	padding-bottom: 3%;
	text-align: center;
`;

export const ModalFooter = styled.View`
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	padding-bottom: 15;
`;

export const FooterButton = styled.TouchableOpacity`
	margin-left: 5;
	margin-right: 5;
	width: 35%;
	elevation: 5;
	background: ${props => (!props.save ? '#E53935' : '#43A047')};
	padding-top: 6;
	padding-bottom: 6;
	align-items: center;
`;

export const FooterButtonText = styled.Text`
	color: white;
	font-size: 22;
`;

export const EditModeButtons = styled.View`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
`;

export const EditModeClose = styled.TouchableOpacity`
	position: absolute;
	top: 4;
	right: 4
	elevation: 3;
	padding-top: 5;
	padding-bottom: 5;
	padding-left: 5;
	padding-right: 5;
`;

export const EditModeEdit = styled.TouchableOpacity`
	position: absolute;
	top: 4;
	left: 4;
	elevation: 3;
	padding-top: 5;
	padding-bottom: 5;
	padding-left: 5;
	padding-right: 5;
`;

export const NoLinkContainer = styled.View`
	width: 90%;
	margin-left: 5%;
	margin-right: 5%;
	justify-content: center;
	align-items: center
	padding-top: ${Dimensions.get('window').height * 0.05};
`;

export const NoLinkText = styled.Text`
	padding-top: ${props => (props.primary ? '7%' : '4%')}
	padding-bottom: ${props => (!props.primary ? '8%' : 0)}
	font-size: ${props => (props.primary ? 30 : 18)}}
	color: black;
	font-weight: bold
	text-align: center;
`;

export const AddLinkButton = styled.TouchableOpacity`
	margin-top: 10%
	background: #4CAF50
	border-radius: 3
	padding-top: 10;
	padding-bottom: 10;
	padding-left: 10;
	padding-right: 10;
	elevation: 5;
`;

export const AddLinkButtonText = styled.Text`
	color: white
	font-size: 30;
	font-weight: bold
`;

export const EditModalClose = styled.TouchableOpacity`
	position: absolute;
	top: 8;
	left: 8;
	elevation: 3;
	padding-top: 5;
	padding-bottom: 5;
	padding-left: 5;
	padding-right: 5;
`;
