import React, { Component } from "react";
import { Modal, Dimensions, ScrollView, AsyncStorage } from "react-native";

import { ModalContainer, ModalContent } from "./styles";

import LinkSlide from "./slides/LinkSlide";
import { ProvidersSlide } from "./slides/ProvidersSlide";
import { ConfirmSlide } from "./slides/ConfirmSlide";

import axios from "axios";

import { uniq } from "lodash";

const providers = ["LinkedIn", "Twitter", "Medium", "Phone", "Email"];

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

		let lower = providers.filter((x, i) => {
			return !props.links.find(curr => {
				return x.toLowerCase() === curr.servicename.toLowerCase();
			});
		});

		console.log(lower);
		this.saveLink = this.saveLink.bind(this);
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
								this.setState({ loading: false }, () => {
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
		console.log(this.state);
		return (
			<Modal
				transparent={true}
				visible={this.props.visible}
				onRequestClose={() => {
					this.props.closeModal;
				}}
				animationType={"slide"}>
				<ModalContainer>
					<ModalContent size={this.state.sizeChange}>
						<ScrollView
							horizontal={true}
							pagingEnabled={true}
							ref={scrollview => (this.ScrollView = scrollview)}
							onContentSizeChange={width => {
								this.setState({ width });
								this.ScrollView.scrollTo({
									x: this.state.width,
									y: 0,
									animated: true,
								});
							}}>
							<ProvidersSlide
								closeModal={() => {
									this.setState({ selected: "", link: "", confirmLink: "" }, () => {
										this.props.closeModal();
									});
								}}
								providers={this.props.providers}
								select={val => {
									this.setState({ selected: val });
									this.ScrollView.scrollTo({
										x: this.state.width,
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
									confirmLink={this.state.confirmLink}
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
