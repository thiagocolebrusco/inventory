import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Button, StyleSheet} from 'react-native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Categorias"
          onPress={() => {
            navigation.navigate('Categories');
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Produtos"
          onPress={() => {
            navigation.navigate('Products');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 20,
    marginBottom: 50,
    height: 50,
  },
});
