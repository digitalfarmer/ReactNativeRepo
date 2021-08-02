import {Image, Text, TextInput, View} from 'react-native';
import React, {Component} from 'react';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 200, height: 80, backgroundColor: '#5758BB'}} />
      <Text>Hello React</Text>
      <Ades />
      <Text>Made by React Native</Text>
      <TextGreen />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <Profile style={{borderRadius: 5}} />
    </View>
  );
};

const Ades = () => {
  return <Text>Robot Ijo</Text>;
};

class TextGreen extends Component {
  render() {
    return <Text style={{color: 'blue'}}>Component Class</Text>;
  }
}

const Photo = () => {
  return (
    <Image
      source={{uri: 'http://placeimg.com/640/480/tech'}}
      style={{width: 200, height: 100}}
    />
  );
};

class Profile extends Component {
  render() {
    return (
      <>
        <Image
          source={{uri: 'http://placeimg.com/640/480/people'}}
          style={{width: 100, height: 100}}
        />
        <Text>Name : Jhon Ramboo</Text>
      </>
    );
  }
}
export default SampleComponent;
