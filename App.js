import {
  HeadingStyle,
  HorizontalRule,
  InnerContainerStyle,
  LabelTextStyle,
  MainContainerStyle,
} from "./styles_divs/styles";
import { Text, SafeAreaView, View } from "react-native";
import Buttons from "./components/Buttons";
import Images from "./components/Images";
import Div from "./styles_divs/Div";
import ScrollableContainer from "./styles_divs/ScrollableContainer";

// SafeAreaView is iOS only

export default function App() {
  return (
    <>
      <SafeAreaView style={MainContainerStyle}>
        <ScrollableContainer>
          <View style={InnerContainerStyle}>
            <Text style={HeadingStyle}>Evan's Badassery</Text>
            <HorizontalRule />
            <Buttons />
            <HorizontalRule />
            <Images />
            <HorizontalRule />
            <Text style={LabelTextStyle}>Custom Div Component</Text>
            <Div backgroundColor="cyan" width={300} height={70}>
              <Text>
                This is some text inside my custom div. It is a beautiful div,
                if I do say so myself.
              </Text>
            </Div>
          </View>
        </ScrollableContainer>
      </SafeAreaView>
    </>
  );
}

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
