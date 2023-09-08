import { responsiveFontSize, responsiveScreenFontSize, } from 'react-native-responsive-dimensions'

const fontFamily = {
  Roboto_Light: 'Roboto-Light',
  Roboto_Regular: 'Roboto-Regular',
  Roboto_Medium: 'Roboto-Medium',
  Roboto_Bold: 'Roboto-Bold',

  Poppins_Bold: 'Poppins-Bold',
  Poppins_Light: 'Poppins-Light',
  Poppins_Medium: 'Poppins-Medium',
  Poppins_Regular: 'Poppins-Regular',
  Poppins_SemiBold: 'Poppins-SemiBold',

  Montserrat_Medium: 'Montserrat-Medium',
  Montserrat_Regular: 'Montserrat-Regular'
}
const fontSize = {
  Size_1: responsiveFontSize(2.3),
  Size_2: responsiveFontSize(1.8),
  Size_3: responsiveFontSize(1.7),
  Size_4: responsiveFontSize(1.9),
  Size_5: responsiveFontSize(2.2),
  Size_6: responsiveFontSize(3),
  Size_7: responsiveFontSize(4),
  Size_8: responsiveFontSize(3.5),
  Size_9: responsiveFontSize(5),
  Size_10: responsiveFontSize(6),
  Size_11: responsiveFontSize(2),
  Size_12: responsiveScreenFontSize(3.7),
  Size_13: responsiveScreenFontSize(3.2),
  Size_14: responsiveFontSize(2.6),
  Size_15: responsiveFontSize(1.6),
  Size_16: responsiveFontSize(13),
  Size_17: responsiveFontSize(2.5),
  Size_18: responsiveFontSize(2.7),
  Size_19: responsiveFontSize(2.4),
  Size_20: responsiveFontSize(1.5),
  Size_21: responsiveFontSize(3.3),
}


export { fontFamily, fontSize }

