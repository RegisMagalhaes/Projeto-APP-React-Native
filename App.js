import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const[base,setBase] = useState('');
  const[altura,setAltura] = useState('');
  const[area,setArea] = useState('');

  function calcularArea(){
    if(base>0 && altura>0){
      setArea((parseFloat(base)*parseFloat(altura))/2);
    }else{setArea('')}
  }
  return (
    <View style={styles.container}>
      <Text>Regis construa uma calculadora de triângulos em React Native</Text>
      <Text>Insira os dados abaixo para calcular a área do triângulo:</Text>
      <Text>Digite a base do triângulo:</Text>
      <TextInput
        placeholder="Base"
        style={{height:40, textAlign: 'center'}}
        keyboardType={'numeric'}
        onChangeText={base=>setBase(base)}
        />
        <Text>Digite a altura do triângulo:</Text>
        <TextInput
        placeholder="Altura"
        style={{height:40, textAlign: 'center'}}
        keyboardType={'numeric'}
        onChangeText={base=>setAltura(base)}
        />
        <Button
          title='Calcular'
          onPress={calcularArea}
          />
          <Text>{area>0 ? `Resultado:${area} m²`: ''} </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
