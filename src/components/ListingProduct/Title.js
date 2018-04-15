// @flow

import React from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'
import * as Theme from '../../theme'
import { capitalize, cleanString } from '../../utils/utils'

type Props = {
  title: string,
  idx: Number
};

export function Title (props: Props) {
  const { idx, title } = props
  let cleanTitle = capitalize(cleanString(title))
  return (
    <Text style={styles.text} numberOfLines={2}>
      {`${idx + 1}. ${cleanTitle}`}
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
