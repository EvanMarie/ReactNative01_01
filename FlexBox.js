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
  padding: 4,
  color: "white",
});

const Child01 = StyleSheet.create({
  backgroundColor: "#333333",
  flex: 1,
});

const Child02 = StyleSheet.create({
  backgroundColor: "#444444",
  flex: 1,
  padding: 5,
});

const Child02_Teddy = StyleSheet.create({
  backgroundColor: "#555555",
  flex: 0.5,
});

const Child03 = StyleSheet.create({
  backgroundColor: "#666666",
  flex: 1,
});

const FlexBox = () => {
  return (
    <View
      style={{
        height: 400,
      }}
    >
      {/* The three children are set to flex: 1, so they will take up all of their
        available space, 1/3 of the the parent minus padding. 
        Child02_Teddy is set to flex: 0.5, so it will take up half of the space
        of its parent, Child02.
        */}
      <View style={GrandParentFlex}>
        <Text style={GrandParentText}>
          FlexBox 01 - GrandParent (flex: 1, padding: 10)
        </Text>
        <View style={ParentFlex}>
          <Text style={InnerText}>Parent - flex: 1, padding: 10</Text>
          <View style={Child01}>
            <Text style={InnerText}>Child01 - flex: 1 </Text>
          </View>
          <View style={Child02}>
            <Text style={InnerText}>Child02 - flex: 1, padding: 5 </Text>
            <View style={Child02_Teddy}>
              <Text style={InnerText}>Child02_Teddy - flex: 0.5 </Text>
            </View>
          </View>
          <View style={Child03}>
            <Text style={InnerText}>Child03 - flex: 1 </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
