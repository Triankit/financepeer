import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Axios from 'axios';

export const ApiScreen = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await Axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setItem(response.data);
    })();
  }, []);
  return (
    <FlatList
      data={items}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.id}>userId : {item.userId}</Text>
          <Text style={styles.id}>id : {item.id}</Text>
          <Text style={styles.title}>title : {item.title}</Text>
          <Text style={styles.title}>body : {item.body}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    marginTop: 16,
    marginHorizontal: '25%',
    border: 4,
  },
  item: {
    backgroundColor: '#CD9FF0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 18,
  },
  id: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
