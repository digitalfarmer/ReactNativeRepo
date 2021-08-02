import React, { useEffect, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Axios from "axios";



const ListContact =({nama, alamat, job, onPress,onDelete})=>{

  return(
    <View style={styles.listContact} >
      <Image style={styles.imgAvatar} source={{ uri: "http://placeimg.com/640/480/animals" }}/>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.viewList}>
          <Text style={styles.textNama}>{nama}</Text>
          <Text>{alamat}</Text>
          <Text>{job}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.btnDelete}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const CrudLocalApi =()=>{

  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [job, setJob] = useState("");
  const [users, setUsers]=useState([]);
  const [button,setButton]=useState("Save")
  const [selectedUser,setSelectedUser]=useState({});

  useEffect(()=>{
    getDataUser();
  })

  //create user to api/server
    const submit =()=>{
      const data={
          nama,
          alamat,
          job,
      }
      if(button === "Save"){
        //console.log("Data Before Sent", data)
        Axios.post("http://10.0.2.2:3000/users", data)
          .then(res => {
            //console.log(res);
              setNama("");
              setAlamat("");
              setJob("");
              //getDataUser();
          })
      }else if(button === "Update"){
        Axios.put(`http://10.0.2.2:3000/users/${selectedUser.id}`, data)
          .then(res=>{
            console.log("Data Updated");
            setNama("");
            setAlamat("");
            setJob("");
            setButton("Save");
          })
      }
    }

    //get Data user to API
    const getDataUser=()=>{
      Axios.get("http://10.0.2.2:3000/users")
        .then(res=>{
          //console.log("Get Data Users => ",res);
          setUsers(res.data)
        })
    }

    //select User to update
    const selectItem = (item) => {
       // console.log("=====Item Selected ======", item);
        setNama(item.nama);
        setAlamat(item.alamat);
        setJob(item.job);
        setButton("Update");
        setSelectedUser(item)
    }

    //Delete User
    const deleteUser=(item)=>{
      //console.log(item);
      Axios.delete(`http://10.0.2.2:3000/users/${item.id}`)
        .then(res=>{
          console.log(res);
        })

    }
    return (
      <ScrollView>
      <View style={styles.container}>
            <Text style={styles.textTitle}>Crud Using Local Server</Text>
        <Text>Contact Phone</Text>
        <View>
          <TextInput style={styles.inputText} placeholder={"Nama Lengkap"} value={nama} onChangeText={(value)=>setNama(value)}/>
          <TextInput style={styles.inputText} placeholder={"Alamat"} value={alamat} onChangeText={(value)=>setAlamat(value)}/>
          <TextInput style={styles.inputText} placeholder={"Pekerjaan"} value={job} onChangeText={(value)=>setJob(value)}/>
          <Button title={button} onPress={submit}/>
          <View style={styles.lines}></View>
          {users.map(user=>{
            return (
              <ListContact
                key={user.id}
                nama={user.nama}
                job={user.job}
                alamat={user.alamat}
                onDelete={()=>deleteUser(user)}
                onPress={()=>selectItem(user)
              }/>
            )
          })}
        </View>
      </View>
      </ScrollView>
    );

}

export default CrudLocalApi;
const styles= StyleSheet.create({
  viewList:{
    flex:1,
  },
  btnDelete:{
    color:"red",
    fontWeight:"bold",
    textAlign: "right",
    fontSize: 24,
  },
container:{
  padding:20,
},
  textTitle:{
    textAlign:'center',
    fontWeight:'bold'
  },
  inputText:{
  marginBottom:12,
    borderWidth:1,
    borderRadius:25,
    paddingHorizontal:18,
  },
  lines:{
  height:2,
    backgroundColor:'black',
    marginVertical:12,
  },
  imgAvatar:{
    width:64,
    height: 64,
    borderRadius: 34,
    marginRight:10,
  },
  listContact:{
  flexDirection:'row',
    marginTop:4,

  },
  textNama:{
  fontSize:22,
    fontWeight: 'bold',
  flex: 1,
  }
});
