import React from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";
import { FlipInEasyX } from "react-native-reanimated";

export default function TimeTableBox() {

  return (
    <>
      <View style={styles.container}>
          <View style={styles.arriving}>
            <Image
              style={styles.busicon}
              source={require("../assets/bus_icon.png")}
            />
            <Text>Arriving</Text>
            <Text style={styles.bold}>5 minutes</Text>
          </View>

          <View style={styles.line}></View>
         
     
         <View style={styles.pickdropp}>
            <Text style={styles.pickdropplabel}>Pick up:        1:00pm</Text>
            <Image
              style={styles.plopp}
              source={require("../assets/plopp_green.png")}
            />
            <Text style={styles.pickdropplabel}>Drop off:       1:15pm</Text>
            <Image
              style={styles.plopp}
              source={require("../assets/plopp_blue.png")}
            />
            <View style={styles.line}></View>
          </View>
        
          <View style={styles.schedule}>
            <Text style={styles.underline}>Schedule</Text>
            <Text>Mon - Thurs:    8am-9pm</Text>
            <Text>Friday:              8am-6pm</Text>
            <Text style={styles.underline}>Pickups:</Text>
            <Text>Every hour e.g. 1:00pm</Text>
            <Text>Every 25th minute e.g. 1:25pm</Text>
            <View style={styles.line}></View>
          </View>

        <View style={styles.websitelink}>
          <Text style={styles.webitem}>Website</Text>
          <Image
              style={styles.busicon}
              source={require("../assets/link_icon.png")}
            />
        </View>
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
  arriving:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'flex-start'
  },
  schedule:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  websitelink:{
    flexDirection:'column'
  },
  pickdropp:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    // justifyContent: 'space-around',
    // alignItems: 'flex-start'
  },
  busicon: {
    height: 50,
    resizeMode: "contain",
    marginRight: 20,
    marginLeft: 0,
    marginBottom:10,
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'flex-start'
    
  },
  plopp:{
    marginRight:20,
    height:20,
    resizeMode: "contain",
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
    fontSize:32
  },
  boldsmall:{
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic'},

  underline: {
    textDecorationLine: 'underline',
    fontSize:18,
    marginTop: 3,
    marginBottom:3
  
  },
  
  webitem: {
    alignItems: 'center',
    fontWeight: 'bold',
  },
  pickdropplabel:{
    fontSize: 20,
    marginBottom:3,
    marginTop:3
  }

});
