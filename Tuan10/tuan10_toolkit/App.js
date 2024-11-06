import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

import BikeGallery from './components/BikeGallery';
import Detail_XeDap from './components/Detail_XeDap';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const images = {
  xeDapXanh: require('./assets/1.png'),
  xeDapDo: require('./assets/2.png'),
  xeDapHong: require('./assets/3.png'),
  xeDapKieu: require('./assets/4.png')
};

const xeDapItems = [
  {
    id: 1,
    name: "Pinarello",
    image: images.xeDapXanh,
    price: "$1800"
  },
  {
    id: 2,
    name: "Pina Mountai",
    image: images.xeDapDo,
    price: "$1700"
  },
  {
    id: 3,
    name: "Pina bike",
    image: images.xeDapHong,
    price: "$1500"
  },
  {
    id: 4,
    name: "PinarelloA",
    image: images.xeDapKieu,
    price: "$1900"
  },
  {
    id: 5,
    name: "Pinarello",
    image: images.xeDapHong,
    price: "$2700"
  },
  {
    id: 6,
    name: "Pinarello",
    image: images.xeDapDo,
    price: "$2000"
  }
];

const bikeSlice = createSlice({
  name: 'bikes',
  initialState: {
    selectedCategory: 'All',
    quantity: 1,
    xeDapItems
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    }
  }
});

const { setSelectedCategory, setQuantity } = bikeSlice.actions;

const store = configureStore({
  reducer: {
    bikes: bikeSlice.reducer
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BikeGallery" component={BikeGallery} />
          <Stack.Screen name="Detail_XeDap" component={Detail_XeDap} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
