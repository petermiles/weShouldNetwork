import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

export const colors = {
  linkedin: '#008CC9',
  dribbble: '#ea4c89',
  twitter: '#1da1f2',
  medium: 'black',
  phone: '#66BB6A',
  email: '#f44336',
  website: '#4caf50',
};

export const ModalContainer = styled.View`
  flex: 1
  flex-direction: column;
  justify-content: center;
  align-items: center ;
  background-color: #00000080
  elevation: 6
`;

export const ModalContent = styled.View`
  width: 95%;
  height: ${props => (!props.size ? '48%' : '85%')}
  background-color: #FAFAFA
  elevation: 100
`;

export const ModalHeader = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 19%
  
  background-color: ${props => colors[props.color] || ' #42A5F5'}
  width: ${Dimensions.get('window').width * 0.95}
`;

export const ModalHeaderText = styled.Text`
  color: white;
  font-size: 24;
  font-weight: bold
  padding-top: 3%;
  padding-bottom: 3%;
  text-align: center;
  align-self: center
`;

export const Provider = styled.TouchableOpacity`
  elevation: -5;
  width: 50%
  height: 45.5%
  background-color: ${props => colors[`${props.color}`] || 'white'}
  justify-content: center;
  alignItems: center
`;

export const ProviderContainer = styled.View`
  margin-top: 24%
  flex-direction: row;
  flex-wrap: wrap
  align-items: center;
  height: 90%;
  width: 100%
  background-color: #FAFAFA
`;

export const ProviderText = styled.Text`
  padding-top: 5;
  color: white;
  font-size: 17;
  font-weight: bold;
  text-align: center;
`;

export const NextButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 10%;
  right: 10%;
`;

export const NextButtonText = styled.Text`
  color: white;
  font-size: 20;
  font-weight: bold;
`;

export const ProviderLinkMainText = styled.Text`
  font-size: 20;
  padding: 1%;
  color: white
  font-weight: bold;
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
  elevation: 2;
  background: ${props => (!props.save ? '#E53935' : '#43A047')};
  padding-top: 6;
  padding-bottom: 6;
  align-items: center;
`;

export const FooterButtonText = styled.Text`
  color: white;
  font-size: 22;
`;

export const ConfirmText = styled.Text`
  padding-top: 15
  color: white;
  font-size: ${props => (props.primary ? 24 : 18)};
  font-weight: ${props => (props.primary ? 'bold;' : 400)}
`;

export const SaveButton = styled.TouchableOpacity`
  margin-top: 10%;
  width: 50%;
  height: 16%
  justify-content: center
  align-items: center
  elevation: 2;
  background-color: ${props =>
    props.name === 'phone' ? '#66bb6a' : '#42A5F5'};
`;

export const SaveButtonText = styled.Text`
  padding-top: 5
  padding-bottom: 5
  padding-right: 5
  padding-left: 5
  color: white;
  font-size: 24;
  font-weight: bold;
  text-align: center;
`;

export const Slide = styled.View`
  width: ${Dimensions.get('window').width * 0.95} 
  height: 100%
  justify-content: center
  flex: 1
  background-color: ${props => props.color || 'white'}
`;
