import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import api from '../../../services/api';
import styles from './styles';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  async function loadProducts() {
    setLoading(true);
    const response = await api.get('products');
    setProducts(response.data);
    setLoading(false);
  }

  // usei para atualizar as informações toda vez que acessar a tela
  useEffect(() => {
    navigation.addListener('focus', () => {
      loadProducts();
    });
  }, [navigation]);

  function navigateToDetails(product_id) {
    navigation.navigate('Detail', {product_id});
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Produtos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Text style={styles.buttonAddProduct}> + Novo Produto</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonAddProduct}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        style={styles.productList}
        keyExtractor={(product) => String(product.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item: product}) => (
          <View style={styles.product}>
            <TouchableOpacity onPress={() => navigateToDetails(product.id)}>
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
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
