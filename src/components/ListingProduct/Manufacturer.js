// @flow

import React from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'
import * as Theme from '../../theme'

type Props = {
  manufacturer: string
};

export function Manufacturer (props: Props) {
  const { manufacturer } = props
  return (
    <Text style={styles.text}>{`by ${manufacturer}`}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: Theme.LISTING_PRODUCT_MANUFACTURER
  }
})
