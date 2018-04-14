// @flow

import React from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'
import * as Theme from '../../Theme'
import { Price } from './index'

type Props = {
  children: React.Node,
  startingPrice: Number,
  currency: String
};

export function Offers (props: Props) {
  const { startingPrice, currency } = props
  return (
    <Text style={styles.text}>
      {`${props.children} offers starting from `}
      <Price style={styles.text} currency={currency}>{startingPrice}</Price>
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: Theme.LISTING_PRODUCT_OFFERS
  }
})
