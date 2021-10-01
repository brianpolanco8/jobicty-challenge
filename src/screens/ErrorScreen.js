import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WHITE } from '../utils/colors'
import AntIcon from "react-native-vector-icons/AntDesign";

const ErrorScreen = () => {
    return (
        <View style={styles.container}>
             <AntIcon
                style={{ marginHorizontal: 5 }}
                name={"frowno"}
                size={40}
                color={WHITE}
            />
            <Text style={styles.text}>Ups, something went wrong, please reload the app</Text>
        </View>
    )
}

export default ErrorScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    text: {
        color: WHITE,
        marginTop: 10,
        padding: 20
    }
})
