import React from 'react'
import { TextInput, Text, View, StyleSheet } from 'react-native';

const Input = ({ title, ...rest }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput {...rest} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
  }
});

export default Input;