// Tasks.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useUser } from './UserContext';

const Tasks = ({ navigation, route }) => {
  const { userName } = useUser();
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Làm việc tại tòa nhà A', completed: false },
    { id: '2', title: 'Đi gặp đối tác', completed: false },
  ]);

  useEffect(() => {
    if (route.params?.newJob) {
      const newJob = route.params.newJob;
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now().toString(), title: newJob, completed: false },
      ]);
    }
  }, [route.params?.newJob]);

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi {userName ? userName : 'Guest'}</Text>
      <Text style={styles.subGreeting}>Have a great day ahead</Text>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add Job" onPress={() => navigation.navigate('AddJob')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subGreeting: {
    fontSize: 16,
    marginBottom: 20,
  },
  taskContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
  },
});

export default Tasks;
