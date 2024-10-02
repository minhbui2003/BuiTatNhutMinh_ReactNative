import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { useUser } from './UserContext';

export default function Home({ navigation }) {
  const { setUserName } = useUser(); // Sử dụng context để lấy setUserName
  const [name, setName] = useState("");

  const handleGetStarted = () => {
    setUserName(name); // Lưu tên người dùng vào context
    navigation.navigate('Tasks'); // Chuyển đến trang Tasks
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE YOUR</Text>
      <Text style={styles.title}>STACK</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Button title="GET STARTED ->" onPress={handleGetStarted}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    marginTop: 50,
  },
  title: {
    fontWeight: "bold",
    color: '#6A5ACD',
    fontSize: 25,
  },
  input: {
    marginTop: 20,
    borderWidth: 1,
    padding: 3,
    paddingLeft: 15,
    marginBottom: 100,
    width: '100%', // Đảm bảo input chiếm toàn bộ chiều rộng
  }
});
