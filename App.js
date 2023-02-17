import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from "./screens/GameScreen";
import colors from "./Constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

const App = () => {
  const [userNumber, setUserNumber] = useState()
  const [gameOver,setGameOver] = useState(true)

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setGameOver(false)
  }
  const gameOverHandler = () =>{
    setGameOver(true);
  }
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameOver && userNumber){
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient colors={[colors.primary700, colors.acent500]} style={styles.rootScreen}>
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


