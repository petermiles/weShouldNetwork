import React, { Component } from "react";

import ConnectLink from "./ConnectLink";

import { Animated, Easing, View } from "react-native";

import { ConnectLinkPageContainer, ConnectLinkContainer } from "./styles";

export default class ConnectLinkPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editable: false,
			editableName: "",
			editableLink: "",
		};
		this.openModal = props.editable.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.spinValue = new Animated.Value(0);
	}

	componentDidMount() {
		this.spin();
	}
	spin() {
		this.spinValue.setValue(0);
		Animated.timing(this.spinValue, {
			toValue: 1,
			duration: 250,
			easing: Easing.spring,
			useNativeDriver: true,
		}).start(() => this.spin());
	}

	handleEdit(val) {
		this.props.editable(val);
	}

	render() {
		const spin = this.spinValue.interpolate({
			inputRange: [0, 1],
			outputRange: ["-1deg", "1deg"],
		});
		return (
			<ConnectLinkPageContainer>
				{this.props.links.map((x, i) => {
					return (
						<ConnectLinkContainer key={i} index={i}>
							{this.state.editable ? (
								<ConnectLink
									editable={this.handleEdit}
									editInfo={this.props.editInfo}
									id={x.id}
									link={x.link}
									name={x.servicename.toLowerCase()}
									ownProfile={this.props.ownProfile}
								/>
							) : (
								<View>
									<Animated.View style={{ transform: [{ rotate: spin }] }}>
										<ConnectLink
											editable={this.handleEdit}
											editInfo={this.props.editInfo}
											id={x.id}
											link={x.link}
											name={x.servicename.toLowerCase()}
											ownProfile={this.props.ownProfile}
										/>
									</Animated.View>
								</View>
							)}
						</ConnectLinkContainer>
					);
				})}
			</ConnectLinkPageContainer>
		);
	}
}
