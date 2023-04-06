import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import React from 'react';

const Task = ({item}) => {
  console.log(item);

  return (
    <TouchableOpacity>
      <View style={styles.body}>
        <View style={styles.contentText}>
          <Text>{item.id}</Text>
        </View>
        <View style={styles.workcontent}>
          <Text>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
