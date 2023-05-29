import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  GrandParentFlex,
  GrandParentText,
  ParentFlex,
} from "./styles_divs/styles";

const InnerText = StyleSheet.create({
  fontSize: 13,
  fontWeight: "bold",
  textAlign: "center",
  padding: 4,
  color: "white",
});

const Child01 = StyleSheet.create({
  backgroundColor: "#333333",
  flex: 2,
});

const Child02 = StyleSheet.create({
  backgroundColor: "#444444",
  flex: 1,
});

const Child03 = StyleSheet.create({
  backgroundColor: "#555555",
  flex: 1,
});

const FlexBox03 = () => {
  return (
    <View
      style={{
        height: 400,
      }}
    >
      <View style={GrandParentFlex}>
        <Text style={GrandParentText}>
          FlexBox 03 - GrandParent (flex: 1, padding: 10)
        </Text>
        <View style={ParentFlex}>
          <Text style={InnerText}>Parent - </Text>
          <View style={Child01}>
            <Text style={InnerText}>Child01 -</Text>
          </View>
          <View style={Child02}>
            <Text style={InnerText}>Child02 -</Text>
          </View>
          <View style={Child03}>
            <Text style={InnerText}>Child03 -</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FlexBox03;
