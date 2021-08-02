import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity, TouchableOpacityComponent,
  View,
} from "react-native";
import React from "react";
import macbook from "../../Assests/Images/macbook.jpg";

const Product =(props)=>{
  return(
    <View>

      <View style={styles.chart}>
        <Image source={macbook} style={{borderRadius: 8}} />
        <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 12}}>
          New Macbook Pro 2021
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 12,
            color: 'orange',
          }}>
          Rp 32.000.000,-
        </Text>
        <Text style={{fontSize: 24, fontWeight: '300', marginTop: 12}}>
          Bandung
        </Text>
        <TouchableNativeFeedback onPress={props.onButtonPress}>
            <View style={styles.buttonCart}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: '#f0f0f0',
                  textAlign: 'center',
                }}>
                BELI
              </Text>
            </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}
export default Product;



const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  chart: {
    marginTop: 5,
    backgroundColor: '#f2f2f2',
    padding: 12,
    width: 355,
    borderRadius: 10,
  },
  buttonCart: {
    borderRadius: 10,
    backgroundColor: '#6fcf97',
    paddingVertical: 6,
    marginTop: 20,
  },

});
