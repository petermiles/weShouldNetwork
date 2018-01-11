import React from "react";

import { View } from "react-native";
import { NavigationActions } from "react-navigation";
import Placeholder from "rn-placeholder";

import {
	StyledContainer,
	MarginTopBottom,
	CenteredRow,
	ImageContainer,
	FavoritePicture,
	FavoriteName,
	FavoritePosition,
	FavoriteCompany,
} from "./styles";

// incorporate TouchableWithoutFeedback to allow editing. Perhaps just have an info icon they can click in the top right. But that runs into the issue again of having a touchableopacity on top of another touchable opacity

export default function IndivFavorite(props) {
	return (
		<StyledContainer
<<<<<<< HEAD
			activeOpacity={0.8}
=======
			underlayColor={"#E3F2FD"}
			activeOpacity={1}
			last={props.last}
>>>>>>> 547d128468ac9b94249870dd4b4876923b461ed8
			onPress={() => {
				props.navigate(
					NavigationActions.navigate({
						routeName: "ScannedProfile",
						params: { uid: props.profileuid },
					})
				);
			}}>
<<<<<<< HEAD
			<CenteredRow>
				<ImageContainer>
					<Placeholder.Media color="#E0E0E0" size={65} hasRadius onReady={!props.loading} style={{ paddingLeft: 10 }}>
						<FavoritePicture source={props.picture ? { uri: props.picture } : require("./placeholder.png")} />
					</Placeholder.Media>
				</ImageContainer>
				<View style={{ flex: 1, flexDirection: "column", marginLeft: 20 }}>
					<Placeholder.Line color="#E0E0E0" animate="fade" width="35%" textSize={25} onReady={!props.loading}>
						<FavoriteName>{props.name}</FavoriteName>
					</Placeholder.Line>
					<View style={{ marginBottom: 5, marginTop: 11 }}>
						<Placeholder.Line color="#E0E0E0" animate="fade" width="45%" textSize={12} onReady={!props.loading}>
							<FavoritePosition>{props.position}</FavoritePosition>
						</Placeholder.Line>
					</View>
					<Placeholder.Line color="#E0E0E0" animate="fade" width="55%" textSize={14} onReady={!props.loading}>
						<FavoriteCompany>{props.company}</FavoriteCompany>
					</Placeholder.Line>
				</View>
			</CenteredRow>
=======
			<View style={{ flex: 1, elevation: 5 }} hitSlop={{ top: 15, left: 200, bottom: 80, right: 0 }}>
				<CenteredRow>
					<ImageContainer>
						<Placeholder.Media color="#E0E0E0" size={65} hasRadius onReady={!props.loading} style={{ paddingLeft: 10 }}>
							<FavoritePicture source={props.picture ? { uri: props.picture } : require("./placeholder.png")} />
						</Placeholder.Media>
					</ImageContainer>
					<InfoContainer>
						<Placeholder.Line color="#E0E0E0" animate="fade" width="35%" textSize={25} onReady={!props.loading}>
							<FavoriteName>{props.name}</FavoriteName>
						</Placeholder.Line>
						<MarginTopBottom>
							<Placeholder.Line color="#E0E0E0" animate="fade" width="45%" textSize={12} onReady={!props.loading}>
								<FavoritePosition>{props.position}</FavoritePosition>
							</Placeholder.Line>
						</MarginTopBottom>
						<Placeholder.Line color="#E0E0E0" animate="fade" width="55%" textSize={14} onReady={!props.loading}>
							<FavoriteCompany>{props.company}</FavoriteCompany>
						</Placeholder.Line>
					</InfoContainer>
				</CenteredRow>
			</View>
>>>>>>> 547d128468ac9b94249870dd4b4876923b461ed8
		</StyledContainer>
	);
}

// f (!props.loading) {
//     return (
// 			<View style={{ alignItems: 'center' }}>
// 				<StyledContainer>
// 					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
// 						<ImagePlaceholder />
// 						<View style={{ flex: 1, flexDirection: 'column' }}>
// 							<Text
// 								style={{
// 									fontWeight: 'bold',
// 									fontSize: 18,
// 									marginBottom: 15,
// 									marginLeft: 20,
// 								}}>
// 								{props.name}
// 							</Text>
// 							<Text style={{ marginBottom: 3, marginLeft: 20 }}>{props.position}</Text>
// 							<Text style={{ marginBottom: 3, marginLeft: 20 }}>{props.company}</Text>
// 						</View>
// 					</View>
// 				</StyledContainer>
// 			</View>
//     );
//   }
//   return (
// 		<StyledContainer>
// 			<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
// 				<ImagePlaceholder />
// 				<Text style={{ marginBottom: 50, marginLeft: 20 }}> Not Loading Anymore </Text>
// 			</View>
// 		</StyledContainer>
//   );
