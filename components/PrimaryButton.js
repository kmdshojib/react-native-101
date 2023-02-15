import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

import colors from '../Constants/colors'

const PrimaryButton = ({ children, onPress }) => {
  return (

    <View style={styles.btnOuterContainer}>
      <Pressable style={({pressed})=>pressed ?[styles.btnContainer,styles.pressed] :styles.btnContainer} onPress={onPress} android_ripple={{ color: colors.primary600 }}>
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>

  )
}

const styles = StyleSheet.create({
  btnOuterContainer:{
    borderRadius: 28,
    margin:4,
    overflow:"hidden"
  },
  btnContainer: {
    backgroundColor:colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2
  },
  btnText: {
    color: "#ffff",
    textAlign: "center",
  },
  pressed:{
    opacity: 0.75
  }
})

export default PrimaryButton