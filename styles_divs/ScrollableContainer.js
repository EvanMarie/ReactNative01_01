import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const ScrollableContainer = ({ children }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default ScrollableContainer;
