import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import api from '../../../services/api';
import styles from './styles';

export default function Detail() {
  const route = useRoute();
  const product_id = route.params.product_id;
  const navigation = useNavigation();
  const [product, setProduct] = useState([]);

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToEdit() {
    navigation.navigate('Edit', {product});
  }

  async function loadProduct() {
    const response = await api.get(`products/${product_id}`);
    setProduct(response.data[0]);
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      loadProduct();
    });
  }, [navigation]);

  async function removeProduct() {
    try {
      await api.delete(`products/${product.id}`);
      navigation.navigate('Products');
    } catch (error) {
      alert('Erro ao remover produto');
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
      {product && (
        <View style={styles.product}>
          <Text style={styles.productValue}>{product.name}</Text>

          <View style={styles.productItem}>
            <Text style={styles.productProperty}>Descrição: </Text>
            <Text style={styles.productValue}>{product.description}</Text>
          </View>

          <View style={styles.productItem}>
            <Text style={styles.productProperty}>Preço: </Text>
            <Text style={styles.productValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price)}
            </Text>
          </View>

          <View style={styles.productItem}>
            <Text style={styles.productProperty}>Categoria: </Text>
            <Text style={styles.productValue}>{product.category}</Text>
          </View>
          <View style={styles.productButton}>
            <Button title="Editar" onPress={() => navigateToEdit(product)} />
          </View>
          <View style={styles.productButton}>
            <Button title="Excluir" onPress={() => removeProduct()} />
          </View>
        </View>
      )}
    </View>
  );
}
