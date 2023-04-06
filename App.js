import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
  Modal,
  Keyboard,
} from 'react-native';
import {Button, Menu, Divider, Provider} from 'react-native-paper';
import StudentList from './src/components/Data/StudentList.json';

export default App = () => {
  const [data, setData] = useState(StudentList);
  const [name, setname] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const logInput = input => {
    setname(input);
  };
  const addTip = () => {
    if (name == '') return;

    data.push({id: (StudentList.length + 1).toString(), name});
    console.log(StudentList);
    setname('');
    // dong ban phim lai
    Keyboard.dismiss();
  };

  const filteredData = id => {
    alert(id);
    let arr = data.filter(item => item.id !== id);
    setData(arr);
    console.log(arr);
  };
  const renderTip = ({item}) => {
    return (
      <TouchableOpacity key={item.id} style={styles.listItem}>
        <Text style={styles.buttonText}>{`${item.id} $`}</Text>
        <Text style={styles.buttonText}>{`${item.name} $`}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => filteredData(item.id)}>
            <Text style={{color: '#fff'}}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/*  */}
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <Modal
                transparent={true}
                visible={false}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <View
                  style={{
                    marginTop: 40,
                    width: '90%',
                    height: '60%',
                    backgroundColor: '#cccc',
                    top: '10%',
                    position: 'absolute',
                    marginHorizontal: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 23,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '70%',
                      height: 40,
                      borderWidth: 1,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        width: '35%',
                        height: 30,
                        borderWidth: 1,
                      }}>
                      Thanh tien
                    </Text>
                    <TextInput
                      style={{
                        width: '50%',
                        height: 30,
                        borderWidth: 1,
                        backgroundColor: '#cf5d4e',
                      }}
                      onChangeText={logInput}
                      value={name}
                      placeholder="nhap gia tri"
                    />
                    <TouchableOpacity>
                      <Text>add</Text>
                    </TouchableOpacity>
                  </View>
                  <Text onPress={() => setModalVisible(!modalVisible)}>
                    Ty le
                  </Text>
                </View>
              </Modal> */}
              <TouchableOpacity
                style={{
                  position: 'relative',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setModalVisible(true)}>
                <Text>Show</Text>
              </TouchableOpacity>
            </View>
            {/*  */}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.background}>
      <TextInput
        style={styles.input}
        keyboardAppearance={'dark'}
        onChangeText={logInput}
        value={name}
      />

      <TouchableOpacity style={styles.redButton} onPress={addTip}>
        <Text style={styles.buttonText}>Add Name</Text>
      </TouchableOpacity>

      <FlatList data={data} renderItem={renderTip} style={styles.flatList} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'grey',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  input: {
    marginTop: 50,
    color: 'white',
    fontSize: 30,
    backgroundColor: '#2e2a2a',
    height: 50,
    width: '90%',
    textDecorationColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: 30,
  },
  flatList: {
    width: '100%',
  },
  listItem: {
    width: '90%',
    height: 50,
    backgroundColor: '#2e2e2e',
    borderRadius: 25,
    marginVertical: 4,
    marginHorizontal: '5%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  redButton: {
    justifyContent: 'center',
    width: '90%',
    height: 50,
    backgroundColor: 'red',
    borderRadius: 25,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
