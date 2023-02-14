import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

const PrimaryButton = ({ children, onPress }) => {


  return (

    <View style={styles.btnOuterContainer}>
      <Pressable style={({pressed})=>pressed ?[styles.btnContainer,styles.pressed] :styles.btnContainer} onPress={onPress} android_ripple={{ color: "#640233" }}>
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
    backgroundColor: "#72063c",
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