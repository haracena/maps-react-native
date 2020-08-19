import React from 'react';
import { Button, Dimensions, View, StyleSheet } from 'react-native';

const Panel = ({ onPressLeft,  textLeft, togglePointsFilter }) => {
  return (
    <View style={styles.panel}>
      <Button title={textLeft} onPress={onPressLeft} />
      <Button title='Mostrar/Ocultar' onPress={togglePointsFilter} />
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center'
  }
});

export default Panel;
