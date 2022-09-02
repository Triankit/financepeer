import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Card} from 'react-native-paper';
export const ImageList = () => {
  const ImageData = [
    require('../../assests/image1.jpg'),
    require('../../assests/image2.jpg'),
    require('../../assests/image3.jpg'),
    require('../../assests/image4.jpg'),
    require('../../assests/image5.jpg'),
  ];

  return (
    <FlatList
      data={ImageData}
      keyExtractor={(_, index) => index}
      renderItem={({item}) => {
        return (
          <Card style={styles.cover}>
            <Card.Content>
              <Card.Cover source={item} />
            </Card.Content>
          </Card>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  cover: {
    margin: 16,
  },
});
