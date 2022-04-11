import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MapPlaceholder(props) {
  return (
    <>
      <View style={styles.mapContainer}>
        <Text>Map component should go here</Text>
        <Text>{props.from.stop}</Text>
        <Text>{props.to.stop}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
});
