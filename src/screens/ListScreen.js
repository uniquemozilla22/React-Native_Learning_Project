import React from 'react'
import {View ,StyleSheet,Text,FlatList} from 'react-native'

const ListScreen = () => {

    const friends =[
        {name:'friend #1',age:"20",key:'1'},
        {name:'friend #2',age:"21",key:'2'},
        {name:'friend #3',age:"23",key:'3'},
        {name:'friend #4',age:"24",key:'4'},
        {name:'friend #5',age:"20",key:'5'},
        {name:'friend #6',age:"07",key:'6'},
        {name:'friend #7',age:"19",key:'7'},
        {name:'friend #8',age:"18",key:'8'},
        {name:'friend #9',age:"19",key:'9'}

    ]

    let rendering =(item) =>{
        return(
            <Text style ={styles.textStyle} key={item.key}>{item.name} - Age: {item.age}</Text>
        ) ;
    }

    return (
        <FlatList style ={styles.listingStyle} showsVerticalScrollIndicator={false} data={friends} renderItem={({item})=>rendering(item)}/>
    )
}
const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 30,
        textAlign: 'center',
        color:'white',
        fontWeight:"900"
        
    },
    listingStyle:{
        width:'100%',
        backgroundColor:"skyblue"
    }
})
export default ListScreen
