import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../App';

const BikeGallery = ({ navigation }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(state => state.bikes.selectedCategory);
  const xeDapItems = useSelector(state => state.bikes.xeDapItems);

  const filteredItems = xeDapItems.filter(item => {
    return selectedCategory === 'All' || item.name.includes(selectedCategory);
  });

  const categories = ['All', 'Roadbike', 'Mountain'];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>The world's Best Bike</Text>
      </View>
      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.activeButton]}
            onPress={() => dispatch(setSelectedCategory(category))}
          >
            <Text style={selectedCategory === category ? styles.activeText : styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.bikeItem}
            onPress={() => navigation.navigate('Detail_XeDap', { bike: item })}
          >
            <Image source={item.image} style={styles.bikeImage} />
            <Text style={styles.bikeName}>{item.name}</Text>
            <Text style={styles.bikePrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
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
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  activeButton: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  categoryText: {
    color: '#333',
  },
  activeText: {
    color: '#fff',
  },
  bikeItem: {
    width: '33.33%',
    alignItems: 'center',
    marginBottom: 16,
    paddingLeft:10
  },
  bikeImage: {
    width: 100,
    height: 100,
    marginBottom: 15,
    paddingHorizontal:10,
    paddingLeft:100
  },
  bikeName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bikePrice: {
    fontSize: 12,
    color: 'green',
  }
});

export default BikeGallery;
