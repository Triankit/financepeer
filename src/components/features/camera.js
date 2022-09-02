/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useCamera} from 'react-native-camera-hooks';
import {RNCamera} from 'react-native-camera';
import {StyleSheet} from 'react-native';
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
      <Button
        onPress={snap}
        style={styles.cameraButton}
        icon="camera"
        labelStyle={{fontSize: 45}}
      />
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
    paddingTop: 16,
    justifyContent: 'flex-end',
  },
});
