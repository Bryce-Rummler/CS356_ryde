// import moment from "moment";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FadeIn, FlipInEasyX } from "react-native-reanimated";
import customData from "../dummydata/data.json";

function getRoutes() {
  // const routes = JSON.parse(customData);
  const routes = customData.routes;
  // console.log(routes);
  let routeList = [];
  for (const route of routes) {
    dests = route.destinations;
    // console.log(dests);
    destList = [];
    for (const dest of dests) {
      if (dest !== undefined) {
        // console.log(dest.dest);
        destList.push(dest.dest);
      }
    }

    routeList.push({
      key: route.key,
      route: route.route,
      stop: route.stop,
      color: route.color,
      destinations: destList,
    });
  }
  return routeList;
}

export default function ToFromBox(props) {
  const [from, onChangeFrom] = React.useState("Wilkinson Center");
  const [to, onChangeTo] = React.useState("450 North");
  const [searchSug, setSearchSug] = React.useState(false);
  const [fromBox, setFromBox] = React.useState(true);
  const [image, setImage] = React.useState(
    require("./../assets/map_branbury_6.png")
  );

  setSearchSugTrue = (fromOrTo) => {
    if (fromOrTo === "from") {
      setFromBox(true);
    } else {
      setFromBox(false);
    }
    setSearchSug(true);
  };

  setSearchSugFalse = () => {
    setSearchSug(false);
  };

  fillBox = (route) => {
    if (fromBox) {
      onChangeFrom(route.stop);
      props.app.updateFrom(route);
    } else {
      onChangeTo(route.stop);
      props.app.updateTo(route);
    }
  };

  function ColoredCircle(props) {
    const colorStyle = {
      backgroundColor: props.color,
    };
    return <View style={[styles.coloredCircle, colorStyle]}></View>;
  }

  function SearchList() {
    const routes = getRoutes();
    const listItems = routes.map((route) => (
      <TouchableOpacity
        key={route.key}
        onPress={() => {
          fillBox(route);
        }}
      >
        <View style={styles.searchItem}>
          <View>
            <Text style={styles.stop}>{route.stop}</Text>
          </View>
          <View style={styles.routeContainer}>
            <ColoredCircle color={route.color} />
            <Text style={styles.route}>{route.route}</Text>
          </View>
        </View>
      </TouchableOpacity>
    ));
    return <View>{listItems}</View>;
  }

  function SearchSugBox() {
    const display = searchSug;
    if (display) {
      return (
        <View style={styles.searchBoxContainer}>
          <ScrollView style={styles.searchBoxContent}>
            {/* <Text>Display</Text>
            <Text>{fromBox ? "from" : "to"}</Text>
            <Text>{moment("07:50", "HH:mm").format()}</Text> */}
            <SearchList />
          </ScrollView>
        </View>
      );
    } else {
      return <View></View>;
    }
  }

  return (
    <>
      <SearchSugBox />
      <View style={styles.container}>
        <View>
          <Image
            style={styles.tofromicon}
            source={require("../assets/ToFromIcon.png")}
          />
        </View>
        <View>
          {/* <Pressable
            onPress={() => {
              this.setSearchSugTrue("from");
            }}
          > */}
          <Text style={styles.textLable}>From</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeFrom}
            onFocus={() => {
              this.setSearchSugTrue("from");
            }}
            onBlur={() => {
              this.setSearchSugFalse();
            }}
            value={from}
          ></TextInput>
          {/* </Pressable> */}
          <View style={styles.line}></View>
          {/* <Pressable
            onPress={() => {
              this.setSearchSugTrue("to");
            }}
          > */}
          <Text style={styles.textLable}>To</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTo}
            onFocus={() => {
              this.setSearchSugTrue("to");
            }}
            onBlur={() => {
              this.setSearchSugFalse();
            }}
            value={to}
          ></TextInput>
          {/* </Pressable> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchBoxContainer: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    backgroundColor: "white",
    zIndex: 800,
  },
  searchBoxContent: {
    position: "absolute",
    top: 200,
    width: 275,
    height: 260,
    alignSelf: "center",
    // backgroundColor: "lightgray",
    overflow: "scroll",
    borderTopColor: "gray",
    borderTopWidth: 1,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingRight: 8,
  },
  searchItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingBottom: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  stop: {
    fontSize: 16,
  },
  routeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  route: {
    fontSize: 12,
  },
  coloredCircle: {
    borderRadius: 3,
    height: 6,
    width: 6,
    margin: 5,
  },
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
    zIndex: 900,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
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
