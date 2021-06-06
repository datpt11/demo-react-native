import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const status = {
  cloud: {
    ios: "ios-cloudy",
    android: "md-cloudy",
  },
  rainy: {
    ios: "ios-rainy",
    android: "md-rainy",
  },
  sunny: {
    ios: "ios-sunny",
    android: "md-sunny",
  },
  thunderstorm: {
    ios: "ios-thunderstorm",
    android: "md-thunderstorm",
  },
};

const data = [
  {
    hour: "1 AM",
    status: status.cloud,
    deg: 45,
  },
  {
    hour: "2 AM",
    status: status.cloud,
    deg: 30,
  },
  {
    hour: "3 AM",
    status: status.cloud,
    deg: 50,
  },
  {
    hour: "4 AM",
    status: status.sunny,
    deg: 34,
  },
  {
    hour: "5 AM",
    status: status.sunny,
    deg: 26,
  },
  {
    hour: "6 AM",
    status: status.sunny,
    deg: 87,
  },
  {
    hour: "7 AM",
    status: status.sunny,
    deg: 54,
  },
  {
    hour: "8 AM",
    status: status.sunny,
    deg: 43,
  },
  {
    hour: "9 AM",
    status: status.sunny,
    deg: 22,
  },
  {
    hour: "10 AM",
    status: status.sunny,
    deg: 67,
  },
  {
    hour: "11 AM",
    status: status.sunny,
    deg: 32,
  },
  {
    hour: "12 AM",
    status: status.rainy,
    deg: 54,
  },
  {
    hour: "13 PM",
    status: status.rainy,
    deg: 22,
  },
  {
    hour: "14 PM",
    status: status.rainy,
    deg: 25,
  },
  {
    hour: "15 PM",
    status: status.thunderstorm,
    deg: 27,
  },
  {
    hour: "16 PM",
    status: status.thunderstorm,
    deg: 27,
  },
  {
    hour: "17 PM",
    status: status.thunderstorm,
    deg: 27,
  },
  {
    hour: "18 PM",
    status: status.thunderstorm,
    deg: 27,
  },
  {
    hour: "19 PM",
    status: status.thunderstorm,
    deg: 27,
  },
];

function HorizontalFlatlist() {
  return (
    <View>
      <Text>Weather Forecast</Text>

      <FlatList
        style={{ backgroundColor: "black", opacity: 0.5 }}
        data={data}
        horizontal
        keyExtractor={(item) => item.hour}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={{ color: "white", margin: 10 }}>{item.hour}</Text>
              <Ionicons
                size={30}
                color="white"
                name={
                  Platform.OS === "ios" ? item.status.ios : item.status.android
                }
              />
              <Text style={{ color: "white", margin: 10 }}>{item.deg} °F</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default HorizontalFlatlist;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: 90,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    margin: 4,
  },
});
