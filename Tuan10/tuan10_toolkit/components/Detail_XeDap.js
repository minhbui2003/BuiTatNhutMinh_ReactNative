import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setQuantity } from '../App';

const Detail_XeDap = ({ route }) => {
  const { bike } = route.params;
  const dispatch = useDispatch();
  const quantity = useSelector(state => state.bikes.quantity);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={bike.image} style={styles.image} />
      </View>
      <Text style={styles.title}>{bike.name}</Text>
      <Text style={styles.price}>{bike.price}</Text>
      <View style={styles.deliveryContainer}>
        <Text style={styles.deliveryInfo}>Delivery in 30 min</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => dispatch(setQuantity(Math.max(1, quantity - 1)))}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={() => dispatch(setQuantity(quantity + 1))}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.restaurantInfo}>Bike Specifications</Text>
      <Text style={styles.infoText}>
        High-quality mountain bike with carbon frame and top-of-the-line components.
      </Text>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  container1: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 5,
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  deliveryInfo: {
    fontSize: 16,
    marginRight: 10,
    color: '#555',
    fontWeight:'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:30,
  },
  quantityButton: {
    fontSize: 15,
    paddingHorizontal: 7,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor:"#FFA500",
  },
  quantityText: {
    fontSize: 18,
  },
  restaurantInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    marginBottom: 30,
  },
  addToCartButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default Detail_XeDap;
