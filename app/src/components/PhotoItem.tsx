import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const PhotoList: () => React.Component = ({photo}) => {
  return (
    <View style={styles.body}>
      <Text>La foto</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: photo.url,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#0ff',
    height: '100%',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default PhotoList;
