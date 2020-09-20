import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import api from '../../../services/api';
import styles from './styles';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  async function loadCategories() {
    const response = await api.get('categories');
    setCategories(response.data);
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      loadCategories();
    });
  }, [navigation]);

  function navigateToDetails(category_id) {
    navigation.navigate('DetailCategory', {category_id});
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categorias</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateCategory')}>
          <Text style={styles.buttonAddProduct}> + Categoria</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonAddProduct}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={categories}
        style={styles.productList}
        keyExtractor={(category) => String(category.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item: category}) => (
          <View style={styles.product}>
            <TouchableOpacity onPress={() => navigateToDetails(category.id)}>
              <Text style={styles.productValue}>{category.category}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
