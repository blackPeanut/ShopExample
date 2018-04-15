// @flow

import React from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'
import * as Theme from '../../theme'
import moment from 'moment'

type Props = {
  children: React.Node
};

export function ShippingDate (props: Props) {
  const date = moment(props.children)
  const nearestShippingDate = date.diff(moment(), 'days')
  const numeralDay = nearestShippingDate > 1 ? 'days' : 'day'
  return (
    <Text style={styles.text}>
      {`This item can be shipped in ${nearestShippingDate} ${numeralDay}`}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: Theme.LISTING_PRODUCT_SHIPPING_DATE
  }
})
