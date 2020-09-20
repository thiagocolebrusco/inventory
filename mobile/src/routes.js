import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './screens/Home';

import Products from './screens/Product/ListProducts';
import Detail from './screens/Product/Detail';
import Edit from './screens/Product/Edit';
import Create from './screens/Product/Create';

import Categories from './screens/Category/ListCategories';
import DetailCategory from './screens/Category/Detail';
import EditCategory from './screens/Category/Edit';
import CreateCategory from './screens/Category/Create';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Products" component={Products} />
        <AppStack.Screen name="Detail" component={Detail} />
        <AppStack.Screen name="Edit" component={Edit} />
        <AppStack.Screen name="Create" component={Create} />
        <AppStack.Screen name="Categories" component={Categories} />
        <AppStack.Screen name="DetailCategory" component={DetailCategory} />
        <AppStack.Screen name="EditCategory" component={EditCategory} />
        <AppStack.Screen name="CreateCategory" component={CreateCategory} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
