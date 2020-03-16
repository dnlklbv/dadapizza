import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import HeaderBanner from './HeaderBanner';

const MenuHeader = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        pagingEnabled
        snapToInterval={360}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}>
        <HeaderBanner />
        <HeaderBanner />
        <HeaderBanner />
      </ScrollView>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.button, styles.buttonLarge]}>
          <Text style={styles.buttonText}>Проврерка адреса</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={styles.button}>
          <Text style={styles.buttonText}>Промокод</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ff6900',
    width: '100%',
    paddingTop: 20,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 14,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#e75f00',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonLarge: {
    flexGrow: 1,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
});

export default MenuHeader;
