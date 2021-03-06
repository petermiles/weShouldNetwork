import React, { Component } from "react";

import ConnectLink from "./ConnectLink";

import { Animated, Easing, View } from "react-native";

import { ConnectLinkPageContainer, ConnectLinkContainer } from "./styles";

import { NoLinks } from "./NoLinks";

export default class ConnectLinkPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editable: false,
			editableName: "",
			editableLink: "",
		};
		this.spinValue = new Animated.Value(0);
		this.openModal = props.handleEdit.bind(this);
		this.handleEdit = val => {
			this.props.handleEdit(val);
		};
	}

	componentDidMount() {
		this.spin();
	}

	spin() {
		this.spinValue.setValue(0);
		Animated.timing(this.spinValue, {
			toValue: 1,
			duration: 350,
			easing: Easing.inOut(Easing.linear),
			useNativeDriver: true,
		}).start(() => this.spin());
	}
	render() {
		const spin = this.spinValue.interpolate({
			inputRange: [0, 0.33, 0.66, 1],
			outputRange: ["-.45deg", "0deg", ".45deg", "0deg"],
		});

		if (this.props.links.length) {
			return (
				<ConnectLinkPageContainer>
					{this.props.links.map((x, i) => {
						return (
							<ConnectLinkContainer key={i} index={i}>
								<View>
									<Animated.View style={this.props.editable && { transform: [{ rotate: spin }] }}>
										<ConnectLink
											handleDelete={this.props.handleDelete}
											delete={this.props.delete}
											handleEdit={this.handleEdit}
											editable={this.props.editable}
											editInfo={this.props.editInfo}
											id={x.id}
											link={x.link}
											name={x.servicename.toLowerCase()}
											ownProfile={this.props.ownProfile}
										/>
									</Animated.View>
								</View>
							</ConnectLinkContainer>
						);
					})}
				</ConnectLinkPageContainer>
			);
		} else {
			return <NoLinks addLink={this.props.addLink} />;
		}
	}
}
