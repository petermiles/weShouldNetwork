import React from 'react';

import { View } from 'react-native';

import { NavigationActions } from 'react-navigation';

import Placeholder from 'rn-placeholder';

import {
	StyledContainer,
	CenteredRow,
	ImageContainer,
	FavoritePicture,
	FavoriteName,
	FavoritePosition,
	FavoriteCompany,
} from './styles';

// incorporate TouchableWithoutFeedback to allow editing. Perhaps just have an info icon they can click in the top right. But that runs into the issue again of having a touchableopacity on top of another touchable opacity

export default function IndivFavorite(props) {
	return (
		<StyledContainer
			activeOpacity={0.8}
			onPress={() => {
				if (props.navigate) {
					props.navigate(
						NavigationActions.navigate({
							routeName: 'ScannedProfile',
							params: { uid: props.profileuid },
						})
					);
				}
			}}>
			<CenteredRow>
				<ImageContainer>
					<Placeholder.Media
						color="#E0E0E0"
						size={65}
						hasRadius
						onReady={!props.loading}
						style={{ paddingLeft: 10 }}>
						<FavoritePicture
							source={
								props.picture
									? { uri: props.picture }
									: require('./placeholder.png')
							}
						/>
					</Placeholder.Media>
				</ImageContainer>
				<View style={{ flex: 1, flexDirection: 'column', marginLeft: 20 }}>
					<Placeholder.Line
						color="#E0E0E0"
						animate="fade"
						width="35%"
						textSize={25}
						onReady={!props.loading}>
						<FavoriteName>{props.name}</FavoriteName>
					</Placeholder.Line>
					<View style={{ marginBottom: 5, marginTop: 11 }}>
						<Placeholder.Line
							color="#E0E0E0"
							animate="fade"
							width="45%"
							textSize={12}
							onReady={!props.loading}>
							<FavoritePosition>{props.position}</FavoritePosition>
						</Placeholder.Line>
					</View>
					<Placeholder.Line
						color="#E0E0E0"
						animate="fade"
						width="55%"
						textSize={14}
						onReady={!props.loading}>
						<FavoriteCompany>{props.company}</FavoriteCompany>
					</Placeholder.Line>
				</View>
			</CenteredRow>
		</StyledContainer>
	);
}
