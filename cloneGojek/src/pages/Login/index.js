import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../Utils';
import {InputComp} from '../../components';

const Login = () => {
  return (
    <View style={Styles.wrapper}>
      <View style={Styles.buttonBack} />
      <View style={Styles.bannerIlustration} />
      <Text style={Styles.textHeader}>
        {' '}
        Lengkapi Data Berikut untuk Proses Registrasi
      </Text>

      <InputComp />
      <InputComp />
      <InputComp />
    </View>
  );
};
export default Login;
const Styles = StyleSheet.create({
  textHeader: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bannerIlustration: {
    marginTop: 8,
    height: 106,
    width: 115,
    backgroundColor: Colors.disable,
  },
  wrapper: {
    padding: 20,
  },
  buttonBack: {
    width: 25,
    height: 25,
    backgroundColor: Colors.default,
  },
});
