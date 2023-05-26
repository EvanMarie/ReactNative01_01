import { StyleSheet, View } from "react-native";
import { Platform, StatusBar } from "react-native";

export const MainContainerStyle = StyleSheet.create({
  flex: 1,
  backgroundColor: "#222222",
  alignItems: "center",
  // Android does not recognize SafeAreaView. Use StatusBar.currentHeight instead.
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // justifyContent: "center",
});

export const InnerContainerStyle = StyleSheet.create({
  flex: 1,
  backgroundColor: "#333333",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
});

export const HeadingStyle = StyleSheet.create({
  paddingTop: 10,
  paddingBottom: 5,
  marginTop: 15,
  fontWeight: 500,
  fontSize: 24,
  color: "cyan",
});

export const HorizontalRule = () => {
  return (
    <View
      style={{
        borderBottomColor: "white",
        borderBottomWidth: 1,
        width: 400,
        marginTop: 10,
        marginBottom: 10,
      }}
    />
  );
};

export const ButtonStyle = StyleSheet.create({
  backgroundColor: "red",
});

export const LogoStyle = StyleSheet.create({
  width: 75,
  height: 75,
});

export const LabelTextStyle = StyleSheet.create({
  paddingTop: 10,
  paddingBottom: 5,
  fontWeight: 500,
  fontSize: 17,
  color: "deeppink",
});

export const GenericTextStyle = StyleSheet.create({
  paddingLeft: 5,
  paddingRight: 5,
  maxWidth: 400,
  color: "white",
});
