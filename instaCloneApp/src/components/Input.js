import React from "react";
import {TextInput, View,StyleSheet} from 'react-native'

export default function Input(props){
    return(
        <View>
            <TextInput placeholder={props.title} style={styles.input}/>
        </View>
    )
}
const styles=StyleSheet.create({
    input: {
        borderColor: "darkgray",
        borderWidth: 1.5,
        padding: 4,
        width: 250,
        marginTop: 6,
        paddingLeft: 9,
        borderRadius: 4,
      }

})