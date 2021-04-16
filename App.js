import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FlatListExample from "./components/FlatListExample";
import HorizontalScrollView from "./components/HorizontalScrollView";
import VerticalScrollView from "./components/VerticalScrollView";

export default function App() {
  return (
    <View
      style={[styles.container, { marginTop: Platform.OS === "ios" ? 20 : 0 }]}
    >
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.content}>
        <VerticalScrollView />
        <HorizontalScrollView />
        <FlatListExample />
        {/* <ViewPageAndroidExample /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 10,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 90,
    justifyContent: "center",
    alignItems: "center",
  },
});
