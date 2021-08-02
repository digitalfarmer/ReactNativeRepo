import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Curve from '../../Assests/Images/curve.svg';
const ImageSvg =()=> {

    return (
      <View style={styles.container}>
        <Text style={styles.textCenter}>Use Image SVG</Text>
        <Curve width={300} height={150}/>
      </View>
    );
}

export default ImageSvg;
const styles = StyleSheet.create({
 textCenter:{
   textAlign:"center",
 },
  container:{
   padding:20,
  }
});
