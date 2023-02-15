import { StyleSheet, Text, View } from "react-native"
import colors from "../../Constants/colors"

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numText}>{children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: colors.acent500,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems:"center",
        justifyContent:"center",
    },
    numText: {
        color: colors.acent500,
        fontSize:24,
        fontWeight:"bold"
    }
})
export default NumberContainer