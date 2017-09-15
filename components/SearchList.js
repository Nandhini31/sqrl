'use strict';

import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import Place from './Place.js';
import styles from "../styles/Styles.js";
import { hook } from 'cavy';

class SearchList extends Component {

  _onPressItem = (index) => {
    console.log("Pressed row: "+index);
  };

  _keyExtractor = (item, index) => index;

  _renderItem = ({item, index}) => (
    <Place
    item={item}
    index={index}
    onPressItem={this._onPressItem}
    />
  );

  render() {
    return (
      <FlatList
      data={this.props.places}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderItem}
      />
    );
  }
}

export default hook(SearchList)
