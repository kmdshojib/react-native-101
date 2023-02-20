import { useState } from "react";
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from "./screens/GameScreen";
import colors from "./Constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const App = () => {
  const [userNumber, setUserNumber] = useState()
  const [gameOver, setGameOver] = useState(true)
  const [currentGuess, setCurrentGuess] = useState()
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Variable.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSansbold.ttf")
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setGameOver(false)
  }
  const gameOverHandler = (numOfRounds) => {
    setGameOver(true);
    setGuessRounds(numOfRounds)
  }
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }
  let screen = <StartGameScreen currentGuess={currentGuess} onPickedNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = (<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />)
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        onStartNewGame={startNewGameHandler}
        roundsNumber={guessRounds} />)
  }

  return (
    <>
      <StatusBar style="dark" />
      <LinearGradient colors={[colors.primary700, colors.acent500]} style={styles.rootScreen}>
        <ImageBackground source={require("./assets/dice.jpg")} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.bgImage}>
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
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


