import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Data from "../dummydata/bransched.json";

function getData() {
  // const routes = JSON.parse(customData);
  const stop = Data.stop;
  const color = Data.color;
  const times = Data.times;
  // console.log(routes);
  let timeList = [];
  let count = 0;
  for (const time of times) {
    timeList.push({
      key: count,
      time: time.time,
    });
    count += 1;
  }
  return {
    stopName: stop,
    colorValue: color,
    timeStrings: timeList,
  };
}

export default function Schedule(props) {
  handleSchedule = () => {
    props.app.exitSchedule();
  };

  function ColoredTitle(props) {
    const colorStyle = {
      backgroundColor: props.color,
    };
    // console.log(props);
    return (
      <View style={[styles.coloredTitle, colorStyle]}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    );
  }

  function TimeListRender(props) {
    const list = props.list;
    // console.log(list);
    const listItems = list.map((item) => (
      <View>
        <View key={item.key} style={styles.timeItem}>
          <Text style={styles.timeString}>{item.timeString}</Text>
        </View>
        <View style={styles.line}></View>
      </View>
    ));
    return <View>{listItems}</View>;
  }

  function ScheduleData() {
    const data = getData();
    // console.log(data);
    let times = data.timeStrings;
    // console.log(times);
    let timeList = [];
    for (const time of times) {
      timeList.push({
        key: time.key,
        timeString: time.time,
      });
    }
    // console.log(timeList);
    return (
      <>
        <View style={styles.scheduleContent}>
          <ColoredTitle color={data.colorValue} title={data.stopName} />
          <View style={styles.line}></View>
          <Text style={styles.subTitle}>M-F Departure Times:</Text>
          <View style={styles.line}></View>
          <ScrollView style={styles.scroll}>
            <TimeListRender list={timeList} />
          </ScrollView>
        </View>
      </>
    );
  }

  return (
    <>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={handleSchedule}>
          <Image style={styles.back} source={require("../assets/back.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.scheduleContainer}>
        <ScheduleData />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    position: "absolute",
    top: 30,
    right: 0,
    zIndex: 1000,
    margin: 20,
  },
  back: {
    height: 30,
    width: 30,
  },
  scheduleContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    backgroundColor: "white",
    zIndex: 999,
    justifyContent: "center",
    alignItems: "center",
  },
  scheduleContent: {
    width: "80%",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 2,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  coloredTitle: {
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  subTitle: {
    fontWeight: "bold",
    padding: 5,
    backgroundColor: "#eeeeee",
  },
  scroll: {
    overflow: "scroll",
    height: "60%",
  },
  timeItem: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 20,
  },
  timeString: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
