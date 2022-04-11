import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import ToFromBox from "./Components/ToFromBox";
import MapPlaceholder from "./Components/MapPlaceholder";
import { set } from "react-native-reanimated";

export default function App() {
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

  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        height: 450,
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
      <Text>Swipe up for more info about bus route</Text>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <ToFromBox app={this} />
      <View style={styles.container}>
        <MapPlaceholder from={from} to={to} image={image} valid={validRoute} />
        <StatusBar style="auto" />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 200]}
        initialSnap={1}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
  },
});
