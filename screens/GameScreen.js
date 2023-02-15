import React, { useState } from 'react'
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


const GameScreen = ({ userNumber }) => {
    const initialGuess = generateRandomBetween(minBoundery, maxBoundery, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    const nextGussHandler = (direction) => {

        if ((direction === "loweer" && currentGuess < userNumber) || (direction === "greater" && currentGuess > userNumber)) {
            Alert.alert("Worng number",{text:"okey", style:"cancle"})
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
                <View>
                    <PrimaryButton onPress={nextGussHandler.bind(this, "lower")}>+</PrimaryButton>
                    <PrimaryButton onPress={nextGussHandler.bind(this, "greater")}>-</PrimaryButton>
                </View>
            </View>
            {/* <View>
                <Text>Log Rounds!</Text>
            </View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },

})
export default GameScreen