// @flow

import React from 'react'
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native'
import * as Theme from '../../theme'

type Props = {
  phone: string,
  email: string,
  editable: boolean,
  onChangePhoneText: Function,
  onChangeEmailText: Function
};

export function EditableContact (props: Props) {
  const {
    phone,
    email,
    editable,
    onChangePhoneText,
    onChangeEmailText

  } = props

  return (
    <View>
      <TextInput
        style={styles.text}
        editable={editable}
        value={phone}
        onChangeText={onChangePhoneText}
      />
      <TextInput
        style={styles.text}
        editable={editable}
        value={email}
        onChangeText={onChangeEmailText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: '700',
    color: Theme.PRODUCT_CARD_CONTACT
  }
})
