import React from 'react';
import {BackgroundImage} from '../features/backgroundImages';
import {ImageList} from '../features/imageList';
export const HomeScreen = () => {
  return (
    <BackgroundImage>
      <ImageList />
    </BackgroundImage>
  );
};
