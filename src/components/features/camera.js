import React, {useState} from 'react';
import {useCamera} from 'react-native-camera-hooks';
import {RNCamera} from 'react-native-camera';
import {TouchableOpacity, StyleSheet} from 'react-native';

export const CameraScreen = ({navigation}) => {
  const [{cameraRef}, {takePicture}] = useCamera(null);
  const snap = async () => {
    if (cameraRef) {
      const photo = await takePicture();
      navigation.navigate('Profile', photo);
    }
  };
  return (
    <RNCamera
      ref={cameraRef}
      type={RNCamera.Constants.Type.front}
      captureAudio={false}
      style={styles.profileCamera}>
      <TouchableOpacity onPress={snap} style={styles.cameraButton} />
    </RNCamera>
  );
};

const styles = StyleSheet.create({
  profileCamera: {
    width: '100%',
    height: '100%',
  },
  cameraButton: {
    width: '100%',
    height: '100%',
  },
});
