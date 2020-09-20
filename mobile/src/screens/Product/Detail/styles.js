import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    paddingHorizontal: 20,
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10,
    color: '#13131a',
    fontWeight: 'bold',
  },
  buttonGoBack: {
    paddingHorizontal: 20,
    fontSize: 15,
    marginBottom: 10,
    marginTop: 25,
    color: '#808080',
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  product: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginHorizontal: 20,
  },
  productItem: {
    flexDirection: 'row',
  },
  productProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },
  productValue: {
    fontSize: 15,
    marginBottom: 4,
    color: '#737380',
  },
  productButton: {
    marginTop: 10,
  },
});
