import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Dimensions } from "react-native";

const colors = {
  linkedin: "#008CC9",
  dribble: "#ea4c89",
  twitter: "#1da1f2",
  medium: "black",
  phone: "#ff9800",
  email: "#f44336",
  website: "#4caf50",
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
  height: 45%;
  background-color: #FAFAFA
  elevation: 100
`;

export const ModalHeader = styled.View`
  position: absolute;;
  top: 0;
  left: 0;
  right: 0;
  height: 55
  background-color: white
  width: ${Dimensions.get("window").width * 0.95}
  elevation: 3
`;

export const ModalHeaderText = styled.Text`
  color: black;
  font-size: 24;
  font-weight: bold
  padding-top: 3%;
  padding-bottom: 3%;
  text-align: center;
`;

export const ProviderContainer = styled.TouchableOpacity`
  margin-top: 55;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap
  align-items: center;
  height: 76%
  background-color: #FAFAFA
`;

export const ProviderText = styled.Text`
  padding-top: 5;
  color: white;
  font-size: 17;
  font-weight: bold;
  text-align: center;
`;

export const Provider = styled.TouchableOpacity`
  elevation: 3
  width: 31.33333333333%;
  margin: 1%
  height: 48%;
  background-color: ${props => colors[`${props.color}`] || "white"}
  justify-content: center;
  alignItems: center
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
  background: ${props => (!props.save ? "#E53935" : "#43A047")};
  padding-top: 6;
  padding-bottom: 6;
  align-items: center;
`;

export const FooterButtonText = styled.Text`
  color: white;
  font-size: 22;
`;

export const Slide = styled.View`
  width: ${Dimensions.get("window").width * 0.95} 
  height: 100%
  justify-content: center
  flex: 1
  background-color: white
`;
