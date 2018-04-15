// @flow

import React from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'
import * as Theme from '../../theme'
import { Price } from './index'

type Props = {
  offers: number,
  startingPrice: number,
  currency: string
};

export function Offers (props: Props) {
  const { startingPrice, currency, offers } = props
  return (
    <Text style={styles.text}>
      {`${offers} offers starting from `}
      <Price
        style={styles.text}
        currency={currency}
        price={startingPrice}
      />
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: Theme.LISTING_PRODUCT_OFFERS
  }
})
