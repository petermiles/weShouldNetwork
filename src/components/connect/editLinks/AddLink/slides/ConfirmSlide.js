import React from "react";

import { Slide, ModalHeader, ModalHeaderText } from "../styles";

export default function ConfirmSlide(props) {
	return (
		<Slide>
			<ModalHeader color={props.selected.toLowerCase()}>
				<ModalHeaderText> {props.selected} </ModalHeaderText>
			</ModalHeader>
		</Slide>
	);
}
