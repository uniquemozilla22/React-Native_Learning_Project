import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'

const CounterView = ({value}) => {
    return (
        <View style={styles.counterView}>
            <Text style={styles.counterText}>Counter:<Text style={styles.counterValue}>{value}</Text></Text>
        </View>
    )
}

const styles= StyleSheet.create({
    counterView:{
        padding:30,
        paddingHorizontal:"35%"
    },
    counterText:{
        fontSize:20,
    },
    counterValue:{
        color:"blue",
        fontSize:30
    }
})

export default CounterView
