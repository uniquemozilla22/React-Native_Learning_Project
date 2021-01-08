import React,{useState} from 'react'
import {View, StyleSheet,Text, TouchableOpacity} from 'react-native'
import ColorCounter from '../Component/ColorCounter'

const colorSquareScreen = () => {

    const [Red,setRed] = useState(255)
    const [Green,setGreen] = useState(255)
    const [Blue,setBlue] = useState(255)
    


    const adder =(color)=>{
        let number = Math.round(Math.random()*256)
        if(color==='red'){
            let colorCode= number + Red            
            if(colorCode>255){
                setRed(255)
            }
            else{
                setRed(colorCode)
            }

        }else if(color==='green'){
            let colorCode= number + Green            
            if(colorCode>255){
                setGreen(255)
            }
            else{
                setGreen(colorCode)
            }
        }else if(color==='blue'){
            let colorCode= number + Blue            
            if(colorCode>255){
                setBlue(255)
            }
            else{
                setBlue(colorCode)
            }
        }

    }
    const deducter =(color)=>{
        let number = Math.round(Math.random()*256)
        if(color==='red'){
            let colorCode= number - Red            
            if(colorCode<0){
                setRed(0)
            }
            else{
                setRed(colorCode)
            }

        }else if(color==='green'){
            let colorCode= number - Green            
            if(colorCode<0){
                setGreen(0)
            }
            else{
                setGreen(colorCode)
            }
        }else if(color==='blue'){
            let colorCode= number - Blue            
            if(colorCode<0){
                setBlue(0)
            }
            else{
                setBlue(colorCode)
            }
        }


    }
    const Color=`rgb(${Red},${Green},${Blue})`
    
    return (
        <>
        <ColorCounter color='red' functionToAdd={adder} functionToDeduct={deducter}/>
        <ColorCounter color='green' functionToAdd={adder} functionToDeduct={deducter}/>
        <ColorCounter color='blue' functionToAdd={adder} functionToDeduct={deducter}/>        
        <View style={{height:100,width:"100%",backgroundColor:Color,paddingHorizontal:"35%"}}>
            <Text>{Color}</Text>
        </View>
            
        </>
    )
}

const styles = StyleSheet.create({
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

export default colorSquareScreen
