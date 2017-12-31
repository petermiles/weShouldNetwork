import React, { Component } from "react";

import ConnectLink from "./ConnectLink";

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
	}

	handleEdit(val) {
		this.props.editable(val);
	}

	render() {
		return (
			<ConnectLinkPageContainer>
				{this.props.links.map((x, i) => {
					return (
						<ConnectLinkContainer key={i} index={i}>
							<ConnectLink
								editable={this.handleEdit}
								editInfo={this.props.editInfo}
								id={x.id}
								link={x.link}
								name={x.servicename.toLowerCase()}
								ownProfile={this.props.ownProfile}
							/>
						</ConnectLinkContainer>
					);
				})}
			</ConnectLinkPageContainer>
		);
	}
}
