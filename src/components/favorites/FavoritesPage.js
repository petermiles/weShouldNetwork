import React, { Component } from 'react';
import { View, AsyncStorage, Text } from 'react-native';
import IndivFavorite from './IndivFavorite';
import axios from 'axios';

export default class FavoritesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: '',
      loading: true,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('USER_DATA').then((result) => {
      console.log(JSON.parse(result).uid);
      axios.get(`http://172.31.99.35:3001/api/user/favorites/get/${JSON.parse(result).uid}`).then((result) => {
        this.setState({ favorites: result.data, loading: false });
      });
    });
  }

  render() {
    return (
			<View style={{ marginTop: '4%' }}>
				{this.state.favorites.length ? (
					this.state.favorites.map((favorite, i) => (
						<IndivFavorite
							key={i}
							loading={this.state.loading}
							name={favorite.name}
							picture={favorite.profilepic}
							position={favorite.position}
							company={favorite.company}
							profileuid={favorite.favoriteuid}
						/>
					))
				) : (
					<Text> Loading </Text>
				)}
			</View>
    );
  }
}
