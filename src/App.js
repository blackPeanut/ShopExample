/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import ProductList from './screens/ProductList'
import ProductCard from './screens/ProductCard'
import createReduxStore from './redux/createStore'

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
    const store = createReduxStore()
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}
