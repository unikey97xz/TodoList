import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#4066a3',
  },
  screen: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  body: {
    height: '90%',
    width: '100%',
    borderWidth: 1,
  },
  tiitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  items: {
    flexDirection: 'row',
    height: 50,
    width: '90%',
    borderWidth: 1,
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  item: {
    width: '20%',
    height: '80%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  work: {},
  inputText: {
    marginTop: 10,
    height: 50,
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  InputBody: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
export default styles;
