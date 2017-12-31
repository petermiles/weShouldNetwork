import React, { Component } from "react";
import { Modal } from "react-native";

import { ModalContainer, ModalContent } from "./styles";

import LinkSlide from "./slides/LinkSlide";
import { ProvidersSlide } from "./slides/ProvidersSlide";
import { ConfirmSlide } from "./slides/ConfirmSlide";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class AddLinkModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: "",
			width: "",
			link: "",
			sizeChange: false,
		};
	}

	render() {
		return (
			<Modal transparent={true} visible={this.props.visible} onRequestClose={this.props.closeModal} animationType={"slide"}>
				<ModalContainer>
					<ModalContent size={this.state.sizeChange}>
						<KeyboardAwareScrollView
							horizontal={true}
							pagingEnabled={true}
							innerRef={scrollview => (this.ScrollView = scrollview)}
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
							{this.state.selected ? (
								<LinkSlide
									scrollView={this.ScrollView}
									sizeChange={val => {
										this.setState({ sizeChange: val });
									}}
									linkSave={val => {
										this.setState({ link: val }, this.ScrollView.scrollToEnd());
									}}
									selected={this.state.selected}
								/>
							) : null}
							{this.state.link ? <ConfirmSlide selected={this.state.selected} /> : null}
						</KeyboardAwareScrollView>
					</ModalContent>
				</ModalContainer>
			</Modal>
		);
	}
}
