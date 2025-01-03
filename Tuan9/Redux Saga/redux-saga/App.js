import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, FlatList, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import store from './redux/store';

const TaskList = ({ searchQuery }) => {
  const tasks = useSelector((state) => state.tasks);
  const filteredTasks = tasks.filter(task => task.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <FlatList
      data={filteredTasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.taskItem}>
          <Image
            source={require('./assets/2.png')} // Biểu tượng trước mỗi dòng
            style={styles.taskIcon}
          />
          <Text style={styles.taskText}>{item}</Text>
          <TouchableOpacity>
            <Image
              source={require('./assets/3.png')} // Biểu tượng cây bút
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const AppContent = () => {
  const [task, setTask] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    if (task.trim()) {
      dispatch({ type: 'ADD_TASK', payload: task });
      setTask(''); // Xóa input sau khi thêm
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('./assets/1.png')} // Hình ảnh đại diện
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.header}>Hi Twinkle</Text>
          <Text style={styles.subheader}>Have a great day ahead</Text>
        </View>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TaskList searchQuery={searchQuery} />
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="+" onPress={addTask} color="blue"/>
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    marginLeft: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  header: {
    fontSize: 24,
    marginBottom: 5,
  },
  subheader: {
    fontSize: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskIcon: {
    width: 20, 
    height: 20,
    marginRight: 10,
  },
  taskText: {
    flex: 1, 
  },
  editIcon: {
    width: 20, 
    height: 20,
  },
});

export default App;
