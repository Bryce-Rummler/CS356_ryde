import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function MapPlaceholder(props) {
  if (props.valid == true) {
    return (
      <>
        <View style={styles.mapContainer}>
          {/* <Text>{image}</Text> */}
          <Image source={props.image} style={styles.image} />
          {/* <Text>{props.from.stop}</Text>
        <Text>{props.to.stop}</Text> */}
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={styles.errorMessage}>
          <Text style={styles.errorText}>
            No route between these stops on the Ryde.
          </Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    backgroundColor: "#eeeeee",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  image: {
    flex: 1,
    width: "140%",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  errorMessage: {
    width: 275,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eeeeee",
    padding: 50,
    borderRadius: 20,
  },
  errorText: {
    textAlign: "center",
  },
});
