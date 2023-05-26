import React from "react";
import { View, Alert } from "react-native";
import { ButtonStyle } from "../styles_divs/styles";
import CustomButton from "./CustomButton";

const Buttons = () => {
  return (
    <View>
      <CustomButton
        title="Normal Button & Alert"
        onPress={() => alert("I am a normal alert.")}
        color="#FFF701"
        style={ButtonStyle}
      />

      <CustomButton
        title="Custom Button & Alert"
        onPress={() =>
          Alert.alert("I'm customized.", "Do you like me?", [
            { text: "Kinda...", onPress: () => console.log("Well, meh!") },
            {
              text: "Not really!",
              onPress: () => console.log("Whaddajerk!"),
            },
          ])
        }
        color="#FFF701"
        style={ButtonStyle}
      />
      {/* The following Alert window does not work on Android. */}
      <CustomButton
        title="Interrogation Button"
        onPress={() =>
          Alert.prompt("Interrogation Time:", "What is your name?", (text) =>
            console.log(text)
          )
        }
        color="#FFF701"
        style={ButtonStyle}
      />
    </View>
  );
};

export default Buttons;
