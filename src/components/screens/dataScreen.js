import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import data from '../../assests/data .json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from 'react-native-paper';

export const DataScreen = () => {
  const [showData, setShowData] = useState(false);
  const [items, setItems] = useState();
  const readData = async () => {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('id-data', jsonValue);
    setShowData(true);
  };

  useEffect(() => {
    (async () => {
      let jsonValue = await AsyncStorage.getItem('id-data');
      jsonValue = JSON.parse(jsonValue);
      setItems(jsonValue);
    })();
  }, [showData]);

  return (
    <React.Fragment>
      <Button style={styles.button} mode="contained" onPress={() => readData()}>
        Read Data
      </Button>

      {showData && (
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
      )}
    </React.Fragment>
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
