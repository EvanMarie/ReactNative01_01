import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  GrandParentFlex,
  GrandParentText,
  InnerText,
  SmallChild01,
  SmallChild02,
  SmallChild03,
} from "./styles_divs/styles";

export const OtherParentFlex = StyleSheet.create({
  backgroundColor: "#6082B6",
  flex: 1,
  flexDirection: "row",
  justifyContent: "center",
  padding: 10,
});

const FlexBox05 = () => {
  return (
    <View
      style={{
        height: 225,
      }}
    >
      <View style={GrandParentFlex}>
        <Text style={GrandParentText}>
          Flex 05 - GrandParent (flex: 1, padding: 10)
        </Text>
        <Text style={InnerText}>
          flexDirection: "row" justifyContent: "center" - centers children along
          main axis, which is currently set to "row".
        </Text>
        <View style={OtherParentFlex}>
          <View style={SmallChild01}>
            <Text style={InnerText}>Child01</Text>
          </View>
          <View style={SmallChild02}>
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

export default FlexBox05;
