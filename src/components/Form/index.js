import {
  Alert,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

const Form = props => {
  const [value, setValue] = useState();
  const HandlerAddTask = () => {
    if (value.length === 0) {
      alert('vui long nhap du input');
      return false;
    }
    props.onAddTask(value);
    setValue('');
    Keyboard.dismiss();
  };
  return (
    <View style={styles.InputBody}>
      <TextInput
        style={styles.Input}
        onChangeText={text => setValue(text)}
        placeholder="Enter something here"
      />
      <TouchableOpacity onPress={HandlerAddTask}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
