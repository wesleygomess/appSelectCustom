import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Select } from './src/components/Select';

const optionsSelect = [
  { label: 'Banana', value: 1 },
  { label: 'Maçā', value: 2 },
  { label: 'Uva', value: 3 },
  { label: 'Manga', value: 4 },
  { label: 'Goiaba', value: 5 },
  { label: 'Pera', value: 6 },
  { label: 'Laranja', value: 7 },
  { label: 'Mexerica', value: 8 },
];

const optionsSelect2 = [
  { label: 'Maria', value: 1 },
  { label: 'Wesley', value: 2 },
  { label: 'Ronaldo', value: 3 },
  { label: 'Manoel', value: 4 },
  { label: 'Francisco', value: 5 },
  { label: 'Pedro', value: 6 },
  { label: 'Marcos', value: 7 },
  { label: 'Martins', value: 8 },
];

export default function App() {
  const [seletedFruit, setSelectedFruit] = useState('');
  const [seletedNome, setSelectedNome] = useState('');

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
       
        <Select
          value={seletedFruit}
          onChange={(value) => setSelectedFruit(value)}
          options={optionsSelect}
          placeholder='Selecione uma fruta'
          label='Frutas'
        />

        <Select
          value={seletedNome}
          onChange={(value) => setSelectedNome(value)}
          options={optionsSelect2}
          placeholder='Selecione um Nome'
          label='Nome'
        />

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    width: '100%',
  },
});
