// @flow

import React from 'react'
import {
  StyleSheet,
  TextInput
} from 'react-native'
import * as Theme from '../../theme'

type Props = {
  editable: boolean,
  title: string,
  onChangeText: Function
};

export function EditableTitle (props: Props) {
  const {
    editable,
    title,
    onChangeText
  } = props

  return (
    <TextInput
      style={styles.text}
      editable={editable}
      multiline={true}
      value={title}
      onChangeText={onChangeText}
    />
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '600',

    color: Theme.PRODUCT_CARD_TITLE
  }
})
