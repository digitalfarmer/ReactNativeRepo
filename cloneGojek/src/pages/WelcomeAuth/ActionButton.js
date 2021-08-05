import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../Utils';

const ActionButton = ({label, button, onPress}) => {
  return (
    <View style={styles.viewButton}>
      <Text style={styles.textLabel}>{label}</Text>
      <TouchableOpacity style={styles.actionButton} onPress={onPress}>
        <Text style={styles.textButton}>{button}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  viewButton: {
    marginBottom: 43,
    maxWidth: 225,
  },
  textLabel: {
    color: Colors.disable,
    fontSize: 10,
    textAlign: 'center',
  },

  actionButton: {
    backgroundColor: Colors.default,
    borderRadius: 25,
    paddingVertical: 13,
  },

  textButton: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
