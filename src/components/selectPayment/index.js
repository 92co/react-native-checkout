import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import _ from 'lodash'
import PaymentMethods from '../paymentMethods'
import defaultStyles from './defaultStyles'
import TouchableOpacity from '../common/touchableOpacity'
import cardExpiry from '../../../assets/images/card_expiry.png'

export default class SelectPayment extends Component {
  static propTypes = {
    enableApplePay: PropTypes.bool,
    applePayHandler: PropTypes.func,
    paymentSources: PropTypes.array,
    addCardHandler: PropTypes.func.isRequired,
    selectPaymentHandler: PropTypes.func.isRequired,
    addNewCardText: PropTypes.string,
    styles: PropTypes.object,
  }

  static defaultProps = {
    enableApplePay: false,
    paymentSources: [],
    addNewCardText: 'Credit or Debit Card',
  }

  render() {
    const styles = _.merge({}, defaultStyles, this.props.styles)
    return (
      <View style={styles.selectPaymentContainer}>
        <PaymentMethods
          paymentSources={this.props.paymentSources}
          selectPaymentHandler={this.props.selectPaymentHandler}
          applePayHandler={this.props.applePayHandler}
          enableApplePay={this.props.enableApplePay}
          styles={styles}
        />
        <TouchableOpacity style={styles.cardTextOuterContainer} styles={styles} onPress={() => this.props.addCardHandler()} last>
          <View style={styles.cardTextContainer}>
            <Image style={styles.cardBrandImage} source={cardExpiry} />
            <Text style={styles.addButtonText}>{this.props.addNewCardText}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
