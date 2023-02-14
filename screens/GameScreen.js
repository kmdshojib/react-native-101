import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Title from '../components/Title'

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Title>Oponent's Guess</Title>
            <View>
                <Text>Higher or lower?</Text>
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