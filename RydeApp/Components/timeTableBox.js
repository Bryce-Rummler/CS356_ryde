import React from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";
import { FlipInEasyX } from "react-native-reanimated";

export default function TimeTableBox() {

  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.tofromicon}
            source={require("../assets/bus_icon.png")}
          />
          <Text>Arriving</Text>
          <Text>5 minutes</Text>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 3,
              width: 300,
              marginBottom: 10,
            }}
          />
          <Text>Pick up:</Text>
          <Text>Drop off:</Text>

          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 3,
              width: 300,
              marginBottom: 10,
            }}
          />
          <Text>Schedule</Text>
          <Text>Mon - Thurs:    8am-9pm</Text>
          <Text>Friday:              8am-6pm</Text>
          <Text>Pickups:</Text>
          <Text>Every hour e.g. 1:00pm</Text>
          <Text>Every 25th minute e.g. 1:25pm</Text>

          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 3,
              width: 300,
              marginBottom: 10,
            }}
          />

        <Text>Website</Text>
        <Image
            style={styles.tofromicon}
            source={require("../assets/link_icon.png")}
          />


        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 40,
    margin: 30,
    padding: 16,
    width: 300,
    height: 100,
    borderRadius: 10,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  tofromicon: {
    height: 50,
    resizeMode: "contain",
    marginRight: 20,
    marginLeft: 0,
  },
  line: {
    borderBottomWidth: 2,
    borderColor: "lightgray",
    width: 215,
    margin: 3,
  },
  textLable: {
    fontSize: 12,
    color: "gray",
  },
});
