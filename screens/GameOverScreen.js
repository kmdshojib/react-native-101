import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import Title from "../components/Title"
import colors from "../Constants/colors"


const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
      <View>
        <Text style={styles.summeryText}>Your phone needed <Text style={styles.heilightText}>{roundsNumber}</Text> number of attempts to guess the number <Text style={styles.heilightText}>{userNumber}</Text></Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
    </View>
  )
}

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: "hidden",
    margin: 36
  },
  summeryText: {
    fontFamily: "open-sans",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 24
  },
  heilightText: {
    fontFamily: "open-sans-bold",
    color: colors.primary500,
    fontWeight: "bold"
  }
})
export default GameOverScreen