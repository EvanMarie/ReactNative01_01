import {
  HeadingStyle,
  HorizontalRule,
  InnerContainerStyle,
  LabelTextStyle,
  MainContainerStyle,
} from "./styles_divs/styles";
import { Text, SafeAreaView, View, Dimensions } from "react-native";
import Buttons from "./components/Buttons";
import Images from "./components/Images";
import Div from "./styles_divs/Div";
import ScrollableContainer from "./styles_divs/ScrollableContainer";
import { useDeviceOrientation } from "@react-native-community/hooks";
import FlexBox from "./FlexBox";
import FlexBox02 from "./FlexBox02";
import FlexBox03 from "./FlexBox03";

// SafeAreaView is iOS only

export default function App() {
  // capture the dimensions of the screen
  console.log("Dimensions: ", Dimensions.get("screen"));
  // capture the orientation of the screen
  console.log("useDeviceOrientation: ", useDeviceOrientation());
  const mode = useDeviceOrientation();

  return (
    <SafeAreaView style={MainContainerStyle}>
      <ScrollableContainer>
        <View style={InnerContainerStyle}>
          <Text style={HeadingStyle}>Evan's Badassery</Text>
          <HorizontalRule />
          <Buttons />
          <HorizontalRule />
          <Images />
          <HorizontalRule />
          <Text style={LabelTextStyle}>Custom View / Div Component</Text>
          {/* Notice that when using custom style components like this, the width
            and height can be passed as strings when a percentage as shown below, 
            or as width={"95%""} height={70}. */}
          <Div backgroundColor="cyan" width="95%" height={70}>
            {/* This is how you would pass children to a custom component.
              In order to styled the text within the component, the style must
              be passed within the Text tag, not styled in the Div / View. */}
            <Text style={{ color: "deeppink" }}>
              This is some text inside my custom div. It is a beautiful div, if
              I do say so myself.
            </Text>
          </Div>
          <Div
            backgroundColor="deeppink"
            width="95%"
            height={mode === "landscape" ? "100%" : "5%"}
          >
            <Text style={{ color: "black" }}>
              This div changes with orientation changes.
            </Text>
          </Div>
          <HorizontalRule />
          <View
            style={{
              marginBottom: 50,
            }}
          >
            <FlexBox />
            <FlexBox02 />
            <FlexBox03 />
          </View>
        </View>
      </ScrollableContainer>
    </SafeAreaView>
  );
}
