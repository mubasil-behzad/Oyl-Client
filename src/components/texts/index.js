import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import React from 'react'
import { colors } from '../../services'
import { fontFamily, fontSize } from '../../services/utilities'
import { scale } from 'react-native-size-matters'

export const Texts = ({ text }) => {
  return (
    <View style={styles.Texts_TextView}>
      <Text style={styles.Texts_Text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Texts_TextView: {
    top: scale(43),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Texts_Text: {
    color: colors.appColor3,
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: fontSize.Size_1
  }
})

