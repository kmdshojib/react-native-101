import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from "./screens/GameScreen";

const App = () => {
  const [userNumber, setUserNumber] = useState()

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
  }
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen />
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground source={require("./assets/dice.jpg")} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.bgImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  bgImage: {
    opacity: 0.15,
  }
});
export default App


