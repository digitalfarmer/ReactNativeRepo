import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class FlexBoxComponent extends Component {
  constructor(props) {
    super(props);
    console.log('==> constructor :');
    this.state = {
      friends: 21,
    };
  }
  componentDidMount() {
    console.log('==> ComponentDidmount');
    setTimeout(() => {
      this.setState({
        friends: 23,
      });
    }, 2000);
  }
  componentDidUpdate() {
    console.log('==> ComponentDidUpdate');
  }
  componentWillUnmount() {
    console.log("===> comoponent Unmount");
  }

  render() {
    console.log('===> Render:');
    return (
      <View>
        <Text>Grafik Anka Kelahiran</Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c1bdbd',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: '#f30606',
              width: 50,
              height: 40,
            }}
          />
          <View style={{backgroundColor: '#fae209', width: 50, height: 60}} />
          <View style={{backgroundColor: '#59f306', width: 50, height: 80}} />
          <View style={{backgroundColor: '#0641f3', width: 50, height: 100}} />
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
          <Text>Friend {this.state.friends}</Text>
          <Text>Other</Text>
        </View>
      </View>
    );
  }
}
export default FlexBoxComponent;
