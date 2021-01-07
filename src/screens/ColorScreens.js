import React from 'react'
import { useState } from 'react'
import {Text,View, StyleSheet,TouchableOpacity, FlatList} from 'react-native'


const ColorScreens = () => {

    const [Colors,setColors]=useState([])

    
    const addColor=()=>{
        setColors([...Colors,generateColor()])
    }    

    
    return (
        <View >
           <TouchableOpacity style={styles.button} onPress={addColor}>
               <Text style={styles.text}>Add Color</Text>
            </TouchableOpacity>
           <FlatList data={Colors} keyExtractor={(item)=>item} 
           renderItem={({item})=>{
            return <View style={{backgroundColor:item,width:100,height:100}}/>
           }}/>
        </View>
    )
}

const generateColor =()=>{

    const red = Math.round(Math.random()*255)
    const green = Math.round(Math.random()*255)
    const blue = Math.round(Math.random()*255)


    return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({
    button:{
        fontSize:15,
        backgroundColor:'green',
        paddingVertical:20
        
    },
    text:{
        color:'white',
        alignItems:'center',
        paddingHorizontal:"40%"
    }
})

export default ColorScreens
