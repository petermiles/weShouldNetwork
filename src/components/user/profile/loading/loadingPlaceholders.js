import React from 'react';

import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';

export const ProfilePicLoading = () => {
	<SvgAnimatedLinearGradient height={300}>
		<Svg.Circle cx="30" cy="30" r="30" />
		<Svg.Rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
		<Svg.Rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
		<Svg.Rect x="0" y="70" rx="5" ry="5" width="400" height="200" />
	</SvgAnimatedLinearGradient>;
};
