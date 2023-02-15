import { useState } from "react"
import { Alert, StyleSheet, TextInput, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import colors from "../Constants/colors"

const StartGameScreen = ({onPickedNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('')

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText)
  }

  const confirmHanler = () => {

    const chosenNumber = parseInt(enteredNumber);
    if(isNaN(chosenNumber) || chosenNumber <=0  || chosenNumber > 99){
      Alert.alert(
        "Invalid Number",
        "Number must be between 0 and 99",
        [{text:"Okey",style:"destructive",onPress:()=> setEnteredNumber('')}]
      )
      return
    }
    onPickedNumber(chosenNumber)
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        value={enteredNumber}
        onChangeText={numberInputHandler} />
      <View style={styles.btnsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={()=> setEnteredNumber('')}>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={confirmHanler}>Confirm</PrimaryButton>
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
    backgroundColor:colors.primary800 ,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: colors.acent500,
    borderBottomWidth: 2,
    color: colors.acent500,
    fontWeight: "bold",
  }
});


export default StartGameScreen