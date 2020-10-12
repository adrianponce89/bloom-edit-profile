import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import PhotoItem from './PhotoItem';

const PhotoList: () => React.Node = () => {
  const photoList = [
    {
      id: 1,
      url: 'https://collectionimages.npg.org.uk/large/mw82857/Bill-Gates.jpg',
    },
    {
      id: 2,
      url:
        'https://i.pinimg.com/564x/87/64/76/876476178e8cd6bcaab1269f7283d97b.jpg',
    },
    {
      id: 3,
      url:
        'https://media.king5.com/assets/KING/images/156daac9-f162-4c82-bb78-6edc4225d9ae/156daac9-f162-4c82-bb78-6edc4225d9ae_750x422.jpg',
    },
    {
      id: 4,
      url: 'https://collectionimages.npg.org.uk/large/mw82857/Bill-Gates.jpg',
    },
    {
      id: 5,
      url:
        'https://i.pinimg.com/564x/87/64/76/876476178e8cd6bcaab1269f7283d97b.jpg',
    },
    {
      id: 6,
      url:
        'https://media.king5.com/assets/KING/images/156daac9-f162-4c82-bb78-6edc4225d9ae/156daac9-f162-4c82-bb78-6edc4225d9ae_750x422.jpg',
    },
    {
      id: 7,
      url: 'https://collectionimages.npg.org.uk/large/mw82857/Bill-Gates.jpg',
    },
    {
      id: 8,
      url:
        'https://i.pinimg.com/564x/87/64/76/876476178e8cd6bcaab1269f7283d97b.jpg',
    },
    {
      id: 9,
      url:
        'https://media.king5.com/assets/KING/images/156daac9-f162-4c82-bb78-6edc4225d9ae/156daac9-f162-4c82-bb78-6edc4225d9ae_750x422.jpg',
    },
  ];
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <Text>Photos</Text>
          <View style={styles.photoListContainer}>
            {photoList.map((photo) => (
              <View key={photo.id} style={styles.profileContainer}>
                <TouchableOpacity>
                  <Image
                    style={styles.profileImage}
                    source={{
                      uri: photo.url,
                    }}
                  />
                </TouchableOpacity>

                <View style={styles.clearButton}>
                  <TouchableOpacity>
                    <Text style={styles.clearButtonText}>x</Text>
                  </TouchableOpacity>
                </View>
                {/* <View style={styles.addButton}>
                  <TouchableOpacity>
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </View> */}
              </View>
            ))}
          </View>
          <TouchableOpacity>
            <View style={styles.addPhoto}>
              <Text style={styles.addPhotoText}>Add Photo</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    display: 'flex',
  },
  photoListContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'flex-start',
    padding: 10,
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  profileContainer: {
    width: '33%',
    height: '33%',
    padding: 5,
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  addPhoto: {
    backgroundColor: '#fAA',
    height: 50,
    margin: 15,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  addPhotoText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  },
  clearButton: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    position: 'absolute',
    borderRadius: 15,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  clearButtonText: {
    color: '#fAA',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 30,
    height: '100%',
    width: '100%',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#fAA',
    width: 30,
    height: 30,
    position: 'absolute',
    borderRadius: 15,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 30,
    height: '100%',
    width: '100%',
    fontWeight: 'bold',
  },
});

export default PhotoList;
