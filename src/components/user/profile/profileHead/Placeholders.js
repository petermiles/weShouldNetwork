import React from 'react';

import { View, Image } from 'react-native';

import Placeholder from 'rn-placeholder';

import { ProfileImage } from './styles';

export const PicturePlaceholder = props => (
	<View>
		<Placeholder.ImageContent
			size={60}
			animate="fade"
			lineNumber={4}
			lineSpacing={5}
			lastLineWidth="30%"
			onReady={props.loading}
		/>
		<ProfileImage source={props.image} />
	</View>
);
