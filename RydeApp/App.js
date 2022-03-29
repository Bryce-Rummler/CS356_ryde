import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

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
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <View style={styles.container}>
        <Text>Map component should go here</Text>
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
  },
});
