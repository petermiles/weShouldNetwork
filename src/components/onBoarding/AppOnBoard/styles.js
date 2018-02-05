import styled from 'styled-components/native';

export const Slide = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color || '#92BBD9'};
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
