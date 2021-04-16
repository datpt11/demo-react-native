import React from "react";
import { Dimensions, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
export default function ViewPageAndroidExample() {
  // component chi danh cho android
  const screenWidth = Dimensions.get("window").width; // chieu rong cua thiet bi

  return (
    <PagerView
      initialPage={0}
      style={{ flex: 30 }}
      onPageScroll={(event) => {
        console.log(event.nativeEvent.offset);
        //offset la gia tri bien thien cua phan hien thi ra tu 0 -> 1 hoac 1 -> 0
      }}
      onPageScrollStateChanged={(state) => {
        // state: dragging  khi keo
        // state: settling khi tha tay ra
        // state: idle tay khong cham vao
        console.log(state);
      }}
      onPageSelected={(event) => {
        console.log(event.nativeEvent.position);
        // vi tri cua page theo index
      }}
    >
      <View
        key="1"
        style={{
          width: screenWidth,
          height: 300,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green",
        }}
      >
        <Text>Screen 1</Text>
      </View>
      <View
        key="2"
        style={{
          width: screenWidth,
          height: 300,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "blue",
        }}
      >
        <Text>Screen 2</Text>
      </View>
    </PagerView>
  );
}
