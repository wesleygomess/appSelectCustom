import React, { useState } from 'react';

import { StyleSheet, TouchableOpacity, Text, View, SafeAreaView, Modal, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export function Select({ onChange, options, placeholder, value, label, ...resp }) {
  const [visibleModal, setVisibleModal] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');

  return (
    <>
      <Text style={styles.labelSelect}>{label}</Text>
      <TouchableOpacity {...resp} style={styles.container} onPress={() => setVisibleModal(true)}>
        <View style={styles.content}>
          <Text style={styles.textValue}>
            {selectedLabel === '' ? placeholder : selectedLabel}
          </Text>
          <Entypo name='chevron-down' size={20} color='#444' />
        </View>
      </TouchableOpacity>

      <Modal
        visible={visibleModal}
        animationType='slide'
        transparent={true}
        onRequestClose={() => setVisibleModal(false)}
      >
        <View style={styles.containerModal}>
          <SafeAreaView>
            <View style={styles.headerModal}>

              <TouchableOpacity onPress={() => setVisibleModal(false)}>
                <Entypo name='chevron-left' size={25} color='#444' />
              </TouchableOpacity>

              <Text style={styles.placeholder}>{placeholder}</Text>

              <TouchableOpacity onPress={() => setVisibleModal(false)}>
                <Text style={styles.textCancel}>Cancelar</Text>
              </TouchableOpacity>

            </View>

            <FlatList
              data={options}
              keyExtractor={item => String(item.value)}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.btnSelect}
                  onPress={() => {
                    setVisibleModal(false);
                    onChange(item.value);
                    setSelectedLabel(item.label)
                  }}
                >
                  <Text style={styles.textSelect}>{item.label}</Text>
                  {item.value === value && <Entypo name='check' size={20} color='green' />}
                </TouchableOpacity>
              )}
            />

          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#f4f4f4',
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 7,
  },
  labelSelect: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 5,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textValue: {
    fontSize: 16,
    color: '#444'
  },
  containerModal: {
    flex: 1,
    backgroundColor: '#f4f4f4'
  },
  headerModal: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  textCancel: {
    fontSize: 16,
    fontWeight: '600',
    color: 'blue'
  },
  placeholder: {
    color: '#333',
    fontSize: 18,
  },
  btnSelect: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textSelect: {
    color: '#333',
    fontSize: 16,
  },
});