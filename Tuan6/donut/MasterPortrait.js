import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

const images = {
  tastyDonut: require('./assets/1.png'),
  pinkDonut: require('./assets/2.png'),
  floatingDonut: require('./assets/3.png'),
  redDonut: require('./assets/4.png'),
};

const foodItems = [
  {
    id: '1',
    name: 'Tasty Donut',
    price: '$10.00',
    description: 'Spicy tasty donut family',
    image: images.tastyDonut,
  },
  {
    id: '2',
    name: 'Pink Donut',
    price: '$20.00',
    description: 'Spicy tasty donut family',
    image: images.pinkDonut,
  },
  {
    id: '3',
    name: 'Floating Donut',
    price: '$30.00',
    description: 'Spicy tasty donut family',
    image: images.floatingDonut,
  },
  {
    id: '4',
    name: 'Red Donut',
    price: '$30.00',
    description: 'Spicy tasty donut family',
    image: images.redDonut,
  },
  
];

const MasterPortrait = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = foodItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.name.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search food"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.categoryContainer}>
        {['Donut', 'Pink', 'Floating'].map(category => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.selectedCategory]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredItems}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('DetailPortrait', { item })}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  categoryButton: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    
  },
  selectedCategory: {
    backgroundColor: '#f0c0c0',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'pink',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight:'bold',
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
});

export default MasterPortrait;
