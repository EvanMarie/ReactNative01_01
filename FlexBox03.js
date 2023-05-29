import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  GrandParentFlex,
  GrandParentText,
  ParentFlex,
  InnerText,
  SmallChild01,
  SmallChild02,
  SmallChild03,
} from "./styles_divs/styles";

const FlexBox03 = () => {
  return (
    <View
      style={{
        height: 400,
      }}
    >
      <View style={GrandParentFlex}>
        <Text style={GrandParentText}>
          Flex 03 - GrandParent (flex: 1, padding: 10)
        </Text>
        <View style={ParentFlex}>
          <Text style={InnerText}>Parent - flex: 1, padding: 10</Text>
          <View style={SmallChild01}>
            <Text style={InnerText}>Child01 - width: 75, height: 75,</Text>
          </View>
          <View style={SmallChild02}>
            <Text style={InnerText}>Child02 - width: 75, height: 75,</Text>
          </View>
          <View style={SmallChild03}>
            <Text style={InnerText}>Child03 - width: 75, height: 75,</Text>
          </View>
          <Text style={InnerText}>
            On Mobile, children are stacked horizontally by default, due to the
            typical use of portrait orientation. flexDirection: column -
            default.{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox03;
