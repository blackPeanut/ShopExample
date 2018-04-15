// @flow

import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import * as Theme from '../../theme'
import getSymbolFromCurrency from 'currency-symbol-map'

type Props = {
  price: number,
  currency: string,
  style: StyleSheet,
  editable: boolean,
  onChangeText: Function
};

export function EditablePrice (props: Props) {
  const {
    currency,
    editable,
    price,
    onChangeText
  } = props
  const cSymbol = getSymbolFromCurrency(currency)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{cSymbol}</Text>
      <TextInput
        style={styles.text}
        editable={editable}
        keyboardType={'numeric'}
        value={price ? price.toString() : null}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  text: {
    marginTop: 5,
    fontSize: 25,
    fontWeight: '700',
    color: Theme.PRODUCT_CARD_PRICE
  }
})
