import React from 'react'
import {Text, View ,StyleSheet} from 'react-native'
import ImageDetail from '../Component/imageDetail'
import {forest,mountain , beach} from '../images/Images'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" image={forest}/>
            <ImageDetail title="Mountain" image={mountain}/>
            <ImageDetail title="Beach" image={beach}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default ImageScreen

