import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Styles from './styles.json'

const ComponentScreens = () => {

    let printing_word ="This is the ascreen of the componenet"
    return (
        <Text style ={styles.textStyle}>
            {printing_word}
        </Text>
    )
}

const styles=StyleSheet.create({...Styles.ComponentScreens,
    


    });

export default ComponentScreens
