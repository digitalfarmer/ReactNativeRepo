import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActionButton from './ActionButton';
import {Colors} from '../../Utils';
import Home from '../../images/home.png';

const WelcomeAuth = ({ navigation }) => {
  const handleGoto = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapper}>
      <Image source={Home} style={styles.banner} />
      <Text style={styles.textTitle}>Selamat Datang di O-Jol</Text>

      <ActionButton
        label={'Silakan Masuk jika sudah memiliki account'}
        button={'MASUK'}
        onPress={() => handleGoto('Login')}
      />
      <ActionButton
        label={'Login kalau sudah memiliki account'}
        button={'DAFTAR'}
        onPress={() => handleGoto('Register')}
      />
    </View>
  );
};
export default WelcomeAuth;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  banner: {
    width: 219,
    height: 117,
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.default,
    marginBottom: 76,
  },
});
