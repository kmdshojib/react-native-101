import { StyleSheet, Text } from "react-native"

const Title = ({ children }) => {
    return (
        <Text style={styles.title}>{children}</Text>

    )
}
const styles = StyleSheet.create({

    title:{
        fontSize:18,
        textAlign:"center",
        fontWeight:"bold",
        color:"white",
        padding: 12,
        fontFamily:"open-sans-bold",
        color:"white",
        maxWidth:"80%",
    }
})
export default Title