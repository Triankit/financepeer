import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

export const ProfileScreen = ({route, navigation}) => {
  const photo = route.params ? route.params : null;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
        {!photo && (
          <Avatar.Icon
            size={280}
            icon="account-outline"
            backgroundColor="#826CD4"
          />
        )}
        {photo && (
          <Avatar.Image
            size={280}
            source={{uri: photo.uri}}
            backgroundColor="#826CD4"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '30%',
  },
});
