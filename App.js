import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Map from './components/Map';
import CustomModal from './components/CustomModal';
import Panel from './components/Panel';
import Input from './components/Input';
import List from './components/List';

export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [puntoTemp, setPuntoTemp] = useState({});
  const [visibility, setVisibility] = useState(false);
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto'); // new_punto, all_puntos
  const [pointsFilter, setPointsFilter] = useState(true);

  const togglePointsFilter = () => setPointsFilter(!pointsFilter);

  const handleLongPress = ({ nativeEvent }) => {
    setPuntoTemp(nativeEvent.coordinate);
    setVisibilityFilter('new_punto');
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setNombre(text);
  };

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos([...puntos, newPunto]);
    setVisibility(false);
    setNombre('');
  };

  const handleList = () => {
    setVisibilityFilter('all_puntos');
    setVisibility(true);
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter} />
      <CustomModal visibility={visibility}>
        {visibilityFilter === 'new_punto' ? (
          <View style={styles.form}>
            <Input
              title='Nombre'
              placeholder='Nombre del punto'
              onChangeText={handleChangeText}
            />
            <Button title='Aceptar' onPress={handleSubmit} />
          </View>
        ) : (
          <List puntos={puntos} closeModal={() => setVisibility(false)} />
        )}
      </CustomModal>
      <Panel onPressLeft={handleList} textLeft='Lista' togglePointsFilter={togglePointsFilter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  form: {
    padding: 15
  }
});
