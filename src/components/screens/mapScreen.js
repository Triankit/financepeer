import React, {useEffect, useState} from 'react';
import {StyleSheet, Platform, PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';

export const MapScreen = () => {
  const [latitude, setLatitude] = useState(26.4499);
  const [longitude, setLongitude] = useState(80.3319);
  async function getLocationPermissions() {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
    } else {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: "App needs access to your phone's location.",
        },
      );
    }
  }
  useEffect(() => {
    getLocationPermissions();
    Geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  return (
    <MapView
      region={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.1,
      }}
      style={styles.conatiner}>
      <Marker
        coordinate={{
          latitude: latitude,
          longitude: longitude,
        }}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    height: '100%',
    width: '100%',
  },
});
