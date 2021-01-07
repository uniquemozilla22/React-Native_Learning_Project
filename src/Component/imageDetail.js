import React from 'react'
import {Text, View ,StyleSheet,Image} from 'react-native'

const ImageDetail = (props) => {
    return (
        <View style={styles.card}>
            <Image style ={styles.image} source={props.image}/>
            <View style ={styles.titleView}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.score}>The image score :- {props.score}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        marginVertical:20
    },
    image:{
        width:"40%",
        borderRadius:50,

    },
    titleView:{
        width:"60%",
        alignItems:"center",
        fontSize:24,
    },
    title:{
        color:"blue",
        fontSize:20,
        padding:20,

    },
    score:{
        color:"red"
    }
})

export default ImageDetail
