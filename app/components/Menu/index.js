import React from 'react';
import {ScrollView} from 'react-native';

import MenuHeader from './MenuHeader';
import MenuContents from './MenuContents';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <ScrollView backgroundColor="#fff">
      <MenuHeader />
      <MenuContents />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </ScrollView>
  );
};

export default Menu;
