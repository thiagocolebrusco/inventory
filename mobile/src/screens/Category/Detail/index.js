import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import api from '../../../services/api';
import styles from './styles';

export default function DetailCategory() {
  const route = useRoute();
  const category_id = route.params.category_id;
  const navigation = useNavigation();
  const [category, setCategory] = useState([]);

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToEdit() {
    navigation.navigate('EditCategory', {category});
  }

  async function loadCategory() {
    const response = await api.get(`categories/${category_id}`);
    setCategory(response.data[0]);
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      loadCategory();
    });
  }, [navigation]);

  async function removeCategory() {
    try {
      await api.delete(`categories/${category.id}`);
      navigation.navigate('Categories');
    } catch (error) {
      alert('Erro ao remover categoria');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Detalhes</Text>
        <TouchableOpacity onPress={() => navigateBack()}>
          <Text style={styles.buttonGoBack}> Voltar </Text>
        </TouchableOpacity>
      </View>
      {category && (
        <View style={styles.product}>
          <Text style={styles.productValue}>{category.category}</Text>
          <View style={styles.productButton}>
            <Button title="Editar" onPress={() => navigateToEdit(category)} />
          </View>
          <View style={styles.productButton}>
            <Button title="Excluir" onPress={() => removeCategory()} />
          </View>
        </View>
      )}
    </View>
  );
}
