import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Slide = styled.View`
  width: ${Dimensions.get("window").width}
  height: ${props =>
    props.size
      ? Dimensions.get("window").height * props.size
      : Dimensions.get("window").height}
  justify-content: center
  flex: 1
  padding: 2%;
  background-color: ${props => props.color || "#92BBD9"};
`;

export const MainText = styled.Text`
  color: white;
  font-size: 24;
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
  padding-top: 10%
  padding-bottom: 3%
  padding-left: 10%;
  padding-right: 10%;
`;

export const SocialMediaSelect = styled.TouchableOpacity`
  width: 40%;
  height: auto;
  backgroundColor: ${props => props.color}
  margin: 2%;
  padding: 2%;
  border-radius: 3;
  elevation: 4;
`;

export const SocialMediaText = styled.Text`
  color: white;
  font-size: 18;
  text-align: center;
`;

export const LinkedInButtonText = styled.Text`
  text-align: center;
  color: white;
  padding: 5%;
  width: 100%;
  font-size: 20;
  font-weight: bold;
  background-color: #0077b5;
  border-radius: 3;
`;

export const BackButton = styled.TouchableOpacity`
  bottom: 7%;
  right: 0
  left: 0
`;

export const NextButton = styled.TouchableOpacity`
  bottom: 7%
  right: 7%;
  left: 0
`;
export const Colors = {
  LinkedIn: "#008CC9",
  Dribbble: "#ea4c89",
  Facebook: "#3b5998",
  Twitter: "#1da1f2",
  Medium: "black",
  Phone: "#ff9800",
  Email: "#f44336",
  Website: "#4caf50",
};
