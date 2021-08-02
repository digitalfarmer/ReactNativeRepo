import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const Story =()=>{
  return(
    <View>
      <Text>Youtube Channel</Text>
      <View style={{flexDirection:"row", alignItems:"center"}}>
      <Image source={{
        uri: 'https://scontent.fbdo6-1.fna.fbcdn.net/v/t1.18169-9/15741057_10205801259510237_795086318038385156_n.jpg?_nc_cat=109&_nc_rgb565=1&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFXW2g2w4Q_jjQHR3husEa880NtJEW6DSbzQ20kRboNJlzMhp2RtAh4XdHhAVICUC0&_nc_ohc=1YzQ3PmgJJsAX9mPxFf&_nc_oc=AQlynox-4eXervm3Hhz73YpHKcQFB0cidrUOVbXfCJtomES41QTLAwO3x5KI3kMhBko&_nc_ht=scontent.fbdo6-1.fna&oh=9aa13b7666d18548be8bd607875c53b8&oe=6121E7C2',
      }}
             style={{width:100, height:100, borderRadius:50}}
      />
      <View>
        <Text style={{paddingLeft:20, fontSize:30,fontWeight:"bold"}}>Robot Ijo</Text>
      <Text style={{paddingLeft:20}}>200 Subscriber</Text></View>
      </View>
    </View>
  );
}
 const Playlist = props => {
   return(
     <View style={{alignItems:"center", justifyContent:"space-between", marginRight:20}}>

       <Image source={{
         uri: props.image,
       }}
              style={{width:80, height:80, borderRadius:80/2}}
       />
       <Text>{props.title}</Text>
     </View>
   );
 }

const PropsDinamis =()=> {

    return (
      <ScrollView>
        <View style={{height:50, width:360, backgroundColor:"#ec1b1b"}}>
          <Text
            style={{
              fontSize:24,
              textAlign:"center",
              color:"#f0f0f0"
            }}>Youtube</Text>
        </View>
        <Story/>
          <Text>Play List</Text>
        <ScrollView horizontal={true}
                    style={{
                      flexDirection:'row',
                    }}>
          <Playlist title="VueJs" image={"https://avatars.githubusercontent.com/u/6128107?s=200&v=4"}/>
          <Playlist title="ReactJs" image={"https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"}/>
          <Playlist title="Angular" image={"https://miro.medium.com/max/1176/1*15CYVZdpsxir8KLdxEZytg.png"}/>
          <Playlist title="Flutter" image={"https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png"}/>
          <Playlist title="EmberJs" image={"https://upload.wikimedia.org/wikipedia/en/6/69/Ember.js_Logo_and_Mascot.png"}/>
        </ScrollView>
      </ScrollView>
    );

}

export default PropsDinamis;
