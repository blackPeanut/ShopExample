// @flow

import React from 'react'
import {
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'
const { width } = Dimensions.get('window')

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
    marginTop: 20,
    width: width / 1.5,
    height: width / 1.5,
    alignSelf: 'center'
  }
})
