import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    marginHorizontal: 15,

    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#cccccc',
    borderRadius: 15,
    marginBottom: 20,
  },
  contentText: {
    backgroundColor: 'green',
    height: 40,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  new: {
    backgroundColor: 'blue',
  },
  odd: {
    backgroundColor: 'green',
  },
  item: {
    color: '#fff',
  },
  workcontent: {
    height: 40,
    width: '80%',

    justifyContent: 'center',
  },
});

export default styles;
