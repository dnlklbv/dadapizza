import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MenuItem = () => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.wrapper}>
      <Image
        source={{
          uri:
            'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/e376b292-8f3a-4c12-b2a2-9edf95d9efff.jpg',
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={styles.title}>Аррива!</Text>
        <Text style={styles.descr}>
          Чоризо, цыпленок, томаты, сладкий перец, лук красный, чеснок,
          моцарелла, соус ранч, соус бургер
        </Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>от 8,90 руб.</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  image: {
    width: 180,
    height: 180,
  },
  content: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    marginBottom: 7,
    fontSize: 19,
  },
  descr: {
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 18,
    color: '#666666',
    fontWeight: '300',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderRadius: 10,
    borderColor: '#fe5500',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fe5500',
  },
});

export default MenuItem;
