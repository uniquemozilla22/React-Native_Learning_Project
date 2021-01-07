import React from 'react'
import {Text, View ,StyleSheet} from 'react-native'

const ImageDetail = (props) => {
    return (
        <View style={styles.card}>
            <Text style ={styles.image}>{props.image}</Text>
            <Text style ={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        marginVertical:40,
        borderStyle:'solid'

    },
    image:{
        width:"40%",
        margin:20,
        backgroundColor:"red",
        alignItems:"center"

    },
    title:{
        width:"60%",
        padding:40,
        backgroundColor:"red",
        alignItems:"center"

    }
})

export default ImageDetail
