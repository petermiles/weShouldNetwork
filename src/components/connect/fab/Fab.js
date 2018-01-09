import React from "react";

import { StyleSheet } from "react-native";

import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/MaterialIcons";

export const Fab = props => {
	{
		/* Animation layout: 
when the confirm edit button enters, have an animation that reduces the size of it over time and rotates at the same time. gets smaller and rotates down. then have the normal fab button do the opposite at the same time. maybe have like a scale [100, 90, 80, 70, 50, 40, 0] so it doesn't have to completely leave. when it finishes the animation, trigger the other function thatt makes the other bigger. maybe just have the icon change with the animation and change the background color of the actual fab button? idk
 */
	}
	if (props.linksLength && !props.editable) {
		return (
			<ActionButton
				spacing={15}
				buttonColor={props.editable ? "#42A5F5" : "#F44336"}
				icon={<Icon name={props.editable ? "check" : "more-horiz"} style={{ color: "white", fontSize: 30, height: 30 }} />}
				activeOpacity={1}
				hideShadow={false}
				degrees={90}
				offsetX={20}
				offsetY={20}
				fixNativeFeedbackRadius={true}
				onPress={() => {
					props.editable ? props.openItems() : null;
				}}>
				<ActionButton.Item buttonColor="#42A5F5" title="Edit Links" onPress={props.editLinks}>
					<Icon name="create" style={styles.actionButtonIcon} />
				</ActionButton.Item>
				<ActionButton.Item buttonColor="#66BB6A" title="Add A Link" onPress={props.addLink}>
					<Icon name="add" style={styles.actionButtonIcon} />
				</ActionButton.Item>
			</ActionButton>
		);
	} else if (props.editable) {
		return (
			<ActionButton
				spacing={15}
				buttonColor={"#42A5F5"}
				icon={<Icon name={"check"} style={{ color: "white", fontSize: 30, height: 30 }} />}
				degrees={90}
				offsetX={20}
				offsetY={20}
				fixNativeFeedbackRadius={true}
				onPress={props.openItems}
			/>
		);
	} else {
		return null;
	}
};

const styles = StyleSheet.create({
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: "white",
	},
});
