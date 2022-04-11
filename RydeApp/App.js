import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import ToFromBox from "./Components/ToFromBox";
import MapPlaceholder from "./Components/MapPlaceholder";

export default function App() {
  const [from, setFromBox] = React.useState({
    key: 0,
    route: "",
    stop: "",
    color: "",
  });

  const [to, setToBox] = React.useState({
    key: 0,
    route: "",
    stop: "",
    color: "",
  });

  updateFrom = (route) => {
    newRoute = {
      key: route.key,
      route: route.route,
      stop: route.stop,
      color: route.color,
    };
    setFromBox(newRoute);
    console.log("update from called...");
    console.log(newRoute);
  };

  updateTo = (route) => {
    newRoute = {
      key: route.key,
      route: route.route,
      stop: route.stop,
      color: route.color,
    };
    setToBox(newRoute);
    console.log("update to called....");
    console.log(newRoute);
  };

  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        height: 450,
        alignItems: "center",
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
        <MapPlaceholder from={from} to={to} />
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
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
  },
});
