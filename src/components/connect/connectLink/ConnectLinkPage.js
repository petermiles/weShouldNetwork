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

const EditableInput = styled.TextInput`
	text-align: left;
	height: 50;
	font-size: 18;
	margin-bottom: 10;
`;

const EditableName = styled.Text`
	font-size: 35;
	color: white;
	text-align: center;
	padding-top: 3;
	padding-bottom: 3;
`;

const ModalHeader = styled.View`
	position: relative;
	top: 0;
	left: 0;
	right: 0;
	height: 50
	color: #1da1f2
`;

export default class ConnectLinkPage extends Component {
	constructor(props) {
		console.log(props);
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
		this.props.editable(val);
	}

	render() {
		let linksArr = _.chunk(this.props.links, 2);
		linksArr.unshift(linksArr.pop());
		console.log(linksArr);
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
								style={{}}
								editable={this.handleEdit}
								link={x.link}
								name={x.name}
							/>
						</View>
					);
				})}
			</View>
		);
	}
}
