import styled from 'styled-components/native';

export const ProfileImage = styled.Image`
	height: 90;
	width: 90;
	border-radius: 63;
	margin-top: 15;
	margin-bottom: 10;
`;

export const ProfileImageLoading = styled.View`
	height: 90;
	width: 90;
	border-radius: 63;
	margin-top: 15;
	margin-bottom: 10;
	background-color: #eceff1;
`;

export const ProfileTextLoading = props => styled.View`
	background-color: #ECEFF1
	height: 5;
	width: ${props => props.size || 130}
`;

export const MainName = styled.Text`
	text-align: center;
	font-size: 30;
`;

export const MainNameLoading = styled.View`
	height: 30;
	width: 90;
	background-color: #cfd8dc;
	margin-bottom: 3
	margin-top: 3
`;

export const JobPosition = styled.Text`
	font-weight: 500;
	text-align: center;
	font-size: 17;
	padding-top: 5;
	padding-bottom: 2;
	padding-left: 10;
	padding-right: 10;
`;

export const JobPositionLoading = styled.View`
	height: 17;
	width: 130;
	padding-top: 5;
	padding-bottom: 2;
	padding-left: 10;
	padding-right: 10;
	margin-bottom: 3
	margin-top: 3
	
`;

export const JobCompany = styled.Text`
	text-align: center;
	font-size: 16;
	padding-top: 1;
	padding-bottom: 12;
	padding-left: 10;
	padding-right: 10;
`;

export const JobCompanyLoading = styled.View`
	width: 100;
	height: 14;
	background-color: #cfd8dc;
	margin-top: 15;
	padding-top: 1;
	padding-bottom: 12;
	padding-left: 10;
	padding-right: 10;
`;

export const FavoriteButton = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	background-color: ${props => props.color || '#42A5F5'};
	height: 40;
	width: 200;
	margin-bottom: 20;
	elevation: 2;
`;
