import React from 'react';
import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../../../Utils";

const  InputComp=({placeholder})=>{
  return(
    <View>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor={Colors.default}
      />
    </View>
  )
}

export default InputComp;

const styles = StyleSheet.create({
  inputText:{
    borderWidth:1,
    borderColor:Colors.default,
    borderRadius:25,
    paddingVertical:12,
    paddingHorizontal:18,
    fontSize:14,
    color:Colors.default
  }
})
