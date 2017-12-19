import styled from "styled-components/native";
import { Dimensions } from "react-native";

console.log(Dimensions.get("window").width);

export const Slide = styled.View`
  width: ${Dimensions.get("window").width}
  height: ${props =>
    props.size
      ? Dimensions.get("window").height * props.size
      : Dimensions.get("window").height}
  justify-content: center
  flex: 1
  padding: 3%;
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

export const SubText = styled.Text`
  color: white;
  font-size: 20;
  font-weight: bold;
  text-align: center;
  padding-top: 5%
  padding-bottom: 3%
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 3%;
  right: 0;
  left: 0;
`;

export const Header = styled.View`
  position: absolute;
  top: 7%;
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
  bottom: 10%
  left: 10%
`;

export const NextButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 10%
  right: 10%;
  
`;
