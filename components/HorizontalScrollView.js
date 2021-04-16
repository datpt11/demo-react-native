import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";

export default function HorizontalScrollView() {
  const screenWidth = Dimensions.get("window").width; // chieu rong cua thiet bi

  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator
      scrollIndicatorInsets={{ top: 10, bottom: 10 }}
      onMomentumScrollBegin={() => {
        // alert("begin scroll");
      }}
      onMomentumScrollEnd={() => {
        // alert("end scroll");
      }}
      onScroll={(event) => {
        // const data = event.nativeEvent.contentOffset.x;
      }}
      scrollEventThrottle={1}
      style={{ flex: 30 }}
    >
      {/* keyboardDismissMode tat ban phim khi keo */}
      {/* pagingEnabled cho phep phan trang */}
      {/* horizontal scroll theo chieu ngang */}
      {/* showsHorizontalScrollIndicator thanh scroll ngang */}
      {/* scrollIndicatorInsets={{ top: 10, bottom: 10 }} vi tri cua thanh scroll - IOS */}
      {/* onMomentumScrollBegin duoc goi khi bat dau scroll */}
      {/* onMomentumScrollBegin duoc goi khi ket thuc scroll */}
      {/* onScroll duoc goi khi doi tuong ma tay bam xuong dang scroll */}
      <View
        style={{
          width: screenWidth,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green",
        }}
      >
        <Text>Screen 1</Text>
      </View>
      <View
        style={{
          width: screenWidth,
          height: 300,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
        }}
      >
        <Text>Screen 2</Text>
      </View>
      <View
        style={{
          width: screenWidth,
          height: 300,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "blue",
        }}
      >
        <Text>Screen 3</Text>
      </View>
    </ScrollView>
  );
}
