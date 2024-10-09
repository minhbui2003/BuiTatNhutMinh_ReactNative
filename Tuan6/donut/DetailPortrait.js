import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DetailPortrait = ({ route }) => {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);

  return (

    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={item.image} style={styles.image} />
      </View>     
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}
      <Text style={styles.price}>{item.price}</Text>
      </Text>
      

      <View style={styles.deliveryContainer}>
        <Text style={styles.deliveryInfo}>Delivery in 30 min</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.restaurantInfo}>Restaurants info</Text>
      <Text style={styles.infoText}>
        Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.
      </Text>

      <Button title="Add to Cart" onPress={() => alert('Added to cart!')} color="#FFA500"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  container1:{
    alignItems: 'center',
    marginBottom: 25,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 25,
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight:'bold',
    marginLeft:20,
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
});

export default DetailPortrait;
