import { StyleSheet, Text, View } from "react-native"

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
        color:"#ddb52f",
        padding: 12
    }
})
export default Title