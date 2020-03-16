import React from 'react';
import {ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';

const MenuContents = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity activeOpacity={1} style={styles.wrapper}>
        <Text style={[styles.title, styles.titleActive]}>Пиццы</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style={styles.wrapper}>
        <Text style={styles.title}>Комбо</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style={styles.wrapper}>
        <Text style={styles.title}>Закуски</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style={styles.wrapper}>
        <Text style={styles.title}>Десерты</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style={styles.wrapper}>
        <Text style={styles.title}>Напитки</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style={styles.wrapper}>
        <Text style={styles.title}>Другие товары</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#999999',
  },
  titleActive: {
    color: '#000000',
    fontWeight: '700',
  },
});

export default MenuContents;
