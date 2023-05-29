import {
  GenericTextStyle,
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
import FlexBoxParentFlex from "./FlexBoxParentFlex";

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
            // height={mode === "landscape" ? "100%" : "5%"}
            height={100}
          >
            <Text style={{ color: "black" }}>
              This div changes with orientation changes...when orientation is
              tracked.
            </Text>
          </Div>
          <HorizontalRule />
          <View
            style={{
              marginBottom: 50,
              paddingBottom: 75,
              textAlign: "center",
            }}
          >
            {/* ------------------------------------------------------------------------------ */}

            <Text style={HeadingStyle}>FlexBox: Flex</Text>
            <FlexBox />
            <FlexBox02 />

            {/* ------------------------------------------------------------------------------ */}
            <Text style={HeadingStyle}>FlexBox: Flex Direction</Text>
            <FlexBoxParentFlex
              overallHeight={400}
              mainHeading="03) default - flexDirection: 'column'"
              parentHeading="On Mobile, children are stacked horizontally by default, due to the
            typical use of portrait orientation."
            />
            {/* ------------------------------------------------------------------------------ */}
            <FlexBoxParentFlex
              overallHeight={200}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
              }}
              mainHeading="04) flexDirection: 'row'"
              parentHeading="Parent container has flexDirection: 'row', so children are in a row."
            />
            {/* ------------------------------------------------------------------------------ */}
            <Text style={HeadingStyle}>FlexBox: Justify Content</Text>
            <FlexBoxParentFlex
              overallHeight={200}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
              }}
              mainHeading="05) flexDirection: 'row' & justifyContent: 'center'"
              parentHeading="flexDirection: row justifyContent: center - centers children along
          main axis, which is currently set to row."
            />
            {/* ------------------------------------------------------------------------------ */}
            <FlexBoxParentFlex
              overallHeight={400}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
              }}
              mainHeading="06) flexDirection: 'column' & justifyContent: 'center'"
            />
            {/* ------------------------------------------------------------------------------ */}
            <FlexBoxParentFlex
              overallHeight={200}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
              mainHeading="07) (direction: row) justifyContent: 'flex-end'"
              parentHeading="Pushes everything to the end of the main axis."
            />
            {/* ------------------------------------------------------------------------------ */}
            <FlexBoxParentFlex
              overallHeight={200}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              mainHeading="08) (direction: row) justifyContent: 'space-between'"
              parentHeading="Evenly spaces children along the main axis, but edges have less spacing."
            />
            {/* ------------------------------------------------------------------------------ */}
            <FlexBoxParentFlex
              overallHeight={200}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
              mainHeading="09) (direction: row) justifyContent: 'space-around'"
              parentHeading="Evenly spaces children along the main axis, but edges have more spacing."
            />
            {/* ------------------------------------------------------------------------------ */}
            <FlexBoxParentFlex
              overallHeight={200}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
              mainHeading="10) (direction: row) justifyContent: 'space-evenly'"
              parentHeading="Evenly spaces children along the main axis, and edges have even spacing."
            />
            {/* ------------------------------------------------------------------------------ */}
            <Text style={HeadingStyle}>FlexBox: Align Items</Text>
            <FlexBoxParentFlex
              overallHeight={250}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              mainHeading="11) (direction: row, justify: center) alignItems: 'center'"
              parentHeading="alignItems centers along secondary axis, which is vertical in this
          case"
            />
            {/* ------------------------------------------------------------------------------ */}
            <FlexBoxParentFlex
              overallHeight={325}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "baseline",
              }}
              childOneHeading="child 1: height: 200"
              childOneStyles={{
                width: 75,
                height: 200,
                backgroundColor: "#333333",
              }}
              childTwoHeading="child 2: height: 150"
              childTwoStyles={{
                width: 75,
                height: 150,
                backgroundColor: "#444444",
              }}
              childThreeHeading="child 3: height: 75"
              childThreeStyles={{
                width: 75,
                height: 75,
                backgroundColor: "#555555",
              }}
              mainHeading="12) (direction: row, justify: center) alignItems: 'baseline'"
              parentHeading="differing child heights show this property"
            />
            {/* ------------------------------------------------------------------------------ */}
            <FlexBoxParentFlex
              overallHeight={325}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
              childOneStyles={{
                width: 75,
                height: 200,
                backgroundColor: "#333333",
              }}
              childTwoStyles={{
                width: 75,
                height: 150,
                backgroundColor: "#444444",
              }}
              childThreeStyles={{
                width: 75,
                height: 75,
                backgroundColor: "#555555",
              }}
              mainHeading="13) (direction: row, justify: center) alignItems: 'flex-end'"
              parentHeading="vertically aligns to bottom, since this is the secondary axis"
            />
            {/* ------------------------------------------------------------------------------ */}
            <FlexBoxParentFlex
              overallHeight={325}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
              childOneStyles={{
                width: 75,
                height: 200,
                backgroundColor: "#333333",
              }}
              childTwoStyles={{
                width: 75,
                height: 175,
                backgroundColor: "#444444",
              }}
              childThreeStyles={{
                width: 75,
                height: 75,
                backgroundColor: "#555555",
              }}
              mainHeading="14) (direction: row, justify: center) alignItems: 'flex-start'"
              parentHeading="vertically aligns to top, since this is the secondary axis"
            />
            {/* ------------------------------------------------------------------------------ */}
            <FlexBoxParentFlex
              overallHeight={375}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "stretch",
              }}
              childOneHeading="child 1: height not set"
              childOneStyles={{
                width: 75,
                backgroundColor: "#333333",
              }}
              childTwoStyles={{
                width: 75,
                height: 175,
                backgroundColor: "#444444",
              }}
              childThreeStyles={{
                width: 75,
                height: 75,
                backgroundColor: "#555555",
              }}
              mainHeading="15) (direction: row, justify: center) alignItems: 'stretch'"
              parentHeading="child elements with no height set will be stretched along the entire space."
            />
            {/* ------------------------------------------------------------------------------ */}
            <FlexBoxParentFlex
              overallHeight={325}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              childOneStyles={{
                width: 75,
                height: 200,
                backgroundColor: "#333333",
              }}
              childTwoStyles={{
                width: 75,
                height: 175,
                backgroundColor: "#444444",
              }}
              childThreeStyles={{
                width: 75,
                height: 75,
                backgroundColor: "#555555",
              }}
              mainHeading="16) (direction: row, justify: center) alignItems: 'center'"
              parentHeading="each element is centered along the secondary axis, which is vertical in this case"
            />
            {/* ------------------------------------------------------------------------------ */}
            <Text style={HeadingStyle}>FlexBox: Align Self</Text>
            <FlexBoxParentFlex
              overallHeight={250}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              childOneHeading="child 1 - alignSelf: 'flex-start'"
              childOneStyles={{
                height: 75,
                width: 75,
                backgroundColor: "#333333",
                alignSelf: "flex-start",
              }}
              mainHeading="17) single child with alignSelf: 'flex-start'"
              parentHeading="This isolates the one child item and aligns it to the start of the secondary axis."
            />
            {/* ------------------------------------------------------------------------------ */}
            <Text style={HeadingStyle}>FlexBox: Flex Basis</Text>
            <FlexBoxParentFlex
              overallHeight={200}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              childOneHeading="child 1 - flexBasis: 150, height 75, no width"
              childOneStyles={{
                height: 75,
                backgroundColor: "#333333",
                flexBasis: 150,
              }}
              mainHeading="18) direction: row, justify: center, align: center"
              parentHeading="flexBasis sets the size in px along the primary axis, so it can affect width or height depending."
            />
            {/* ------------------------------------------------------------------------------ */}
            <Text style={HeadingStyle}>FlexBox: Flex Grow</Text>
            <FlexBoxParentFlex
              overallHeight={200}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              childOneHeading="child 1 - flexGrow 1, height 75, no width"
              childOneStyles={{
                height: 75,
                backgroundColor: "#333333",
                flexGrow: 1,
              }}
              mainHeading="19) direction: row, justify: center, align: center"
              parentHeading="flexGrow is essentially the same as setting flex. 1 will 
              let the element take up all possible space."
            />
            {/* ------------------------------------------------------------------------------ */}
            <Text style={HeadingStyle}>FlexBox: Flex Shrink</Text>
            <FlexBoxParentFlex
              overallHeight={250}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              childOneHeading="child 1 - width 400, flexGrow 1"
              childOneStyles={{
                height: 75,
                backgroundColor: "#333333",
                width: 400,
                flexShrink: 1,
              }}
              mainHeading="20) direction: row, justify: center, align: center"
              parentHeading="The width is 400, but flexShrink says that if there is 
              overflowing, i.e. other child elements being forced out due to this 
              element's size, it can be shrunk. The same result can be achieved by 
              setting flex to -1 on this element."
            />

            <HorizontalRule />

            {/* ------------------------------------------------------------------------------ */}
            <Text style={HeadingStyle}>Absolute & Relative Positioning</Text>
            <Text style={GenericTextStyle}>
              Adjusting an element's positioning without affecting the layout
              around it. In these examples, one child's position is changed
              without affecting the other two children elements around it.
            </Text>

            <Text style={GenericTextStyle}>
              In CSS and React Native, all elements have position set to
              relative by default.
            </Text>
            <FlexBoxParentFlex
              overallHeight={275}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              childTwoHeading="child 2 - top: 20"
              childTwoStyles={{
                width: 75,
                height: 75,
                backgroundColor: "#444444",
                top: 20,
              }}
              mainHeading="21) Child two has top: 20"
              parentHeading="If top was set to -20, it would be pushed up 20px, which 
              is the same as setting bottom: 20. Left and right can also be set, which
              moves the element the specified number of pixels from the left or right."
            />

            {/* ------------------------------------------------------------------------------ */}
            <FlexBoxParentFlex
              overallHeight={250}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              childTwoHeading="child 2 - right: 20"
              childTwoStyles={{
                width: 75,
                height: 75,
                backgroundColor: "#444444",
                right: 20,
              }}
              mainHeading="22) Child two has right: 20"
              parentHeading="Left and right can also be set, which moves the element 
              the specified number of pixels from the left or right. In this case, it
              causes child 2 to overlap with child 1."
            />
            {/* ------------------------------------------------------------------------------ */}
            <Text style={HeadingStyle}>Using Absolute Positioning</Text>
            <Text style={GenericTextStyle}>
              Absolute positioning removes the element from the normal flow of
              the document. Other elements are positioned as if it did not
              exist. The element is positioned relative to its parent. position:
              absolute, top: 10, left: 10.
            </Text>
            <FlexBoxParentFlex
              overallHeight={250}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              childTwoHeading="child 2 - above described positioning"
              childTwoStyles={{
                position: "absolute",
                top: 10,
                left: 10,
                width: 75,
                height: 75,
                backgroundColor: "#444444",
              }}
              mainHeading="23) Absolute Positioning with child 2"
              parentHeading="Child 2 is now 10px from the top and from the left of the parent."
            />
            {/* ------------------------------------------------------------------------------ */}

            <FlexBoxParentFlex
              overallHeight={250}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              childTwoStyles={{
                position: "relative",
                top: 10,
                left: 10,
                width: 75,
                height: 75,
                backgroundColor: "#444444",
              }}
              mainHeading="24) Same as 23, but with relative positioning on child 2"
              parentHeading="Child 1 and Child 3 do not move in this case. Only Child 2 moves."
            />
          </View>
        </View>
      </ScrollableContainer>
    </SafeAreaView>
  );
}

/* 
COMPONENT:

            <Text style={HeadingStyle}>Absolute & Relative Positioning</Text>
            <FlexBoxParentFlex
              overallHeight={200}
              parentStyles={{
                backgroundColor: "#6082B6",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
              }}
              mainHeading="21) "
              parentHeading=""
            />

*/
