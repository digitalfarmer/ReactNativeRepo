import React, { Component, useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const CallingApiVanila =()=>{

  const [dataUser, setDataUser]= useState({
    avatar:'https://scontent.fbdo6-1.fna.fbcdn.net/v/t1.18169-9/12375986_10203687190779840_5511552836917155205_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_eui2=AeGZGh7kPr6Sswv7GATPNS0BiofUGyuT5KiKh9QbK5PkqCblVmrXTDzXJMa8CihBI7E&_nc_ohc=uvb1WuhgCkMAX-5WbqP&_nc_ht=scontent.fbdo6-1.fna&oh=111c3409f2f9ed83c15c0fa50323df9a&oe=6128B860',
    first_name:'',
    last_name:'',
    email:'',
  });

  const [userJob, setUserJob] =useState({
    name:'',
    job:'',
    createdAt:'',
  });
  useEffect(()=>{
    //Call Api Method GET
    // fetch('https://reqres.in/api/users/6')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
    //
    // //Call Api Methods POST
    // const postUser ={
    //   name:'Ades',
    //   job:'TukangKetik',
    // }
    // console.log("==> Data : ", postUser);
    // console.log("==> DataStringify : ", JSON.stringify(postUser));
    // fetch('https://reqres.in/api/users',{
    //   method:"POST",
    //   headers:{
    //     'Content-Type':'application/json'
    //   },
    //   body:JSON.stringify(postUser)
    // })
    //   .then(response=> response.json())
    //   .then(json=>console.log("Response POST",json))
  },[]);

  const getDataSingle=()=>{
    fetch('https://reqres.in/api/users/9')
      .then(response => response.json())
      .then(json =>{
        console.log(json),
        setDataUser(json.data)
      }
      );
  }

  const postDataToServer =()=>{
    const postUser ={
        name:'LobotIjo',
        job:'Tukang Ketik',
      }
      fetch('https://reqres.in/api/users',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(postUser)
      })
        .then(response=> response.json())
        .then(json=> {
          console.log("Response POST", json),
            setUserJob(json)
        })

  }
    return (
      <View style={styles.container}>
        <Text style={styles.textCenter}>Calling Data from Api</Text>
        <Button title={'Get Data'} onPress={getDataSingle}/>
        <Text>Response Get Data</Text>
          <View>
            <View style={styles.viewAvatar}>
              <Image source={{uri: dataUser.avatar }} style={styles.avatar}/>
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

export default CallingApiVanila;

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
