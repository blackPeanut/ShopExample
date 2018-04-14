/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import ProductList from './Screens/ProductList'
import ProductCard from './Screens/ProductCard'

const RootStack = StackNavigator({
  ProductList: {
    screen: ProductList
  },
  ProductCard: {
    screen: ProductCard
  }
})

export default class App extends Component {
  render () {
    return <RootStack />
  }
}
