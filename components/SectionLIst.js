import React from "react";
import { SectionList, Text, View } from "react-native";

const data = [
  {
    title: "Developer",
    data: [
      {
        name: "Dat",
        age: "20",
      },
      {
        name: "Thao",
        age: "20",
      },
      {
        name: "Tien",
        age: "22",
      },
    ],
  },
  {
    title: "Designer",
    data: [
      {
        name: "THu",
        age: "19",
      },
      {
        name: "Huyen",
        age: "17",
      },
      {
        name: "Mai",
        age: "23",
      },
    ],
  },
  {
    title: "Tester",
    data: [
      {
        name: "Hoa",
        age: "25",
      },
      {
        name: "Ly",
        age: "23",
      },
      {
        name: "Phung",
        age: "27",
      },
    ],
  },
];

function SectionLIst() {
  const renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: "blue", flex: 1, padding: 10 }}>
        <Text style={{ color: "white", fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ color: "white" }}>{item.age}</Text>
        <View style={{ height: 1, backgroundColor: "gray" }}></View>
      </View>
    );
  };

  const renderSectionHeader = ({ section }) => {
    console.log(section);
    return (
      <View style={{ backgroundColor: "#434343", padding: 10 }}>
        <Text style={{ color: "white" }}>{section.title}</Text>
      </View>
    );
  };

  return (
    <SectionList
      style={{ flex: 1, flexDirection: "column" }}
      sections={data}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
}

export default SectionLIst;
