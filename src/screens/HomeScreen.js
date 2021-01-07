import React from "react";
import { Text, StyleSheet ,View,Button} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {

  return (  
  <View>
      <Text style={styles.text}>Hey there!</Text>
      <Button  onPress={()=>navigation.navigate('Components')} title="Go to Components"/>
      <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate('List')}>
        <Text>Go to List</Text>
      </TouchableOpacity><TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate('Image')}>
        <Text>Go to Image</Text>
      </TouchableOpacity>
  </View>
    
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button:{
    color:"white",
    backgroundColor:'skyblue',
    alignItems:'center',
    width:'100%',
    padding:10,
    marginTop:10,

  }
});

export default HomeScreen;
