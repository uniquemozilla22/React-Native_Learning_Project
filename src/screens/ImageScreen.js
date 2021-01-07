import React from 'react'
import {Text, View ,StyleSheet} from 'react-native'
import ImageDetail from '../Component/imageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Beach" image="Beach image"/>
            <ImageDetail title="Crow" image="Crow Image"/>
            <ImageDetail title="Branch" image="Branch Image"/>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default ImageScreen

