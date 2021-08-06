import React, { useState} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {InputComp} from '../../components';
import IconBack from '../../images/back.png';
import BannerIlustration from '../../images/assets.gif';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };
  const sendData = () => {
    console.log('Kirim Data', form);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.wrapper}>
        <View>
          <Image source={IconBack} style={Styles.buttonBack} />
        </View>
        <View>
          <Image source={BannerIlustration} style={Styles.bannerIlustration} />
        </View>
        <Text style={Styles.textHeader}>
          {' '}
          Lengkapi Data Berikut untuk Proses Registrasi
        </Text>
        <View style={Styles.space(34)} />
        <InputComp
          placeholder={'Nama Lengkap'}
          value={form.fullName}
          onChangeText={value => onInputChange(value, 'fullName')}
        />
        <View style={Styles.space(12)} />
        <InputComp
          placeholder={'Email'}
          value={form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <View style={Styles.space(12)} />
        <InputComp
          placeholder={'Password'}
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={Styles.space(12)} />
        <Button title={'Daftar'} onPress={sendData} />
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
