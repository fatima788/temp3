import React from "react";
import {TextInput, View,StyleSheet, Pressable, Image} from 'react-native'

export default function AppBtn(props){
    return(
        <Pressable>
            <Image source={{uri:props.path}} style={{height:40, width:130}} />

        </Pressable>
    )
}