import {Image, StyleSheet, Text, View} from 'react-native';
import cart from '../../Assests/Images/cart.jpg';
import React, {Component} from 'react';

const PositionReactNative = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};
export default PositionReactNative;

const styles = StyleSheet.create({
  notif: {
    fontSize: 12,
    color: '#f0f0f0',
    backgroundColor: '#fd0e0e',
    borderRadius: 25,
    padding: 4,
    width: 24,
    textAlign:'center',
    height: 24,
    position: 'absolute',
    top: 20,
    right: 0,
  },
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  iconWrapper: {
    borderWidth: 1,
    borderColor: '#0a44d7',
    width: 100,
    height: 100,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCart: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
