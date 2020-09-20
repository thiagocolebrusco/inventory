import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Button, TextInput} from 'react-native';
import api from '../../../services/api';
import styles from './styles';

export default function CreateCategory() {
  const [category, setCategory] = useState();

  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  async function createCategory() {
    try {
      await api.post('categories', {
        category,
      });
      navigateBack();
    } catch (error) {
      alert('Erro ao criar categoria');
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastrar Categoria</Text>
        <TouchableOpacity onPress={() => navigateBack()}>
          <Text style={styles.buttonGoBack}> Voltar </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.product}>
        <View style={styles.productItem}>
          <Text style={styles.productProperty}>Nome da Categoria: </Text>
          <TextInput
            style={styles.input}
            value={category}
            onChangeText={(e) => setCategory(e)}
          />
        </View>
        <View style={styles.productButton}>
          <Button title="Salvar" onPress={() => createCategory()} />
        </View>
        <View style={styles.productButton}>
          <Button title="Cancelar" onPress={() => navigateBack()} />
        </View>
      </View>
    </View>
  );
}
