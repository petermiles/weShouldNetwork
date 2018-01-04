import React, { StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Fab(props) {
  console.log(props);
  return (
    <ActionButton
      buttonColor="#F44336"
      icon={<Icon name="more-horiz" style={{ color: "white", fontSize: 30, height: 30 }} />}
      activeOpacity={1}
      hideShadow={false}
      degrees={90}
      offsetX={20}
      offsetY={20}
    >
      <ActionButton.Item buttonColor="#42A5F5" title="Edit Links" onPress={() => console.log("notes tapped!")}>
        <Icon name="create" style={styles.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item buttonColor="#66BB6A" title="Add A Link" onPress={() => console.log("notes tapped!")}>
        <Icon name="add" style={styles.actionButtonIcon} />
      </ActionButton.Item>
    </ActionButton>
  );
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});
