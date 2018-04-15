// @flow

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native'
import { Manufacturer, Offers, Price, ShippingDate, Title, ProductImage } from './index'
import * as Theme from '../../theme'

type Props = {
  uri: string,
  onClose: Function,
  onDetailsShow: Function,
  item: {
    title: string,
    manufacturer: string,
    price: number,
    shippingDate: string,
    offers: number,
    startingPrice: number,
    currency: string,
    index: number
  }
};

export default class ListingProduct extends Component<Props> {
  render () {
    const {
      // onClose,
      // onDetailsShow,
      item: {
        uri,
        title,
        manufacturer,
        price,
        currency,
        shippingDate,
        offers,
        startingPrice,
        index
      }
    } = this.props

    return (
      <TouchableOpacity style={styles.container}>
        <ProductImage uri={uri} />

        <View style={styles.description}>
          <Title idx={index}>{title}</Title>
          <Manufacturer>{manufacturer}</Manufacturer>
          <Price currency={currency}>{price}</Price>
          <ShippingDate>{shippingDate}</ShippingDate>
          <Offers startingPrice={startingPrice} currency={currency}>{offers}</Offers>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    paddingVertical: 5,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Theme.LISTING_PRODUCT_SEPARATOR,
    backgroundColor: Theme.LISTING_PRODUCT
  },
  description: {
    flex: 1,
    justifyContent: 'space-between'
  }
})
