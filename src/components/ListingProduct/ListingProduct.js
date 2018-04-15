// @flow

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { Manufacturer, Offers, Price, ShippingDate, Title, ProductImage } from './index'
import * as Theme from '../../theme'

type Props = {
  removeProduct: Function,
  showProduct: Function,
  item: {
    title: string,
    uri: string,
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
      removeProduct,
      showProduct,
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

    return <TouchableOpacity style={styles.container} onPress={showProduct}>
      <ProductImage uri={uri}/>

      <View style={styles.description}>
        <Title idx={index} title={title}/>
        <Manufacturer manufacturer={manufacturer}/>
        <Price currency={currency} price={price}/>
        <ShippingDate shippingDate={shippingDate}/>
        <Offers
          startingPrice={startingPrice}
          currency={currency}
          offers={offers}
        />
      </View>
      <TouchableOpacity style={styles.remove} onPress={removeProduct}>
        <Image style={styles.removeIcon} source={require('../../../static/icons/cancel.png')}/>
      </TouchableOpacity>
    </TouchableOpacity>
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
  },
  remove: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20
  },
  removeIcon: {
    width: 10,
    height: 10
  }
})
