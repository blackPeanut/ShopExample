// @flow

import React from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'
import * as Theme from '../../theme'

type Props = {
  children: React.Node
};

export function Manufacturer (props: Props) {
  return (
    <Text style={styles.text}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: Theme.LISTING_PRODUCT_MANUFACTURER
  }
})
