import { StyleSheet, TextInput, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" />
      <View style={styles.btnsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    padding: 16,
    backgroundColor: "#4e0329",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer:{
    flex:1
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddbf52",
    borderBottomWidth: 2,
    color: "#ddbf52",
    fontWeight: "bold",
  }
});


export default StartGameScreen