import React, {useState} from 'react';
import {useCamera} from 'react-native-camera-hooks';
import {RNCamera} from 'react-native-camera';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

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
      <TouchableOpacity />
      <Button onPress={snap} style={styles.cameraButton} icon="camera-front">
        Capture
      </Button>
    </RNCamera>
  );
};

const styles = StyleSheet.create({
  profileCamera: {
    width: '100%',
    height: '100%',
  },
  cameraButton: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
    padding: 8,
    justifyContent: 'flex-end',
    width: '100%',
  },
});
