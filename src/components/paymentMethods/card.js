import React from 'react'
import { Text, View } from 'react-native'
import TouchableOpacity from '../common/touchableOpacity'
import CardBrandImage from './cardBrandImage'

export default (props) => {
  const p = props.paymentSource
  const month = p.expMonth.length > 1 ? p.expMonth : `0${p.expMonth}`
  return (
    <TouchableOpacity {...props} styles={props.styles} style={props.styles.cardTextOuterContainer} onPress={() => props.selectPaymentHandler(props.paymentSource)}>
      <View style={props.styles.cardTextContainer}>
        <CardBrandImage style={props.styles.cardBrandImage} brand={p.brand} />
        <Text style={props.styles.cardTextLast4}>{`**** ${p.last4}`}</Text>
        <Text style={props.styles.cardExpiry}>{`${month}/${p.expYear}`}</Text>
      </View>
    </TouchableOpacity>
  )
}