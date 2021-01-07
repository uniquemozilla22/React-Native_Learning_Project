import React,{useState} from 'react'
import {Text,View , StyleSheet, TouchableOpacity} from 'react-native'
import CounterView from '../Component/CounterView';

const ValueChanger = () => {
    const [counter,setCounter] =useState(0);

    const increment=()=>{
        setCounter(counter+1);
    }
    const decrement=()=>{
        setCounter(counter-1);
    }
    return (
        <View>
            <TouchableOpacity style={styles.increment} onPress={increment}><Text>Increment</Text></TouchableOpacity>
            <TouchableOpacity style={styles.decrement}  onPress={decrement}><Text >Decrement</Text></TouchableOpacity>
            <CounterView value={counter}/>
        </View>
    )
}

const styles= StyleSheet.create({

    increment:{
        backgroundColor:"green",
        padding:30,
        paddingHorizontal:"40%"
    },
    decrement:{
        backgroundColor:"red",
        padding:40,
        paddingHorizontal:"40%"
        
    }
    
})

export default ValueChanger
