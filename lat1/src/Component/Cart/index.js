import {Image, StyleSheet, Text, View} from 'react-native';
import cart from '../../Assests/Images/cart.jpg';
import React, {Component} from 'react';

const Cart = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>{props.qty}</Text>
      </View>
    </View>
  );
};
export default Cart;

const styles = StyleSheet.create({
  notif: {
    fontSize: 12,
    color: '#f0f0f0',
    backgroundColor: '#fd620e',
    borderRadius: 25,
    padding: 4,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 1,
    right: 0,
  },
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  iconWrapper: {
    borderWidth: 1,
    borderColor: '#0a44d7',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCart: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
