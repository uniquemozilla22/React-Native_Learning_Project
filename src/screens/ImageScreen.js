import React from 'react'
import {Text, View ,StyleSheet} from 'react-native'
import ImageDetail from '../Component/imageDetail'
import {forest,mountain , beach} from '../images/Images'

const ImageScreen = () => {
    return (
        <View style={styles.view}>
            <ImageDetail title="Forest" image={forest} score="9"/>
            <ImageDetail title="Mountain" image={mountain} score="7"/>
            <ImageDetail title="Beach" image={beach} score ="3"/>
        </View>
    )
}

const styles = StyleSheet.create({

    view:{
        padding:10
    }
    
})

export default ImageScreen

