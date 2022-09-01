import React from 'react';
import {View, Text, ImageBackground, StyleSheet, FlatList} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import {BackgroundImage} from '../features/backgroundImages';
export const HomeScreen = () => {
  const ImageData = [
    require('../../assests/image1.jpg'),
    require('../../assests/image2.jpg'),
    require('../../assests/image3.jpg'),
    require('../../assests/image4.jpg'),
    require('../../assests/image5.jpg'),
  ];
  return (
    <BackgroundImage>
      <FlatList
        data={ImageData}
        keyExtractor={(_, index) => index}
        renderItem={({item}) => {
          console.log(item);
          return (
            <Card style={styles.cover}>
              <Card.Content>
                <Card.Cover source={item} />
              </Card.Content>
            </Card>
          );
        }}
      />
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  cover: {
    margin: 16,
  },
});
