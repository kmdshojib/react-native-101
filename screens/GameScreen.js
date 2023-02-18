import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'
import { Alert } from 'react-native';
import colors from '../Constants/colors'


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

        if ((direction === "lower" && currentGuess < userNumber) || (direction === "greater" && currentGuess > userNumber)) {
            return Alert.alert("Worng number", [{ text: "okey", style: "cancle" }])
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
                <Text style={styles.insTuctionText}>Higher or lower?</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGussHandler.bind(this, "lower")}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGussHandler.bind(this, "greater")}>
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
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
    insTuctionText: {
        color: colors.acent500,
        fontSize: 24,
        marginBottom: 5,
        marginLeft: 5
    }

})
export default GameScreen