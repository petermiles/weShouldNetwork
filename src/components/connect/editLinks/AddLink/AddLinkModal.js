import React, { Component } from "react";
import { Modal, ScrollView } from "react-native";

import { ModalContainer, ModalContent } from "./styles";

import LinkSlide from "./slides/LinkSlide";
import { ProvidersSlide } from "./slides/ProvidersSlide";

export default class AddLinkModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: "",
			width: "",
		};
	}

	render() {
		return (
			<Modal transparent={true} visible={this.props.visible} onRequestClose={this.props.closeModal} animationType={"slide"}>
				<ModalContainer>
					<ModalContent>
						<ScrollView
							horizontal={true}
							pagingEnabled={true}
							ref={scrollview => (this.ScrollView = scrollview)}
							onContentSizeChange={width => {
								this.setState({ width });
							}}
						>
							<ProvidersSlide
								closeModal={this.props.closeModal}
								providers={["LinkedIn", "Twitter", "Medium", "Phone", "Email"]}
								select={val => this.setState({ selected: val })}
								scrollview={this.ScrollView}
							/>
							{this.state.selected ? <LinkSlide selected={this.state.selected} /> : null}
						</ScrollView>
					</ModalContent>
				</ModalContainer>
			</Modal>
		);
	}
}
