import styled from "styled-components/native";

import { Dimensions } from "react-native";

export const brandColors = {
  linkedin: "#008CC9",
  linkedinActive: "#006794",
  dribbble: "#ea4c89",
  dribbbleActive: "#E32B72",
  twitter: "#1da1f2",
  twitterActive: "#036EAE",
  medium: "black",
  mediumActive: "#464646",
  email: "#607D8B",
  emailActive: "#455A64",
  website: "#4caf50",
  websiteActive: "#087f23",
  phone: "#66BB6A",
  phoneActive: "#43A047",
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
  height: ${props => (!props.size ? "42%" : "80%")}
  justify-content: center
  background-color: ${props => props.color || "white"}
`;

export const ModalHeader = styled.View`
  position: absolute
  top: 0
  background-color: ${props => (props.color ? props.color : "cornflowerblue")}
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
  padding-bottom: 20;
`;

export const FooterButton = styled.TouchableOpacity`
  margin-left: 5;
  margin-right: 5;
  width: 35%;
  elevation: 4;
  background: ${props => (!props.save ? "#E53935" : "#43A047")};
  padding-top: 5;
  padding-bottom: 5;
`;

export const FooterButtonText = styled.Text`
  color: white;
  font-size: 20;
  text-align: center;
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
