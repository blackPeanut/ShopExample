// @flow

import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  Button
} from 'react-native'
import {connect} from 'react-redux'
import {
  EditableTitle,
  ProductImage,
  EditableManufacturer,
  EditablePrice,
  EditableContact
} from '../components/ProductCard'
import * as Theme from '../theme'
import validation from '../utils/validation'

type Props = {
  navigation: { state: { params: { id: number }}},
  product: {
    title: string,
    currency: string,
    price: number,
    manufacturer: string,
    contact: Object,
  }
};

class ProductCard extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {}
    const empty = () => null
    return {
      headerRight: (
        <Button
          onPress={params.editMode || empty}
          title={params.editStatus || ''}
          color="#177efb"
        />
      )
    }
  };

  state = {
    editable: false
  }

  componentWillMount () {
    this.props.navigation.setParams({ editMode: this.toggleEditMode, editStatus: 'Edit' })
  }

  componentDidMount () {
    this.setState({
      ...this.props.product
    })
  }

  toggleEditMode = () => {
    // TODO: validate!!
    if (this.state.editable) {
      let valid = this.validateField()

      if (valid) {
        this.setState({ editable: !this.state.editable }, () => {
          this.props.navigation.setParams({ editStatus: this.state.editable ? 'Finish Editing' : 'Edit' })
        })
      }
    } else {
      this.setState({ editable: !this.state.editable }, () => {
        this.props.navigation.setParams({ editStatus: this.state.editable ? 'Finish Editing' : 'Edit' })
      })
    }
  }

  validateField = () => {
    let {
      title,
      price,
      manufacturer,
      contact: {
        email,
        phone
      }
    } = this.state
    let emptyValidation = [title, price, manufacturer, email, phone]
    let numberValidation = [price, phone]
    let emailValidation = [email]

    let filled = emptyValidation.every(str => validation.isNotEmpty(str))
    let numbers = numberValidation.every(str => validation.isNumber(str))
    let emails = emailValidation.every(str => validation.isEmailAddress(str))

    if (!filled) {
      alert('Please, ensure that all fields are filled')
      return false
    } else if (!numbers) {
      alert('Please, check your phone number and price, they should contain only numbers')
      return false
    } else if (!emails) {
      alert('Please, check your email')
      return false
    }
    return true
  }

  onChangeText = (val, key) => {
    if (key === 'email' || key === 'phone') {
      this.setState({ contact: { ...this.state.contact, [key]: val } })
    } else {
      this.setState({ [key]: val })
    }
  }

  render () {
    const {
      uri,
      title,
      price,
      currency,
      manufacturer,
      contact
    } = this.state

    const { editable } = this.state

    console.log('state', this.state)

    return (
      <ScrollView style={styles.container}>
        <EditableTitle
          editable={editable}
          validate={this.validateField}
          title={title}
          onChangeText={val => this.onChangeText(val, 'title')}
        />

        <ProductImage uri={uri} />

        <EditableManufacturer
          editable={editable}
          manufacturer={manufacturer}
          onChangeText={val => this.onChangeText(val, 'manufacturer')}
        />

        <EditablePrice
          currency={currency}
          editable={editable}
          price={price}
          onChangeText={val => this.onChangeText(val, 'price')}

        />

        <EditableContact
          {...contact}
          editable={editable}
          onChangeEmailText={val => this.onChangeText(val, 'email')}
          onChangePhoneText={val => this.onChangeText(val, 'phone')}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.navigation.state.params.id
  const products = state.products.items
  const product = products.find(el => el.id === productId)

  return {
    products,
    product
  }
}
export default connect(mapStateToProps)(ProductCard)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Theme.PRODUCT_CARD
  }
})
