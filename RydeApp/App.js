import * as React from "react";
import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import ToFromBox from "./Components/ToFromBox";
import MapPlaceholder from "./Components/MapPlaceholder";
import TimeTableBox from "./Components/TimeTableBox";
import Schedule from "./Components/Schedule";
import { set } from "react-native-reanimated";

export default function App() {
  const url = "https://studentmovement.com/map/routesschedules";
  const [running, setRunning] = React.useState(false);
  const [showSchedule, setShowSchedule] = React.useState(false);

  const [from, setFromBox] = React.useState({
    key: 0,
    route: "",
    stop: "",
    color: "",
    destinations: [],
  });

  const [to, setToBox] = React.useState({
    key: 0,
    route: "",
    stop: "",
    color: "",
    destinations: [],
  });

  const [validRoute, setValidRoute] = React.useState(true);

  const [image, setImage] = React.useState(
    require("./assets/map_king_henry_0.png")
  );

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

  React.useEffect(() => {
    // console.log("from.route = " + from.route);
    // console.log("to.route = " + to.route);
    if (from.route == to.route) {
      // console.log("equal");
      if (from.route == "Branburry") {
        setValidRoute(true);
        setImage(require("./assets/map_branbury_6.png"));
      }
    } else {
      setValidRoute(false);
    }
  });

  updateFrom = (route) => {
    newRoute = {
      key: route.key,
      route: route.route,
      stop: route.stop,
      color: route.color,
      destinations: route.destinations,
    };
    setFromBox(newRoute);
    // console.log("update from called...");
    // console.log(newRoute);
  };

  updateTo = (route) => {
    newRoute = {
      key: route.key,
      route: route.route,
      stop: route.stop,
      color: route.color,
      destinations: route.destinations,
    };
    setToBox(newRoute);
    // console.log("update to called....");
    // console.log(newRoute);
  };

  enterSchedule = () => {
    setShowSchedule(true);
  };

  exitSchedule = () => {
    // console.log("exitSchedule");
    setShowSchedule(false);
  };

  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        height: 415,
        alignItems: "center",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: 3,
          width: 100,
          marginBottom: 10,
        }}
      />
      <TimeTableBox app={this} />
    </View>
  );

  const sheetRef = React.useRef(null);

  if (running == true) {
    return (
      <>
        {showSchedule == true ? <Schedule app={this} /> : null}
        <ToFromBox app={this} />
        <View style={styles.container}>
          <MapPlaceholder
            from={from}
            to={to}
            image={image}
            valid={validRoute}
          />
          <StatusBar style="auto" />
        </View>
        <BottomSheet
          ref={sheetRef}
          snapPoints={[415, 200]}
          initialSnap={1}
          borderRadius={10}
          renderContent={renderContent}
        />
      </>
    );
  } else {
    return (
      <>
        <View style={styles.errorContainer}>
          <View style={styles.errorMessage}>
            <Image style={styles.stop} source={require("./assets/stop.png")} />
            <Text style={styles.errorText}>
              The ryde is not currently running
            </Text>
            <View style={styles.websitelink}>
              <TouchableOpacity onPress={() => handleLink()}>
                <Text style={styles.webitem}>Website</Text>
                <Image
                  style={styles.webicon}
                  source={require("./assets/link_icon.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
  },
  errorContainer: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
  },
  stop: {
    height: 50,
    width: 50,
    margin: 5,
    resizeMode: "contain",
  },
  errorMessage: {
    width: 275,
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    padding: 50,
    borderRadius: 20,
  },
  errorText: {
    textAlign: "center",
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
