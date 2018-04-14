// @flow

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

type Props = {};

export default class ProductCard extends Component<Props> {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Product card
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
