import React from 'react';
import {Image, TouchableHighlight, View} from 'react-native';
import IconBack from '../../../images/back.png';
import Styles from '../../../pages/Login/style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ButtonIcon = (...rest) => {
  return (
    <TouchableOpacity {...rest}>
      <Image source={IconBack} style={Styles.buttonBack} />
    </TouchableOpacity>
  );
};
export default ButtonIcon;
