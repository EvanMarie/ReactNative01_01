import { StyleSheet, View } from "react-native";
import { Platform, StatusBar } from "react-native";

export const MainContainerStyle = StyleSheet.create({
  flex: 1,
  width: "100%",
  backgroundColor: "#222222",
  alignItems: "center",
  // Android does not recognize SafeAreaView. Use StatusBar.currentHeight instead.
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // justifyContent: "center",
  height: "100%",
});

export const InnerContainerStyle = StyleSheet.create({
  flex: 1,
  width: "100%",
  backgroundColor: "#333333",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
  height: "100%",
  padding: 10,
});

export const HeadingStyle = StyleSheet.create({
  paddingTop: 10,
  paddingBottom: 5,
  marginTop: 5,
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
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
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

export const GrandParentFlex = StyleSheet.create({
  backgroundColor: "black",
  flex: 1,
  width: 390,
  padding: 10,
  margin: 10,
  marginBottom: 10,
  borderRadius: 5,
});

export const GrandParentText = StyleSheet.create({
  fontSize: 13,
  fontWeight: "bold",
  textAlign: "left",
  marginBottom: 10,
  color: "white",
});

export const ParentFlex = StyleSheet.create({
  backgroundColor: "#6082B6",
  /* flex: 1 will make this fit the entire space allowed by
               parent, FlexBoxView01 */
  flex: 1,
});

export const InnerText = StyleSheet.create({
  fontSize: 13,
  textAlign: "left",
  padding: 4,
  color: "white",
});

export const SmallChild01 = StyleSheet.create({
  backgroundColor: "#333333",
  width: 75,
  height: 75,
});

export const SmallChild02 = StyleSheet.create({
  backgroundColor: "#444444",
  width: 75,
  height: 75,
});

export const SmallChild03 = StyleSheet.create({
  backgroundColor: "#555555",
  width: 75,
  height: 75,
});

/*

STYLES:
    container: This is a key that represents a style object for a container 
    view. It's a convention to give this key the name "container" because it 
    typically refers to the main container element in a React Native component.

    flex: 1: This style property specifies how a flex container should distribute 
    space among its items. In this case, flex: 1 means that the container should 
    take up all available vertical and horizontal space.

    backgroundColor: '#fff': This property sets the background color of the 
    container to white (#fff represents the hexadecimal color code for white). 
    You can change this value to any valid color value to customize the background 
    color.

    alignItems: 'center': This property controls the alignment of the container's 
    children along the horizontal axis. Setting it to 'center' horizontally 
    centers the children within the container.

    justifyContent: 'center': This property controls the alignment of the 
    container's children along the vertical axis. Setting it to 'center' 
    vertically centers the children within the container.

    */
