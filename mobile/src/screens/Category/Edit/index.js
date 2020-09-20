import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';
import {View, Text, TouchableOpacity, Button, TextInput} from 'react-native';
import api from '../../../services/api';
import styles from './styles';

export default function EditCategory() {
  const route = useRoute();
  const [category, setCategory] = useState(route.params.category);

  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToDetails(category_id) {
    navigation.navigate('DetailCategory', {category_id});
  }

  async function updateCategory() {
    try {
      await api.put(`categories/${category.id}`, {
        category: category.category,
      });
      navigateToDetails(category.id);
    } catch (error) {
      alert('Erro ao atualizar categoria');
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Editar</Text>
        <TouchableOpacity onPress={() => navigateBack()}>
          <Text style={styles.buttonGoBack}> Voltar </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.product}>
        <View style={styles.productItem}>
          <Text style={styles.productProperty}>Nome da Categoria: </Text>
          <TextInput
            style={styles.input}
            value={category.category}
            onChangeText={(e) => setCategory({...category, category: e})}
          />
        </View>
        <View style={styles.productButton}>
          <Button title="Salvar" onPress={() => updateCategory()} />
        </View>
        <View style={styles.productButton}>
          <Button title="Cancelar" onPress={() => navigateBack()} />
        </View>
      </View>
    </View>
  );
}
