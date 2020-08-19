import React from 'react';
import { FlatList, Text, View, Button, StyleSheet } from 'react-native';

const List = ({ puntos, closeModal }) => {
  return (
    <>
      <View>
        <FlatList
          data={puntos.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.button}>
        <Button title='Cerrar' onPress={closeModal} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 50,
    justifyContent: 'center',
    padding: 15
  },
  button: {
    padding: 15
  }
});

export default List;
