import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React , { useState } from 'react';

export default function App() {

  const [brutto, setBrutto] = useState(0);


  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Eesti palgakalkulaator</Text>
      </View>
    <View style={[styles.container, styles.bottomContainer]}>
      <Text style={styles.text}>Netokuupalk:</Text>
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={val => setBrutto(parseInt(val))}></TextInput>
      <Result brutto={brutto} />
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const Result = ({brutto}: {brutto: number}) => {
  if (brutto) {
    return (
      <Text>Brutokuupalk: {Math.round(brutto * 0.80)}€</Text>
    )
  }
  return (
    <Text>Ootan...</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6c5d6',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-start',
  }
});
