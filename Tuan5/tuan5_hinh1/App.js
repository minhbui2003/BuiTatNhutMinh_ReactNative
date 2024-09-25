import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const ChatScreen = () => {
  const [shops] = useState([
    { id: '1', name: 'Trò chơi dân gian', shop: "Shop: DeVang", image: require('./assets/1.jpg') },
    { id: '2', name: 'Tư duy cho bé', shop: "Shop: Book Store", image: require('./assets/2.jpg') },
    { id: '3', name: 'Dê đen và dê trắng', shop: "Shop: Minh Long Book", image: require('./assets/3.png') },
    { id: '4', name: 'Cây táo', shop: "Shop: Phương Nam", image: require('./assets/4.jfif') },
    { id: '5', name: 'Vịt con cẩu thả', shop: "Shop: Nguyễn Văn Cừ", image: require('./assets/5.jpg') },
  ]);

  const handleChat = (shopName) => {
    alert(`Chatting with ${shopName}`);
  };

  const handleBack = () => {
    alert('Going back');
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.shopImage} />
      <View style={styles.textContainer}> 
        <Text style={styles.Name}>{item.name}</Text>
        <Text style={styles.shop}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton} onPress={() => handleChat(item.name)}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity onPress={() => alert('Cart clicked')} style={styles.cartButton}>
          <Ionicons name="cart" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={{ marginLeft: 20, marginBottom: 10 }}> 
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>
      <FlatList
        data={shops}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Footer />
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
          <path d="M19 12H5m7-7l-7 7 7 7" stroke="black" stroke-width="2" fill="none"/>
        </svg>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: "#00aaff",
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, 
    color: "white",
  },
  cartButton: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  textContainer: {
    flex: 1,
    marginLeft: 3,
  },
  Name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  shop: {
    fontSize: 14,
  },
  shopImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  chatButton: {
    backgroundColor: '#ff4757',
    padding: 10,
    borderRadius: 5,
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#00aaff', // Change to your desired color
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ChatScreen;
