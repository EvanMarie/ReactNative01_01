import React from "react";
import { View, StyleSheet } from "react-native";

/* Here, we define the Div component as a functional component that accepts props 
such as backgroundColor, width, height, and children. The backgroundColor, width,
and height props are used to style the wrapping View component.

Inside the component, we define the divStyles object using StyleSheet.create. 
This allows us to define and encapsulate the styles specific to the Div component.

The divStyles object contains a single style rule called view, which represents the 
styles for the wrapping View component. It includes properties such as borderRadius, 
backgroundColor, width, and height that are based on the props passed to the Div 
component.

Finally, the component returns the View component with the style prop set to 
divStyles.view and children as its content. The children prop represents the 
content placed between the opening and closing tags of the Div component.
*/

const Div = ({ backgroundColor, width, height, children }) => {
  const divStyles = StyleSheet.create({
    view: {
      borderRadius: 5,
      padding: 10,
      margin: 10,
      backgroundColor,
      width,
      height,
    },
  });

  return <View style={divStyles.view}>{children}</View>;
};

export default Div;
