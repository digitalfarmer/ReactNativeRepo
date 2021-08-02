import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Cart from "../../Component/Cart";
import Product from "../../Component/Products";

const Communication =()=> {
    const [qtyCart, setqtyCart]= useState(0);
    return (
      <View>
        <View style={styles.headerPage}>
          <Text style={styles.textHeader}>Checkout</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.textTitle}>Communication antar Component</Text>
        </View>
        <Cart qty={qtyCart}/>
        <Product onButtonPress={()=>setqtyCart(qtyCart+1)}/>
      </View>
    );

}

export default Communication;

const styles = StyleSheet.create({
  container:{
    padding:20,
  },
  textTitle:{
    textAlign:"center",
  },
  headerPage:{
    paddingVertical: 10,
    backgroundColor: '#423de1',
  },
  textHeader:{
    color:'#f0f0f0',
    paddingLeft:10,
    fontWeight:'bold',
    fontSize:18,
  }
});
