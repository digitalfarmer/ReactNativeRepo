import React from 'react';
import {Text, View} from 'react-native';
import Odoo from 'react-native-odoo';

//odoo config
const odoo = new Odoo({
  host: '192.168.56.1',
  port: 8069,
  database: 'adesdev',
  username: 'admin',
  password: 'admin',
});

//connct server
odoo.connect(function (err) {
  if (err) {
    return console.log(err);
  }
});

//param
const params = {
  ids: [1,2,3,4,5],
  fields: ['name','email'],
}; //params

odoo.get('res.partner', params,function (err, partners) {
  if (err) {
    return console.log(err);
  }
  console.log(partners);
}); //get

const Main = () => {
  return (
    <View>
      <Text>Blue Print Odoo App</Text>
    </View>
  );
};
export default Main;
