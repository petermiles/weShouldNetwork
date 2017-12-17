import React, { Component } from 'react';
import { Text, Button } from 'native-base';
import styled from 'styled-components/native';
import { View } from 'react-native';
import IndivFavorite from './IndivFavorite';

const FavoriteButton = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	background-color: #0069c0;
	height: 40;
	width: 200;
`;

export default class FavoritesPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			favorites: [
				{
					name: 'Riley Adair',
					position: 'Junior Web Developer',
					company: 'The Richards Group'
				},
				{
					name: 'Benjamin Kincaid',
					position: 'Server',
					company: 'Stovepipe Wells'
				},
				{
					name: 'Mark Erickson',
					position: 'Senior Architect of Design',
					company: 'Big Name Company Incorporated'
				},
				{
					name: 'Urna Ramumu',
					position: 'Human Resources Consultant',
					company: 'HR Inc.'
				},
				{
					name: 'Les Paul',
					position: 'Musician',
					company: 'Self'
				}
			],
			loading: true
		};
	}

	render() {
		return (
			<View style={{ marginTop: '4%' }}>
				{this.state.favorites.map((item, i) => {
					return (
						<IndivFavorite
							key={i}
							loading={this.state.loading}
							name={item.name}
							position={item.position}
							company={item.company}
						/>
					);
				})}
			</View>
		);
	}
}
