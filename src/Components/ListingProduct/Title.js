// @flow

import React from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'
import * as Theme from '../../Theme'

type Props = {
  children: React.Node,
  idx: Number
};

export function Title (props: Props) {
  const { idx } = props
  return (
    <Text style={styles.text} numberOfLines={2}>
      {`${idx + 1}. ${props.children}`}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: Theme.LISTING_PRODUCT_TITLE
  }
})
