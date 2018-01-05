import React, { Component } from "react";
import { Modal, Dimensions, ScrollView, AsyncStorage, TouchableWithoutFeedback } from "react-native";

import { ModalContainer, ModalContent } from "./styles";

import LinkSlide from "./slides/LinkSlide";
import { ProvidersSlide } from "./slides/ProvidersSlide";
import { ConfirmSlide } from "./slides/ConfirmSlide";

import axios from "axios";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Include some type of paging enabler. Perhaps a border bottom indicator? sort of like the base navigation

export default class AddLinkModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: "",
			width: "",
			link: "",
			confirmLink: "",
			sizeChange: false,
			baseLinks: {
				website: "https://",
				twitter: "www.twitter.com/",
				linkedin: "www.linkedin.com/in/",
				dribbble: "www.dribbble.com/",
				medium: "www.medium.com/",
				email: "",
				phone: "",
			},
		};

		this.saveLink = this.saveLink.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	closeModal() {
		this.setState({ selected: "", link: "", confirmLink: "" }, () => {
			this.props.closeModal();
		});
	}

	saveLink(link, provider) {
		this.setState({ loading: true }, () => {
			AsyncStorage.getItem("USER_DATA").then(result => {
				axios
					.post("http://172.31.99.35:3001/api/user/connectLink/add", { link, provider, uid: JSON.parse(result).uid })
					.then(result => {
						AsyncStorage.setItem("USER_LINKS", JSON.stringify(result.data), () => {
							AsyncStorage.getItem("USER_LINKS").then(result => {
								console.log(JSON.parse(result));
								this.setState({ loading: false, link: "", selected: "" }, () => {
									this.props.closeModal();
								});
							});
						});
					})
					.catch(error => {});
			});
		});
	}

	render() {
		return (
			<Modal transparent={true} visible={this.props.visible} onRequestClose={this.closeModal} animationType={"slide"}>
				<ModalContainer>
					<ModalContent size={this.state.sizeChange}>
						<ScrollView
							horizontal={true}
							pagingEnabled={true}
							ref={scrollview => (this.ScrollView = scrollview)}
							onContentSizeChange={width => {
								this.setState({ width });
							}}>
							<ProvidersSlide
								closeModal={this.closeModal}
								providers={this.props.providers}
								select={val => {
									this.setState({ selected: val });
									this.ScrollView.scrollTo({
										x: this.state.width * (this.state.selected === 1 ? 1 : 2),
										y: 0,
										animated: true,
									});
								}}
							/>
							{this.state.selected ? (
								<LinkSlide
									scrollView={this.ScrollView}
									baseLinks={this.state.baseLinks}
									sizeChange={val => {
										this.setState({ sizeChange: val });
									}}
									linkSave={(link, confirmLink) => {
										this.setState({ link, confirmLink }, () => this.ScrollView.scrollToEnd());
									}}
									selected={this.state.selected}
								/>
							) : null}
							{this.state.link ? (
								<ConfirmSlide
									selected={this.state.selected}
									loading={this.state.loading}
									confirmLink={this.state.confirmLink}
									name={this.state.link}
									saveLink={() => {
										this.saveLink(this.state.link, this.state.selected);
									}}
								/>
							) : null}
						</ScrollView>
					</ModalContent>
				</ModalContainer>
			</Modal>
		);
	}
}

export const CloseButton = props => {
	return (
		<TouchableWithoutFeedback onPress={props.closeModal} hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
			<Icon
				name={"close"}
				style={{ color: "white", fontSize: 30, height: 30, position: "absolute", top: "4%", left: "4%", elevation: 5 }}
				onPress={props.closeModal}
			/>
		</TouchableWithoutFeedback>
	);
};
