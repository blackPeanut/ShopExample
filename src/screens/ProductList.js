// @flow

import React, { Component } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import ListingProduct from '../components/ListingProduct/ListingProduct'
import staticProductsList from '../../static/list'
import * as productsActions from '../redux/productsActions'

type Props = {}

class ProductList extends Component<Props> {
  componentDidMount () {
    this.loadProducts()
  }

  loadProducts = () => {
    this.props.dispatch(productsActions.fetchProductsBegin())

    setTimeout(this.addLoadedProducts, 500)
  }

  addLoadedProducts = () => {
    this.props.dispatch(productsActions.fetchProductsSuccess(staticProductsList))
  }

  renderItem = ({ item, index }) => {
    return (
      <ListingProduct
        item={{...item, index}}
        removeProduct={() => this.removeProductPrompt(item.id, item.title)}
        showProduct={() => this.showProduct(item.id)}
      />
    )
  };

  removeProduct = (id) => {
    this.props.dispatch(productsActions.productRemove(id))
  }

  removeProductPrompt = (id, title) => {
    Alert.alert(
      'Do you want to remove this product?',
      `${title}`,
      [
        {text: 'Yes', onPress: () => this.removeProduct(id)},
        {text: 'Cancel', onPress: null, style: 'cancel'}
      ],
      { cancelable: true }
    )
  }

  showProduct = (id) => {
    this.props.navigation.navigate('ProductCard', { id })
  }

  render () {
    if (this.props.products.loading) {
      return <ActivityIndicator animating={true} />
    }

    return (
      <FlatList
        data={this.props.products.items}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
export default connect(mapStateToProps)(ProductList)
