import React from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";
import { FlipInEasyX } from "react-native-reanimated";

export default function ToFromBox() {
  const [from, onChangeFrom] = React.useState("Brigham Young University");
  const [to, onChangeTo] = React.useState("Branbury");

  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.tofromicon}
            source={require("../assets/ToFromIcon.png")}
          />
        </View>
        <View>
          <Text style={styles.textLable}>From</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeFrom}
            value={from}
          ></TextInput>
          <View style={styles.line}></View>
          <Text style={styles.textLable}>To</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTo}
            value={to}
          ></TextInput>
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
