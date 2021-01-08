import React from 'react'
import {Text,View, StyleSheet,TouchableOpacity} from 'react-native'

const ColorCounter = (props) => {
    return (
        <View style={styles.btnView}>
            <Text>{props.color.toUpperCase()}</Text>
            <TouchableOpacity style={styles.greenBtn} onPress={()=>props.functionToAdd(props.color)}><Text style={styles.text}>More {props.color}</Text></TouchableOpacity>
            <TouchableOpacity style={styles.redBtn}  onPress={()=>props.functionToDeduct(props.color)}><Text style={styles.text}>Less {props.color}</Text></TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    btnView:{
        marginVertical:10
    },
    greenBtn:{
        fontSize:15,
        backgroundColor:'green',
        paddingVertical:20
    },
    redBtn:{
        fontSize:15,
        backgroundColor:'red',
        paddingVertical:20
    },
    text:{
        color:'white',
        alignItems:'center',
        paddingHorizontal:"40%"
    },
})

export default ColorCounter
