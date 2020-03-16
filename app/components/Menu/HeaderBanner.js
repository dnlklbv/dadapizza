import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const HeaderBanner = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.poster}>
        <Image
          source={{
            uri:
              'https://sun9-45.userapi.com/z_XTdwbZojQgn1aEbLim3nMX5spbDW67yd7l4w/Oy6mltiK2Eo.jpg',
          }}
          style={styles.posterImage}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>Аррива !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 15,
  },
  poster: {
    width: 330,
    height: 130,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.2,
    elevation: 4,
  },
  posterImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default HeaderBanner;
