import React from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";
import { FlipInEasyX } from "react-native-reanimated";

export default function TimeTableBox() {

  return (
    <>
      <View style={styles.container}>
          <Image
            style={styles.busicon}
            source={require("../assets/bus_icon.png")}
          />

           {/* div here */}
          <View>
            <Text>Arriving</Text>
            <Text style={styles.bold}>5 minutes</Text>
          </View>

          <View style={styles.line}></View>
         {/* div here */}
          <Text>Pick up:</Text>
          <Text>Drop off:</Text>

          <View style={styles.line}></View>
         {/* div here */}
          <Text style={styles.underline}>Schedule</Text>
          <Text>Mon - Thurs:    8am-9pm</Text>
          <Text>Friday:              8am-6pm</Text>
          <Text style={styles.underline}>Pickups:</Text>
          <Text>Every hour e.g. 1:00pm</Text>
          <Text>Every 25th minute e.g. 1:25pm</Text>

         <View style={styles.line}></View>
        {/* div here */}
        <Text style={styles.webitem}>Website</Text>
        <Image
            style={styles.busicon}
            source={require("../assets/link_icon.png")}
          />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // top: 40,
    margin: 30,
    padding: 16,
    width: 300,
    height: 100,
    borderRadius: 10,
    backgroundColor: "white",
    // alignItems: "center",
    // alignSelf: "center",
  },
  busicon: {
    height: 50,
    resizeMode: "contain",
    marginRight: 20,
    marginLeft: 0,
    marginBottom:10,
    
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "lightgray",
    width: 340,
    margin: 3,
  },
  textLable: {
    fontSize: 12,
    color: "gray",
  },
  bold: {
    fontWeight: 'bold',
    fontSize:24
  },
  boldsmall:{
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},
  
  webitem: {
    alignItems: 'center'
  }

});
