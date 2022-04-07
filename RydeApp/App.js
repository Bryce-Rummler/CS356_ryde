import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import ToFromBox from "./Components/ToFromBox";
import TimeTableBox from "./Components/TimeTableBox"
import MapView from 'react-native-maps';

export default function App() {
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
      <TimeTableBox></TimeTableBox>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <ToFromBox />
      <View style={styles.container}>
          <MapView
            initialRegion={{
              latitude: 40.2518,
              longitude: -111.6493,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
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
