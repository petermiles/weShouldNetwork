import React from "react";

import { View } from "react-native";

import { TextField } from "react-native-material-textfield";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { SearchContainer } from "./styles";

export const Search = props => {
	return (
		<SearchContainer>
			<Icon name={"magnify"} style={{ fontSize: 25, height: 25, marginTop: 23, marginRight: "1.5%" }} />
			<TextField
				label=" "
				placeholder={"Search"}
				containerStyle={{ width: "90%" }}
				onChangeText={text => {
					props.changeSearchText(text);
				}}
			/>
		</SearchContainer>
	);
};
