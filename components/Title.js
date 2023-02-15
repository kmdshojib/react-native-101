import { StyleSheet, Text, View } from "react-native"
import colors from "../Constants/colors"

const Title = ({ childen }) => {
    return (
        <Text style={styles.title}>Oponent's Guess</Text>

    )
}
const styles = StyleSheet.create({

    title:{
        fontSize:18,
        textAlign:"center",
        fontWeight:"bold",
        color:"white",
        padding: 12
    }
})
export default Title