import React from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";
import { FlipInEasyX } from "react-native-reanimated";

export default function timeTableBox() {

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
          <Text></hr></Text>
        </View>
          <Text>Pick up:</Text>
          <Text>Drop off:</Text>
          <Text></hr></Text>
        <View>
        <View>
          <Text>Schedule</Text>
          <Text> Mon-Thurs: 8am-9pm</Text>
          <Text> Fri: 8am-6pm</Text>
          <Text> Pickups:</Text>
          <Text> Every hour e.g. 1:00pm</Text>
          <Text> Every 25 minute e.g. 1:25pm</Text>
          <Text></hr></Text>
        </View>
        <View>
          <Text>Webiste</Text>
        </View>
          <Text></Text>
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
    height: 68,
    resizeMode: "contain",
    marginRight: 5,
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
