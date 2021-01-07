import React from 'react'
import {Text, View ,StyleSheet,Image} from 'react-native'

const ImageDetail = (props) => {
    return (
        <View style={styles.card}>
            <Image style ={styles.image} source={props.image}/>
            <Text style ={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection:'row',

    },
    image:{
        width:"40%",
        margin:20,
        alignItems:"center",
        borderRadius:50

    },
    title:{
        width:"60%",
        fontWeight:"900",
        alignItems:"center",
        fontSize:24,
        padding:40
    }
})

export default ImageDetail
