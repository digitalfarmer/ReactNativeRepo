import React, { Component, useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import  Axios from 'axios';

const CallApiAxios =()=>{

  const [dataUser, setDataUser]= useState({
    avatar:'',
    first_name:'',
    last_name:'',
    email:'',
  });

  const [userJob, setUserJob] =useState({
    name:'',
    job:'',
    createdAt:'',
  });

  const getDataSingle=()=>{
    Axios.get('https://reqres.in/api/users/12')
      .then(result => {
        console.log("Result == ", result),
          setDataUser(result.data.data);
      })
      .catch(err => console.log('Error =',err ));
  }

  const postDataToServer =()=>{

    const postUser ={
      name:'Tukang Ketik',
      job:'Jasa Pengetikan',
    }
    // fetch('https://reqres.in/api/users',{
    //   method:"POST",
    //   headers:{
    //     'Content-Type':'application/json'
    //   },
    //   body:JSON.stringify(postUser)
    // })
    //   .then(response=> response.json())
    //   .then(json=> {
    //     console.log("Response POST", json),
    //       setUserJob(json)
    //   })
    Axios.post('https://reqres.in/api/users',postUser)
      .then(result=> {
        console.log("Post Result L", result),
          setUserJob(result.data)
        ;
      })
      .catch(err=>console.log("Error : ", err));

  }
  return (
    <View style={styles.container}>
      <Text style={styles.textCenter}>Calling Data Using Axios</Text>
      <Button title={'Get Data'} onPress={getDataSingle}/>
      <Text>Response Get Data</Text>
      <View>
        <View style={styles.viewAvatar}>
          {dataUser.avatar.length > 0 &&(
            <Image source={{uri: dataUser.avatar }} style={styles.avatar}/>
          )}
        </View>
        <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
        <Text>{dataUser.email}</Text>
      </View>
      <View style={styles.lines}/>
      <Button title={'Post Data'} onPress={postDataToServer}/>
      <Text>Response POST Data</Text>
      <Text>{userJob.name}</Text>
      <Text>{userJob.job}</Text>
      <Text>{userJob.createdAt}</Text>
    </View>
  );

}

export default CallApiAxios;

const styles = StyleSheet.create({
  textCenter:{
    textAlign:"center",
    fontWeight:'bold',
  },
  container:{
    padding:20,
  },
  lines:{
    marginVertical:20,
    width:340,
    height:2,
    backgroundColor:'#0c0c0c'
  },
  avatar:{
    width: 100,
    height: 100,
    borderRadius:50,
  },
  viewAvatar:{
    alignItems:'center'
  }
});
