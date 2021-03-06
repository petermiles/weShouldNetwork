import React, { Component } from 'react';

import { Animated, Dimensions, Linking, Text, View } from 'react-native';

import {
	JobPosition,
	NetworkContainer,
	EditModeClose,
	EditModeEdit,
	EditModeButtons,
	brandColors,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Clean up this page, Peter.

export default class ConnectLink extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editable: false,
			held: false,
			pressAction: new Animated.Value(0),
		};
		this.pressIn = this.pressIn.bind(this);
		this.pressOut = this.pressOut.bind(this);
		this.completePress = this.completePress.bind(this);
		this.handleEdit = props.handleEdit.bind(this);

		this.editInfo = {
			name: props.name,
			link: props.link,
			id: props.id,
		};
	}

	componentWillMount() {
		this.val = 0;
		this.state.pressAction.addListener(v => (this.val = v.val));
	}

	pressIn() {
		Animated.timing(this.state.pressAction, {
			duration: 400,
			toValue: 1,
		}).start(this.completePress);
		this.setState({ held: true });
	}

	pressOut() {
		Animated.timing(this.state.pressAction, {
			duration: 0,
			toValue: 0,
		}).start();
		this.setState({ held: false });
	}

	completePress() {
		if (this.props.editable && this.state.pressAction._value === 1) {
			return null;
		} else {
			if (this.state.pressAction._value === 1) {
				if (this.props.name.toLowerCase() === 'phone') {
					Linking.openURL('tel:' + this.props.link);
				} else if (this.props.name.toLowerCase() === 'email') {
					Linking.openURL('mailto:' + this.props.link);
				} else {
					Linking.openURL(this.props.link);
				}
			}
		}
	}

	render() {
		return (
			<NetworkContainer onPressIn={this.pressIn} onPressOut={this.pressOut}>
				<View>
					<Animated.View
						style={{
							flex: 1,
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 3,
							backgroundColor: !this.state.held
								? brandColors[`${this.props.name.toLowerCase()}`]
								: brandColors[`${this.props.name.toLowerCase()}Active`],
							height: Dimensions.get('window').height * 0.9 / 4.5,
							elevation: 3,
						}}>
						{this.props.editable && (
							<EditModeButtons>
								<EditModeEdit
									activeOpacity={0.8}
									onPress={() => {
										this.handleEdit(this.editInfo);
									}}>
									<Icon
										name="pencil"
										style={{ color: 'white', fontSize: 20, height: 20 }}
									/>
								</EditModeEdit>
								<EditModeClose
									activeOpacity={0.8}
									onPress={() => {
										this.props.handleDelete(this.editInfo);
									}}>
									<Icon
										name="close"
										style={{
											color: '#F44336',
											fontSize: 20,
											height: 20,
											fontWeight: 800,
										}}
									/>
								</EditModeClose>
							</EditModeButtons>
						)}
						<Icon
							name={this.props.name.toLowerCase()}
							style={{
								color: 'white',
								fontSize: 50,
								height: 50,
								textAlign: 'center',
							}}
						/>
					</Animated.View>
				</View>
			</NetworkContainer>
		);
	}
}
