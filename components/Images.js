import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from "react-native";
import {
  GenericTextStyle,
  InnerContainerStyle,
  LabelTextStyle,
  LogoStyle,
} from "../styles_divs/styles";

const Images = () => {
  const handlePress = () => console.log("Text pressed");

  return (
    <View style={InnerContainerStyle}>
      <Text style={LabelTextStyle}>
        Text component with console log onPress
      </Text>

      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        onPress={handlePress}
        style={GenericTextStyle}
      >
        This is gonna be a great app!! I am now making this a really long text
        so that I can utilize numberOfLines with it.
      </Text>

      {/* using a bundled image, dimensions set in styles */}
      <Text style={LabelTextStyle}>
        TouchableWithoutFeedback (console log only)
      </Text>

      <TouchableWithoutFeedback
        onPress={() => console.log("TouchableWithoutFeedback")}
      >
        <Image source={require("../assets/icon.png")} style={LogoStyle} />
      </TouchableWithoutFeedback>

      {/* using a network image, dimensions set inline */}
      <Text style={LabelTextStyle}>TouchableOpacity</Text>
      <TouchableOpacity onPress={() => console.log("Touchable Opacity")}>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 100,
            height: 150,
          }}
          fadeDuration={1000} // Android only
          blurRadius={1}
        />
      </TouchableOpacity>

      <Text style={LabelTextStyle}>TouchableHighlight</Text>
      <TouchableHighlight onPress={() => console.log("Touchable Highlight")}>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 100,
            height: 100,
          }}
          fadeDuration={1000} // Android only
          blurRadius={1}
        />
      </TouchableHighlight>
    </View>
  );
};

export default Images;
