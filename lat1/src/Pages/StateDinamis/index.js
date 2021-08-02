import { Button, StyleSheet, Text, View } from "react-native";
import React, { Component, useState } from "react";

const Counter =()=>{
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text style={styles.textNumber}>{number}</Text>
      <Button title={"Tambah"} onPress={()=>setNumber(number+1)} />
    </View>
  );
}
class CounterClass extends Component{
  state={
    number:1
  }
  render(){
    return(
      <View>
        <Text style={styles.textNumber}>{this.state.number}</Text>
        <Button title={"Add"} onPress={()=>this.setState({number:this.state.number+1})} />
      </View>
    );
  }
}
const StateDinamis =()=>{

    return (
     <View style={styles.wrapper}>
       <Text style={styles.textTitle}>State Dinamis</Text>
       <Text>Functional Component (Hook)</Text>
       <Counter/>

       <Text>Class Component</Text>
       <CounterClass/>
     </View>
    );

}
export default StateDinamis;

const styles = StyleSheet.create({
  wrapper:{
    padding:20,
  },
  textTitle:{
    textAlign:"center",

  },
  textNumber:{
    fontSize:100,
    color:'#144fe0',
    textAlign: "center",
  }
});
