import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [total, setTotal] = useState('');
  const [history, setHistory] = useState([]);


  function calculateAddition() {
    const addition = parseInt(number1) + parseInt(number2);
    setTotal(addition)
    setHistory([...history, `${number1} + ${number2} = ${addition}`])
  }

  function calculateSubtraction() {
    const subtraction = parseInt(number1) - parseInt(number2);
    setTotal(subtraction)
    setHistory([...history, `${number1} - ${number2} = ${subtraction}`])
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <Text style={{fontSize: 20}}>Result: {total} </Text>

        <TextInput keyboardType="numeric" style={styles.input} value={number1} onChangeText={number1 => setNumber1(number1)}/>
        <TextInput keyboardType="numeric" style={styles.input} value={number2} onChangeText={number2 => setNumber2(number2)} />
      </View>

      <View style={styles.button}>
        <Button
          title="+"
          onPress={calculateAddition}
        />
        <Button
          title="-"
          onPress={calculateSubtraction}
        />
        </View>
      <View style={styles.flistcontainer}>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={((item, index) => index.toString())}
      />
      </View>
        
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#8c92ac',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  input : {
    fontSize: 22,
    width:200  , 
    borderColor: '#bf5700', 
    borderWidth: 1,
    padding: 20,
  },
  button: { 
    flex: 2,
    width: 180,
    flexDirection: "row", 
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 10,
  },
  flistcontainer: {
    flex: 2,
    fontSize: 20,
  }

})
;
