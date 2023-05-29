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

const FlexBoxParentFlex = ({
  overallHeight,
  parentStyles,
  childOneStyles,
  childTwoStyles,
  childThreeStyles,
  mainHeading,
  parentHeading,
  childOneHeading,
  childTwoHeading,
  childThreeHeading,
}) => {
  const defaultParentHeading = "";
  const defaultParentStyles = ParentFlex;
  const defaultChildOneStyles = SmallChild01;
  const defaultChildOneHeading = "child 1";
  const defaultChildTwoStyles = SmallChild02;
  const defaultChildTwoHeading = "child 2";
  const defaultChildThreeStyles = SmallChild03;
  const defaultChildThreeHeading = "child 3";

  return (
    <View
      style={{
        height: overallHeight,
        marginBottom: 10,
      }}
    >
      <View style={GrandParentFlex}>
        <Text style={GrandParentText}>{mainHeading}</Text>
        <Text style={InnerText}>{parentHeading || defaultParentHeading}</Text>
        <View style={parentStyles || defaultParentStyles}>
          <View style={childOneStyles || defaultChildOneStyles}>
            <Text style={InnerText}>
              {childOneHeading || defaultChildOneHeading}
            </Text>
          </View>
          <View style={childTwoStyles || defaultChildTwoStyles}>
            <Text style={InnerText}>
              {childTwoHeading || defaultChildTwoHeading}
            </Text>
          </View>
          <View style={childThreeStyles || defaultChildThreeStyles}>
            <Text style={InnerText}>
              {childThreeHeading || defaultChildThreeHeading}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FlexBoxParentFlex;
