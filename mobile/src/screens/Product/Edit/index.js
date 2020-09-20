import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';
import {View, Text, TouchableOpacity, Button, TextInput} from 'react-native';
import api from '../../../services/api';
import styles from './styles';

export default function Edit() {
  const route = useRoute();
  const [product, setProduct] = useState(route.params.product);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToDetails(product_id) {
    navigation.navigate('Detail', {product_id});
  }

  async function loadCategories() {
    const response = await api.get('categories');
    setCategories(response.data);
    setSelectedCategory(() =>
      response.data.find((category) => category.category === product.category),
    );
  }

  useEffect(() => {
    loadCategories();
  }, []);

  async function updateProduct() {
    try {
      await api.put(`products/${product.id}`, {
        name: product.name,
        description: product.description,
        price: product.price,
        category_id: selectedCategory.id,
      });
      setProduct({
        ...product,
        category_id: selectedCategory.id,
        category: selectedCategory.category,
      });
      navigateToDetails(product.id);
    } catch (error) {
      alert('Erro ao atualizar produto');
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
          <Text style={styles.productProperty}>Nome do Produto: </Text>
          <TextInput
            style={styles.input}
            value={product.name}
            onChangeText={(e) => setProduct({...product, name: e})}
          />
        </View>

        <View style={styles.productItem}>
          <Text style={styles.productProperty}>Descrição: </Text>
          <TextInput
            style={styles.input}
            value={product.description}
            onChangeText={(e) => setProduct({...product, description: e})}
          />
        </View>

        <View style={styles.productItem}>
          <Text style={styles.productProperty}>Preço: </Text>
          <TextInput
            keyboardType="decimal-pad"
            style={styles.input}
            value={String(product.price)}
            onChangeText={(e) => setProduct({...product, price: e})}
          />
        </View>

        <View style={styles.productItem}>
          <Text style={styles.productProperty}>Categoria: </Text>
          {categories && selectedCategory && (
            <Picker
              selectedValue={selectedCategory.id}
              mode="dropdown"
              onValueChange={(e) =>
                setSelectedCategory(() =>
                  categories.find((category) => category.id === e),
                )
              }>
              {categories.map((category) => (
                <Picker.Item
                  label={category.category}
                  value={category.id}
                  key={category.id}
                />
              ))}
            </Picker>
          )}
        </View>
        <View style={styles.productButton}>
          <Button title="Salvar" onPress={() => updateProduct()} />
        </View>
        <View style={styles.productButton}>
          <Button title="Cancelar" onPress={() => navigateBack()} />
        </View>
      </View>
    </View>
  );
}
