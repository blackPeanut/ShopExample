// @flow

import React, { Component } from 'react'
import {
  FlatList
} from 'react-native'
import ListingProduct from '../Components/ListingProduct/ListingProduct'
import list from '../../static/list'

type Props = {};

export default class ProductList extends Component<Props> {
  renderItem = ({ item, index }) => (<ListingProduct item={{...item, index}} />);

  render () {
    return (
      <FlatList
        data={list}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        // onEndReached={scrollProps => this.onEndReached(scrollProps)}
        // onEndReachedThreshold={0.6}
      />
    )
  }
}
