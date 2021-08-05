import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import {Colors} from '../../Utils';
import {InputComp} from '../../components';
import IconBack from '../../images/back.png';
import BannerIlustration from '../../images/assets.gif';


const Register = () => {
  return (
    <ScrollView>
      <View style={Styles.wrapper}>
        <View>
          <Image source={IconBack} style={Styles.buttonBack}/>
        </View>
        <View >
          <Image source={BannerIlustration} style={Styles.bannerIlustration}/>
        </View>
        <Text style={Styles.textHeader}>
          {' '}
          Lengkapi Data Berikut untuk Proses Registrasi
        </Text>
        <View style={Styles.space(34)} />
        <InputComp placeholder={'Nama Lengkap'} />
        <View style={Styles.space(12)} />
        <InputComp placeholder={'Email'} />
        <View style={Styles.space(12)} />
        <InputComp placeholder={'Password'} />
      </View>
    </ScrollView>
  );
};
export default Register;
const Styles = StyleSheet.create({
  space: value => {
    return {
      height: value,
    };
  },
  textHeader: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bannerIlustration: {
    marginTop: 8,
    height: 106,
    width: 190,
    

  },
  wrapper: {
    padding: 20,
  },
  buttonBack: {
    width: 25,
    height: 25,
  },
});
