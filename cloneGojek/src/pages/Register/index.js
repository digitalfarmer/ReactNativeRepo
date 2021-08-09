import React, {useEffect, useState} from 'react';
import {Button, Image, ScrollView, Text, View} from 'react-native';
import {InputComp} from '../../components';
import IconBack from '../../images/back.png';
import BannerIlustration from '../../images/assets.gif';
import Styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {setForm} from '../../redux';

const Register = () => {
  const {form} = useSelector(state => state.RegisterReducer);
  const dispacth = useDispatch();
  useEffect(() => {
    console.log(form);
  }, [form]);

  // const [form, setForm] = useState({
  //   fullName: '',
  //   email: '',
  //   password: '',
  // });

  const onInputChange = (value, inputType) => {
    // setForm({
    //   ...form,
    //   [input]: value,
    // });
    dispacth(setForm(inputType, value));
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
          Lengkapi Data Berikut untuk Proses Registrasi {form.title}
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
