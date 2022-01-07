import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
} from 'react-native';
import converter from './android/app/src/utils/number_system_converter';

const App = () => {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');
  const handleNUm = (value, type) =>{
    if (type === "decimal") {
      setDecimal(value);
    converter.decimal_to_binary(value, setBinary)
    }else if (type === "binary"){
      setBinary(value);
      converter.binary_to_decimal(value, setDecimal)
    }
  }
  const handleBtn = (e) => {
    setDecimal("");
    setBinary("");
  }
  return (
    <View>
      <Text style={styles.title}>Decimal To Binary Converter</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e)=>handleNUm(e, 'decimal')}
        value={decimal}
        placeholder="Enter the decimal"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(e)=>handleNUm(e, 'binary')}
        value={binary}
        placeholder="Enter the binary"
        keyboardType="numeric"
      />
      <Button
        style={styles.pressButton}
        onPress={handleBtn}
        title="Reset"
        color="#00bfff"
      />
      
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title :{
    color: "#00bfff",
    padding:10,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#696969",
    fontSize:20
  },
  result :{
    color: "#00bfff",
    padding:10,
    fontWeight: "bold",
    textAlign: "center",
    fontSize:20
  },
  pressButton: {
    marginTop:40,
    color:"#2196F3",
    backgroundColor: "#696969",
  }
});

export default App;