// @flow

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

type Props = {};

export default class ProductList extends Component<Props> {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Product list
        </Text>
        <Button title={'product card'} onPress={() => this.props.navigation.navigate('ProductCard')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
