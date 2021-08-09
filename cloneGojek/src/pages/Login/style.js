import {StyleSheet} from 'react-native';

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

export default Styles;
