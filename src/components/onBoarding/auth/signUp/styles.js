import styled from "styled-components/native";
import { Dimensions, StatusBar } from "react-native";

export const Slide = styled.View`
  width: ${Dimensions.get("window").width}
  height: ${props => Dimensions.get("window").height - StatusBar.currentHeight}
  justify-content: center
  flex: 1
  padding: 1%;
  background-color: ${props => props.color || "#92BBD9"};
`;

export const MainText = styled.Text`
  color: white;
  font-size: 22;
  font-weight: bold;
  text-align: center;
  padding-bottom: ${props => props.paddingBottom || 0}
  padding-top: ${props => props.paddingTop || 0};
`;

import { TextField } from "react-native-material-textfield";

export const SubText = styled.Text`
  color: white;
  font-size: 20;
  font-weight: bold;
  text-align: center;
  padding-top: 5%;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 8%;
  right: 0;
  left: 0;
`;

export const CreateAccount = styled.TouchableOpacity`
  margin-top: 10%
  background-color: #81C784
  padding: 5%;
  elevation: 3
`;

export const Header = styled.View`
  position: absolute;
  top: ${props => props.top || 0}
  right: 0;
  left: 0;
`;
export const SkipButton = styled.TouchableOpacity`
  position: absolute;
  top: 7%;
  right: 5%;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 7%
  left: 10%
`;

export const NextButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 7%
  right: 10%;
`;
