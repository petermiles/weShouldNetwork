import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import IndivFavorite from './IndivFavorite';

import { Search } from './Search';
import { getUserInfo } from '../../ducks/user/actions';
import { getFavorites } from '../../ducks/favorites/actions';
import { connect } from 'react-redux';

class FavoritesPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			favorites: [],
			searchedFavorites: '',
			loading: true,
			noResults: false,
		};
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(text) {
		let favorites = [];

		this.state.favorites.map(person => {
			let obj = {
				company: person.company,
				name: person.name,
				position: person.position,
			};
			if (text) {
				for (var key in obj) {
					if (
						obj[key].slice(0, text.split('').length).toLowerCase() ===
						text.toLowerCase()
					) {
						favorites.push(obj);
					}
				}
			}
		});
		this.setState({ searchedFavorites: Array.from(new Set(favorites)) });
	}

	componentDidMount() {
		this.props.getFavorites(this.props.uid);
	}

	render() {
		let { favorites, loading } = this.props.favoritesReducer;
		let favs = this.state.searchedFavorites
			? this.state.searchedFavorites
			: favorites;
		return (
			<View>
				<Search changeSearchText={text => this.handleSearch(text)} />
				<ScrollView>
					{favs ? (
						favs.map((favorite, i) => {
							return (
								<IndivFavorite
									last={favorites.length === i + 1}
									key={i}
									loading={loading}
									name={favorite.name}
									picture={favorite.profilepic}
									position={favorite.position}
									company={favorite.company}
									profileuid={favorite.favoriteuid}
									getUserInfo={() =>
										this.props.getUserInfo(favorite.favoriteuid)
									}
									navigate={this.props.navigation.dispatch}
								/>
							);
						})
					) : (
						<IndivFavorite
							name={'Uhoh!'}
							picture={''}
							position={"You don't have any favorites."}
							company={"Scan someone's profile to add them to your favorites."}
							profileuid={''}
						/>
					)}
				</ScrollView>
			</View>
		);
	}
}

const mapStateToProps = ({ favoritesReducer, profileReducer }) => {
	return {
		favoritesReducer,
		uid: profileReducer.uid,
		transitioning: profileReducer.transitioning,
	};
};

export default connect(mapStateToProps, {
	getUserInfo,
	getFavorites,
})(FavoritesPage);
