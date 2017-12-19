import React, { Component } from 'react';
import {
	Text,
	Form,
	Item,
	Content,
	Footer,
	FooterTab,
	Button
} from 'native-base';
import styled from 'styled-components/native';

import { View, Modal, TextInput, Vibration, Dimensions } from 'react-native';

import { chunk } from 'lodash';

import ConnectLink from './ConnectLink';

import { EditableInput, EditableName, ModalHeader } from './styles';

export default class ConnectLinkPage extends Component {
	constructor(props) {
		// console.log(props, 'from connectLinkPage');
		super(props);
		this.state = {
			editable: false,
			editableName: '',
			editableLink: '',
			containerHeight: ''
		};
		this.openModal = props.editable.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleEdit(val) {
		// console.log(val, 'from connectLinkPage');
		this.props.editable(val);
	}

	render() {
		return (
			<View
				style={{
					paddingTop: '3%',
					flexDirection: 'row',
					flexWrap: 'wrap',
					marginLeft: '3%',
					marginRight: '3%',
					width: '93%'
				}}>
				{this.props.links.map((x, i) => {
					return (
						<View
							key={i}
							style={{
								width: i === 0 ? '98%' : '48%',
								margin: '1%'
							}}>
							<ConnectLink
								editable={this.handleEdit}
								editInfo={this.props.editInfo}
								id={x.id}
								link={x.link}
								name={x.servicename}
							/>
						</View>
					);
				})}
			</View>
		);
	}
}
