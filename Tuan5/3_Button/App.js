import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [data, setData] = useState(['Mục 1', 'Mục 2', 'Mục 3']);

  const handleAdd = () => {
    const newData = [...data, `Mục ${data.length + 1}`];
    setData(newData);
  };

  const handleDelete = () => {
    const newData = data.slice(0, data.length - 1);
    setData(newData);
  };

  const handleEdit = () => {
    if (data.length > 0) {
      const newData = data.map((item, index) => {
        if (index === 0) {
          return 'Mục đã sửa';
        }
        return item;
      });
      setData(newData);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.buttonContainer}>
        <Button title="Thêm" onPress={handleAdd} />
        <Button title="Xóa" onPress={handleDelete} />
        <Button title="Sửa" onPress={handleEdit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default App;
