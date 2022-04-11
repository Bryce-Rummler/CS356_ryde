import React, { useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FlipInEasyX } from "react-native-reanimated";

export default function TimeTableBox(props) {
  const url = "https://studentmovement.com/map/routesschedules";
  handleLink = React.useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  handleSchedule = () => {
    props.app.enterSchedule();
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.arrivingContainer}>
          <View style={styles.mainArrivingContent}>
            <Image
              style={styles.busicon}
              source={require("../assets/bus_icon.png")}
            />
            <View style={styles.arrivingContent}>
              <Text style={styles.arriveingText}>Arriving</Text>
              <View style={styles.countDown}>
                <Text style={styles.countNumber}>5</Text>
                <Text style={styles.countUnit}>minutes</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.notice}>Free</Text>
          </View>
        </View>

        <View style={styles.line}></View>

        <View style={styles.pickdrop}>
          <View style={styles.pickdropSection}>
            <View style={styles.pickdropInfo}>
              <Text style={styles.pickdroplabel}>Pick up:</Text>
              <Text style={styles.pickdroptime}>1:00 pm</Text>
            </View>
            <Image
              style={styles.plopp}
              source={require("../assets/plopp_green.png")}
            />
          </View>
          <View style={styles.pickdropSection}>
            <View style={styles.pickdropInfo}>
              <Text style={styles.pickdroplabel}>Drop off:</Text>
              <Text style={styles.pickdroptime}>1:15 pm</Text>
            </View>
            <Image
              style={styles.plopp}
              source={require("../assets/plopp_blue.png")}
            />
          </View>
        </View>

        <View style={styles.line}></View>

        <View style={styles.ScheduleContainer}>
          <View style={styles.scheduleOverview}>
            <Text style={styles.underline}>Schedule</Text>
            <Text>Mon - Thurs: 8am-9pm</Text>
            <Text>Friday: 8am-6pm</Text>
          </View>
          <View style={styles.scheduleButton}>
            <TouchableOpacity onPress={() => handleSchedule()}>
              <Text>Full Schedule</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.line}></View>

        <View style={styles.websitelink}>
          <TouchableOpacity onPress={() => handleLink()}>
            <Text style={styles.webitem}>Website</Text>
            <Image
              style={styles.webicon}
              source={require("../assets/link_icon.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // top: 40,
    display: "flex",
    flexDirection: "column",
    padding: 5,
    width: "100%",
    height: "auto",
    backgroundColor: "white",
    justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 2,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "lightgray",
    width: 340,
    marginTop: 10,
  },
  arrivingContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    // borderColor: "red",
    // borderWidth: 2,
  },
  mainArrivingContent: {
    flexDirection: "row",
  },
  busicon: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    alignSelf: "flex-start",
  },
  arrivingContent: {
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  arriveingText: {
    fontSize: 12,
    color: "gray",
  },
  countDown: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
  },
  countNumber: {
    fontSize: 32,
    fontWeight: "bold",
  },
  countUnit: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 16,
  },
  notice: {
    fontSize: 12,
    color: "gray",
  },
  pickdrop: {
    flexDirection: "column",
    marginTop: 10,
  },
  pickdropSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 16,
    marginLeft: 16,
  },
  pickdropInfo: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  pickdroplabel: {
    marginTop: 5,
    marginBottom: 5,
    width: 100,
    fontSize: 16,
  },
  pickdroptime: {
    marginTop: 5,
    marginBottom: 5,
    width: 100,
    fontSize: 20,
    fontWeight: "bold",
  },
  plopp: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  ScheduleContainer: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16,
  },
  scheduleOverview: {},
  underline: {
    textDecorationLine: "underline",
    fontSize: 26,
    marginBottom: 5,
  },
  scheduleButton: {
    borderColor: "gray",
    borderWidth: 2,
    padding: 5,
    backgroundColor: "#eeeeee",
  },
  websitelink: {
    marginTop: 20,
    alignSelf: "center",
  },
  webicon: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});
