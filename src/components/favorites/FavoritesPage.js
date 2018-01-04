import React, { Component } from "react";
import { View, AsyncStorage, Text } from "react-native";
import IndivFavorite from "./IndivFavorite";
import axios from "axios";

import { Search } from "./Search";

export default class FavoritesPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			favorites: [],
			searchedFavorites: [],
			loading: true,
			noResults: false,
		};
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(text) {
		let favorites = [];

		this.state.favorites.map((person, i) => {
			let obj = {
				company: person.company,
				name: person.name,
				position: person.position,
			};
			if (text) {
				for (var key in obj) {
					if (obj[key].slice(0, text.split("").length).toLowerCase() === text.toLowerCase()) {
						favorites.push(obj);
					}
				}
			}
		});
		this.setState({ searchedFavorites: Array.from(new Set(favorites)) });
	}

	componentDidMount() {
		// AsyncStorage.getItem("USER_DATA").then(result => {
		// 	axios.get(`http://172.31.99.35:3001/api/user/favorites/get/${JSON.parse(result).uid}`).then(result => {
		// 		this.setState({ favorites: result.data, loading: false });
		// 	});
		// });
	}

	render() {
		let favs = this.state.searchedFavorites.length ? this.state.searchedFavorites : this.state.favorites;
		return (
			<View>
				<Search changeSearchText={text => this.handleSearch(text)} />
				{favs.length ? (
					favs.map((favorite, i) => (
						<IndivFavorite
							key={i}
							loading={this.state.loading}
							name={favorite.name}
							picture={favorite.profilepic}
							position={favorite.position}
							company={favorite.company}
							profileuid={favorite.favoriteuid}
							navigate={this.props.navigation.dispatch}
						/>
					))
				) : (
					<IndivFavorite
						name={"Uhoh!"}
						picture={""}
						position={"You don't have any favorites."}
						company={"Scan someone's profile to add them to your favorites."}
						profileuid={""}
					/>
				)}
			</View>
		);
	}
}
