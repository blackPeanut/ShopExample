// @flow

import React, { Component } from 'react'
import {
  ActivityIndicator,
  FlatList
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

    setTimeout(this.addLoadedProducts, 2000)
  }

  addLoadedProducts = () => {
    this.props.dispatch(productsActions.fetchProductsSuccess(staticProductsList))
  }

  renderItem = ({ item, index }) => (<ListingProduct item={{...item, index}} />);

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