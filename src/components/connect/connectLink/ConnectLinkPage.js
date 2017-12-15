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
		super(props);
		this.state = {
			editable: false,
			editableName: '',
			editableLink: '',
			containerHeight: ''
		};
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleEdit(val) {
		this.setState({
			editable: val.editable,
			editableName: val.name,
			editableLink: val.link,
			color: val.color
		});
	}

	render() {
		return (
			<View>
				{_.chunk(this.props.links, 2).map((items, i) => {
					const rowContents = items.map(item => (
						<View
							key={item.name}
							style={{
								width: `${items.length % 2 === 0 ? '50%' : '100%'}`
							}}>
							<ConnectLink
								length={
									this.props.links.length % 2 === 0
										? this.props.links.length
										: this.props.links.length + 1
								}
								editable={this.handleEdit}
								link={item.link}
								name={item.name}
							/>
						</View>
					));

					return (
						<View
							style={{
								flexDirection: 'row',
								flex: 1,
								marginTop: '2%'
							}}
							key={items[0].link + items[0].name}>
							{rowContents}
						</View>
					);
				})}
			</View>
		);
	}
}
