import React from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";

const CustomButton = ({ title, onPress, color }) => {
  /* buttonStyles is an object that combines the styles from the styles.button 
  object, sets the backgroundColor property to the provided color, and 
  conditionally adds the color property only if the platform is iOS. */
  const buttonStyles = {
    ...styles.button,
    backgroundColor: color,
    ...(Platform.OS === "ios" && { color: color }),
  };

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

/* button: These styles define the appearance of the button itself. It sets the 
padding, border radius, alignment, and spacing.

buttonText: These styles define the appearance of the text within the button. 
It sets the font size, font weight, and the default font color to black. 
*/

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default CustomButton;
