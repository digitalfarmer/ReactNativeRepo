import { Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { returnKeyType } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedTextInputPropTypes";

const FlexBox= ()=>{
  const [friends, setFriends] = useState(25);

  //component mounting
  useEffect(() => {
    console.log("->Component Didmount")

    setTimeout(()=>{
      setFriends(40);
    },3000);

    return ()=>{
      console.log('->component Did Update');
    }
    }, [friends]);

  //update component
  // useEffect(() => {
  //   setTimeout(()=>{
  //     setFriends(35);
  //   },2000);
  //   console.log('->Did Update');
  // }, [friends]);


  return (
    <View>
      <Text>Functional Component</Text>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#c1bdbd',
        }}>
        <View
          style={{
            backgroundColor: '#1c224b',
            width: 360,
            height: 40,
          }}
        />

      </View>
      <View
        style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://scontent.fbdo6-1.fna.fbcdn.net/v/t1.18169-9/15741057_10205801259510237_795086318038385156_n.jpg?_nc_cat=109&_nc_rgb565=1&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFXW2g2w4Q_jjQHR3husEa880NtJEW6DSbzQ20kRboNJlzMhp2RtAh4XdHhAVICUC0&_nc_ohc=1YzQ3PmgJJsAX9mPxFf&_nc_oc=AQlynox-4eXervm3Hhz73YpHKcQFB0cidrUOVbXfCJtomES41QTLAwO3x5KI3kMhBko&_nc_ht=scontent.fbdo6-1.fna&oh=9aa13b7666d18548be8bd607875c53b8&oe=6121E7C2',
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginRight: 10,
            borderColor: '#111',
          }}
        />
        <View style={{alignItems: 'baseline'}}>
          <Text style={{fontWeight: 'bold', fontSize: 24}}>Ade Setiawan</Text>
          <Text>i am is very secret for you know</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <Text>Post</Text>
        <Text>About</Text>
        <Text>Friend {friends}</Text>
        <Text>Other</Text>
      </View>
    </View>
  );
}

export default FlexBox;
