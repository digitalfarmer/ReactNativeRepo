import {Text, View} from 'react-native';
import React from 'react';
import Odoo from 'react-native-odoo';

const odoo = new Odoo({
  host: '192.168.21.191',
  port: 8069,
  database: 'adesdev',
  username: 'admin',
  password: 'admin',
});

odoo.connect(function (err) {
  if (err) {
    return console.log(err);
  }
});

var params = {
  // ids: [1, 2, 3, 4, 5],
  fields: ['name','phone'],
}; //params

odoo.browse_by_id('res.partner', params, function (err, partners) {
  if (err) {
    return console.log(err);
  }

  console.log(partners);
  // [
  //   { id: 1, name: 'Demo Company' },
  //   { id: 3, name: 'Administrator' },
  //   { id: 4, name: 'Public user' },
  //   { id: 5, name: 'Demo User' }
  // ]
}); //get

const Main = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Odoo Mobile ala Ades</Text>
    </View>
  );
};
export default Main;
