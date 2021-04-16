import React from "react";
import { Dimensions, Image, ScrollView } from "react-native";

export default function VerticalScrollView() {
  const screenWidth = Dimensions.get("window").width; // chieu rong cua thiet bi

  return (
    <ScrollView keyboardDismissMode="on-drag" style={{ flex: 30 }}>
      {/* keyboardDismissMode tat ban phim khi keo */}
      <Image
        style={{ width: screenWidth }}
        source={{
          uri:
            "https://images.pexels.com/photos/4869829/pexels-photo-4869829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
      />
      <Image
        style={{ width: screenWidth }}
        source={{
          uri:
            "https://images.pexels.com/photos/4869829/pexels-photo-4869829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
      />
      <Image
        style={{ width: screenWidth, height: 300 }}
        source={{
          uri:
            "https://images.pexels.com/photos/4869829/pexels-photo-4869829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
      />
      <Image
        style={{ width: screenWidth }}
        source={{
          uri:
            "https://images.pexels.com/photos/4869829/pexels-photo-4869829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
      />
      <Image
        style={{ width: screenWidth, height: 300 }}
        source={{
          uri:
            "https://images.pexels.com/photos/4869829/pexels-photo-4869829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
      />
    </ScrollView>
  );
}
