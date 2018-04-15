// @flow

import React from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'

type Props = {
  uri: String
};

export function ProductImage (props: Props) {
  const { uri } = props

  return (
    <Image style={styles.image} source={{ uri }} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    marginHorizontal: 15,
    alignSelf: 'center'
  }
})
