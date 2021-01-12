import React,{useState,useReducer}from 'react'
import {View, StyleSheet,Text,TextInput, TouchableOpacity} from 'react-native'
import ColorCounter from '../Component/ColorCounter'


const reducer =(state,action)=>{
    let sum = state.red + action.amount
    switch(action.colorToChange){
        case 'red':{
            
            return sum>=256||sum<0 ?  state : {...state, red:sum}
        }
        case 'green':{
            return sum>=256||sum<0 ?  state : {...state, green:sum}

        }
        case 'blue':{
            return sum>=256||sum<0 ?  state : {...state, blue:sum}

        }
        default:
            return state
    }
}


const colorSquareScreen = () => { 
    const [state,dispatch]=useReducer(reducer,{red:0,green:0,blue:0})
    const {red, green,blue}=state
    const [Color_increment,setColor_increment] = useState(50)



 
    const Color=`rgb(${red},${green},${blue})` 
    
    return (
        <>
        
        <TextInput onChange={(e)=>setColor_increment(e.target.value)} style={styles.textInput}/>
        <ColorCounter color='red' functionToAdd={()=> dispatch({colorToChange:"red" , amount:Color_increment})} functionToDeduct={()=> dispatch({colorToChange:"red" , amount:-1 * Color_increment})}/>
        <ColorCounter color='green' functionToAdd={()=> dispatch({colorToChange:"green" , amount:Color_increment})} functionToDeduct={()=> dispatch({colorToChange:"green" , amount:-1 * Color_increment})}/>
        <ColorCounter color='blue' functionToAdd={()=> dispatch({colorToChange:"blue" , amount:Color_increment})} functionToDeduct={()=> dispatch({colorToChange:"blue" , amount:-1 * Color_increment})}/>        
        <View style={{height:100,width:"100%",backgroundColor:Color,paddingHorizontal:"35%"}}>
            <Text>{Color}</Text>
        </View>
            
        </>
    )
}

const styles = StyleSheet.create({
    
    textInput:{
        color:'black',
        backgroundColor:'white'
    },
    
})

export default colorSquareScreen
