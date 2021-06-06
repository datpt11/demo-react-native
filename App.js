import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import SectionLIst from "./components/SectionLIst";
// import HorizontalFlatlist from "./components/HorizontalFlatlist";
// import FlatListExample from "./components/FlatListExample";
// import HorizontalScrollView from "./components/HorizontalScrollView";
// import VerticalScrollView from "./components/VerticalScrollView";

export default function App() {
  return (
    <View
      style={[styles.container, { marginTop: Platform.OS === "ios" ? 20 : 0 }]}
    >
      <SectionLIst />
      {/* <View
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      >
        <Image
          style={{ flex: 1, backgroundColor: "transparent" }}
          source={{
            uri: "https://images.pexels.com/photos/6825703/pexels-photo-6825703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          }}
        />
      </View> */}
      {/* <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.content}>
        <VerticalScrollView />
        <HorizontalScrollView />
        <FlatListExample /> */}
      {/* <ViewPageAndroidExample /> */}
      {/* </View> */}
      {/* <HorizontalFlatlist /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // header: {
  //   flex: 10,
  //   backgroundColor: "yellow",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // content: {
  //   flex: 90,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});
