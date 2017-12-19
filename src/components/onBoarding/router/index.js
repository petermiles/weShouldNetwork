import React from "react";

import { createOnBoardNavigator } from "./router";

export default class OnBoardNavigator extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const OnBoard = createOnBoardNavigator();
		return <OnBoard />;
	}
}
