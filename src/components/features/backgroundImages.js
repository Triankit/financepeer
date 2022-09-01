import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

export const BackgroundImage = props => {
  return (
    <ImageBackground
      source={require('../../assests/bgImage.jpg')}
      resizeMode="cover"
      style={styles.image}
      imageStyle={styles.imageVisibilty}>
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  imageVisibilty: {
    opacity: 0.3,
  },
});
