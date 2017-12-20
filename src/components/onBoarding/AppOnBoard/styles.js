import styled from "styled-components/native";

export const Slide = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color || "#92BBD9"};
`;

export const Centered = styled.View`
  align-items: center;
`;

export const MainText = styled.Text`
  color: white;
  font-size: 30;
  font-weight: bold;
  padding: 10%;
  text-align: center;
`;

export const SubText = styled.Text`
  color: white;
  font-size: 20;
  font-weight: bold;
  text-align: center;
  padding-top: 3%
  padding-bottom: 3%
  padding-left: 10%;
  padding-right: 10%;
`;

export const SignUpButton = styled.TouchableOpacity`
  elevation: 3
  background-color: ${props => props.color || "#81D4FA"}
  width: 40%;
  align-items: center;
  padding: 2%;
  border-radius: 3
  margin: 1%;
`;

export const SignUpButtonText = styled.Text`
  font-size: ${props => props.size}
  color: white;
  font-weight: bold;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 10%;
  left: 0;
  right: 0;
  flex-direction: row
  justify-content: center;
  align-items: center;
`;

export const FooterButton = styled.TouchableOpacity`
  elevation: 3
  background-color: ${props => props.color}
  width: 40%;
  align-items: center;
  padding: 2%;
  border-radius: 3
  margin: 1%;
`;