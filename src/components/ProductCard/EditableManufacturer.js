// @flow

import React from 'react'
import {
  StyleSheet,
  TextInput
} from 'react-native'
import * as Theme from '../../theme'

type Props = {
  editable: boolean,
  manufacturer: string,
  onChangeText: Function
};

export function EditableManufacturer (props: Props) {
  const {
    editable,
    manufacturer,
    onChangeText
  } = props

  return (
    <TextInput
      style={styles.text}
      editable={editable}
      value={manufacturer}
      onChangeText={onChangeText}
    />
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Theme.PRODUCT_CARD_MANUFACTURER_BORDER,
    color: Theme.PRODUCT_CARD_MANUFACTURER
  }
})
