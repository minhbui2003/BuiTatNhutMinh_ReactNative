// AddJob.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useUser } from './UserContext';

const AddJob = ({ navigation }) => {
  const { userName } = useUser();
  const [job, setJob] = useState('');

  const handleAddJob = () => {
    if (job) {
      navigation.navigate('Tasks', { newJob: job });
      setJob(''); // Reset input
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi {userName ? userName : 'Guest'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a new job"
        value={job}
        onChangeText={setJob}
      />
      <Button title="Add Job" onPress={handleAddJob} />
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
    marginBottom: 20,
  },
  input: {
    marginTop: 20,
    borderWidth: 1,
    padding: 3,
    paddingLeft: 15,
    marginBottom: 20,
    width: '100%',
  },
});

export default AddJob;
