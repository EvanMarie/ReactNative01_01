import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  GrandParentFlex,
  GrandParentText,
  InnerText,
  SmallChild03,
} from "./styles_divs/styles";

export const OtherParentFlex = StyleSheet.create({
  backgroundColor: "#6082B6",
  flex: 1,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-end",
});

export const NewChild01 = StyleSheet.create({
  backgroundColor: "#333333",
  width: 75,
  height: 75,
  alignSelf: "flex-start",
});

export const NewChild02 = StyleSheet.create({
  backgroundColor: "#444444",
  width: 75,
  height: 175,
});

const FlexBox17 = () => {
  return (
    <View
      style={{
        height: 300,
        marginBottom: 10,
      }}
    >
      <View style={GrandParentFlex}>
        <Text style={GrandParentText}>
          Flex 17 - GrandParent (flex: 1, padding: 10)
        </Text>
        <Text style={InnerText}>
          flexDirection: "row" justifyContent: "center" alignItems: "center"
        </Text>
        <View style={OtherParentFlex}>
          <View style={NewChild01}>
            <Text style={InnerText}>Child01 - alignSelf: flex-start</Text>
          </View>
          <View style={NewChild02}>
            <Text style={InnerText}>Child02</Text>
          </View>
          <View style={SmallChild03}>
            <Text style={InnerText}>Child03</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FlexBox17;
