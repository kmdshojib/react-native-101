import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'
import { Alert } from 'react-native';


const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}
let minBoundery = 1
let maxBoundery = 99


const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])

    const nextGussHandler = (direction) => {

        if ((direction === "loweer" && currentGuess < userNumber) || (direction === "greater" && currentGuess > userNumber)) {
            Alert.alert("Worng number", [{ text: "okey", style: "cancle" }])
            return
        }
        if (direction === "lower") {
            maxBoundery = currentGuess - 1
        } else {
            minBoundery = currentGuess + 1;
        }
        const newRand = generateRandomBetween(minBoundery, maxBoundery, currentGuess)
        setCurrentGuess(newRand)
    }
    return (
        <View style={styles.screen}>
            <Title>Oponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGussHandler.bind(this, "lower")}>-</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGussHandler.bind(this, "greater")}>+</PrimaryButton>
                    </View>
                </View>
            </View>
            {/* <View>
                <Text>Log Rounds!</Text>
            </View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    },
    screen: {
        flex: 1,
        padding: 24
    },

})
export default GameScreen