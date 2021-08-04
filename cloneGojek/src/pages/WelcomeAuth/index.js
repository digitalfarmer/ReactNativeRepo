import React from 'react';
import { StyleSheet, Text,  TouchableOpacity, View } from "react-native";

const ActionButton =({label, button})=>{
  return(
    <View style={styles.viewButton}>
      <Text style={styles.textLabel}>{label}</Text>
      <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.textButton}>{button}</Text>
      </TouchableOpacity>
    </View>
  );
}

const WelcomeAuth =()=>{
  return(
    <View style={styles.wrapper}>
      <View style={styles.banner}>
      </View>
        <Text style={styles.textTitle}>Selamat Datang di O-Jol</Text>

      <ActionButton label={"Silakan Masuk jika sudah memiliki account"} button={"MASUK"}/>
      <ActionButton label={"Login kalau sudah memiliki account"} button={"DAFTAR"}/>
    </View>
  );
}
export default WelcomeAuth;

const styles = StyleSheet.create({
  wrapper:{
    alignItems:'center',
    flex:1,
    justifyContent:'center',
    backgroundColor:'white'
  },
  viewButton:{
    marginBottom:43,
    maxWidth:225,

  },
  banner:{
    width:219,
    height:117,
    backgroundColor:'#A55eea',
    marginBottom: 10,
  },
  textTitle:{
    fontSize:18,
    fontWeight:'bold',
    color:'#A55eea',
    marginBottom: 76,
  },
  textLabel:{
    color: '#7e7e7e',
    fontSize:10,
    textAlign: 'center',
  },
  actionButton:{
    backgroundColor: '#A55eea',
    borderRadius:25,
    paddingVertical:13,
  },
  textButton:{
    color:'white',
    fontSize:12,
    fontWeight: 'bold',
    textTransform:'uppercase',
    textAlign:'center',
    
  }
});
