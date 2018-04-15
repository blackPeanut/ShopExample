// @flow

import React from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'
import * as Theme from '../../theme'
import getSymbolFromCurrency from 'currency-symbol-map'

type Props = {
  price: number,
  currency: String,
  style: StyleSheet
};

export function Price (props: Props) {
  const { currency, style, price } = props
  const cSymbol = getSymbolFromCurrency(currency.toUpperCase())

  return (
    <Text style={[styles.text, style]}>{`${cSymbol}${price}`}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '700',
    color: Theme.LISTING_PRODUCT_PRICE
  }
})
