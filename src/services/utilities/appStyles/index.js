import { StyleSheet } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveScreenHeight } from 'react-native-responsive-dimensions'
import { fontFamily, fontSize } from '../fonts'
import { scale } from 'react-native-size-matters';
import { colors } from '../colors';

export const appStyles = StyleSheet.create({

  //BackGround Image ==>

  BackgroundImage: {
    flex: 1,
  },

  mainContainer: {
    flex: 1
  },

  // Sigin In ==>
  Signin_TextView1: {
    flex: 0.3,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  Signin_TextView3: {
    flex: 2.3,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  Signin_TextView4: {
    flex: 0.5
  },
  Signin_TextViewContainer: {
    flex: 0.2,
    flexDirection: 'row',
  },
  Signin_Text3: {
    color: colors.appColor2,
    fontFamily: fontFamily.Poppins_Light,
    fontSize: fontSize.Size_4
  },
  Signin_Text4: {
    color: colors.appColor1,
    fontFamily: fontFamily.Poppins_SemiBold,
    fontSize: fontSize.Size_4
  },
  Signin_ScrollView: {
    flex: 1,
  },
  Signin_Container: {
    flexGrow: 1
  },
  Signin_ContentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  Signin_ImageView: {
    flex: 2.5,
    alignSelf: 'center',
    justifyContent: 'center',
    width: scale(250),
  },
  Signin_ButtonText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: fontSize.Size_5,
    color: colors.appColor6
  },
  Signin_LogoImage: {
    alignSelf: 'center',
    height: scale(120),
    width: scale(250),
    justifyContent: 'space-around'
  },
  Signin_InputField: {
    paddingLeft: responsiveWidth(3),
    paddingVertical: responsiveHeight(1),
    fontSize: fontSize.Size_2,
    fontFamily: fontFamily.Roboto_Regular,
    color: colors.appColor6
  },
  Signin_InputContainer: {
    marginHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(0.5),
    borderRadius: responsiveHeight(1.7),
    backgroundColor: colors.appColor1,
  },
  Signin_Text1: {
    color: colors.appColor1,
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: fontSize.Size_11
  },
  Signin_Text2: {
    marginTop: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3),
    fontSize: fontSize.Size_2,
    fontFamily: fontFamily.Roboto_Bold,
    color: colors.appColor9,
  },
  Signin_ButtonView: {
    flex: 2,
    alignSelf: 'center'
  },
  Signin_Button: {
    alignItems: 'center',
    alignSelf: 'center',
    height: scale(43),
    width: responsiveWidth(70),
    justifyContent: 'center',
    borderRadius: responsiveWidth(10),
    padding: responsiveWidth(1),
    shadowColor: colors.appColor12,
    elevation: 6
  },

  // Header ==>>

  Header_header: {
    position: 'absolute',
    flex: 0.5,
    padding: responsiveHeight(2.5),
    flexDirection: 'row',
    borderColor: colors.appColor14,
    backgroundColor: colors.appColor2
  },
  Header_imageView: {
    flex: 1,
    justifyContent: 'space-around',
  },
  Header_svg: {
    alignSelf: 'center',
    height: responsiveHeight(1.99),
    width: responsiveWidth(2.1),
  },
  Header_textView1: {
    flex: 4.5,
    justifyContent: 'space-around',
  },
  Header_text1: {
    fontFamily: fontFamily.Roboto_Bold,
    marginLeft: responsiveWidth(11),
    fontSize: fontSize.Size_6
  },

  // SignUp ==>>

  Signup_Maincontainer: {
    flex: 1,
  },
  Signup_ScrollView: {
    flex: 1,
  },
  Signup_Container: {
    flexGrow: 1
  },
  Signup_ContentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  Signup_ButtonText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: fontSize.Size_5,
    color: colors.appColor6
  },
  Signup_InputView: {
    height: scale(190),
    marginTop: responsiveHeight(8.9),
  },
  Signup_ImageView: {
    flex: 1,
    justifyContent: 'space-around',
  },
  Signup_TextView1: {
    flex: 4.5,
    justifyContent: 'space-around',
  },
  Signup_Svg: {
    alignSelf: 'center',
    height: responsiveHeight(1.99),
    width: responsiveWidth(2.1),
  },
  Signup_ImageContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  Signup_PasswordContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  Signup_Icon1: {
    alignSelf: "center",
    marginTop: responsiveHeight(-1.5)
  },
  Signup_Text3: {
    color: colors.appColor2,
    alignSelf: 'center',
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: fontSize.Size_3
  },
  Signup_Text4: {
    alignSelf: 'flex-start',
    color: colors.appColor3,
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: fontSize.Size_3
  },
  Signup_View1: {
    alignItems: 'flex-start',
    top: scale(20),
    marginLeft: scale(-80),
    marginRight: responsiveHeight(3)
  },
  Signup_View2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Signup_View3: {
    flex: 0.4,
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },
  Signup_View4: {
    flex: 0.21,
    marginLeft: responsiveWidth(-1),
    alignSelf: 'center',
    justifyContent: 'center'
  },
  Signup_View5: {
    flex: 0.3,
    marginLeft: responsiveWidth(-1),
    alignSelf: 'center',
    justifyContent: 'center'
  },
  Signup_View6: {
    flex: 0.08,
    marginLeft: responsiveWidth(-1),
    alignSelf: 'center',
    justifyContent: 'center'
  },
  Signup_View7: {
    flex: 0.3,
    alignSelf: 'center',
    justifyContent: 'center'
  },

  // Vehicle Detail ==>

  VehicleDetail_ScrollView: {
    flex: 1,
  },
  VehicleDetail_Container: {
    flexGrow: 1
  },
  VehicleDetail_ContentContainer: {
    flexGrow: 1,
  },
  VehicleDetail_MainContainer: {
    flex: 1,
    backgroundColor: colors.appColor2
  },
  VehicleDetail_Textview1: {
    flex: 0.01,
    marginTop: responsiveHeight(1),
    justifyContent: 'center',
    alignItems: 'center'
  },
  VehicleDetail_Text1: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: fontSize.Size_7,
    color: colors.appColor7
  },
  VehicleDetail_InputView: {
    flex: 0.1
  },
  VehicleDetail_Textview2: {
    flex: 5,
    justifyContent: 'center'
  },
  VehicleDetail_Text2: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: fontSize.Size_11,
    color: colors.appColor6
  },
  VehicleDetail_CheckBoxContainer: {
    flex: 0.1,
    marginTop: responsiveHeight(1.5)
  },
  VehicleDetail_InnerCheckBoxContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  VehicleDetail_CheckBox: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  VehicleDetail_ButtonText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: fontSize.Size_5,
    color: colors.appColor2
  },
  VehicleDetail_ButtonView: {
    flex: 0.8,
    alignSelf: 'center'
  },
  VehicleDetail_Indicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.appColor39,
  },

  // Profile Setup ==>

  S_Profile_ScrollView: {
    flex: 1,
    marginTop: scale(65.8)
  },
  S_Profile_Container: {
    flexGrow: 1
  },
  S_Profile_ContentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  S_Profile_MainContainer: {
    flex: 1,
    marginTop: responsiveHeight(-9),
  },
  S_Profile_ButtonView: {
    flex: 2,
    alignSelf: 'center'
  },
  S_Profile_ButtonText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: fontSize.Size_5,
    color: colors.appColor6
  },
  S_Profile_InputView: {
    flex: 1,
    marginTop: responsiveHeight(8.9),
    paddingBottom: responsiveHeight(-1)
  },

  // Edit Profile ==>

  E_Profile_ScrollView: {
    flex: 1,
    marginTop: responsiveHeight(8.9),
  },
  E_Profile_Container: {
    flexGrow: 1
  },
  E_Profile_ContentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  E_Profile_MainContainer: {
    flex: 1,
    marginTop: responsiveHeight(-9),
  },
  E_Profile_InputView: {
    flex: 1,
    marginTop: responsiveHeight(8.9),
    paddingBottom: responsiveHeight(-1)
  },
  E_Profile_ButtonView: {
    flex: 2,
    alignSelf: 'center'
  },
  E_Profile_ButtonText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: fontSize.Size_5,
    color: colors.appColor6
  },

  // Home ==>

  Home_ScrollView: {
    flex: 1,
  },
  Home_Container: {
    flexGrow: 1
  },
  Home_ContentContainer: {
    flexGrow: 1,
  },
  Home_MainContainer: {
    flex: 1,
    backgroundColor: colors.appColor2
  },

  Home_Textview2: {
    flex: 0.01,
    marginTop: responsiveHeight(1),
    justifyContent: 'center',
    alignItems: 'center'
  },
  Home_Text2: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: fontSize.Size_8,
    color: colors.appColor7
  },
  Home_ButtonText: {
    fontSize: fontSize.Size_5,
    fontFamily: fontFamily.Roboto_Bold,
    color: colors.appColor6
  },
  Home_Calenderview: {
    flex: 0.01
  },
  Home_Timeview: {
    flex: 0.01
  },
  Home_Inputview1: {
    flex: 0.01,
  },
  Home_Inputview2: {
    flex: 0.01
  },
  Home_Buttonview: {
    flex: 1,
    alignSelf: 'center'
  },

  // Location Modal ==>>

  LocationModal_ButtonText: {
    fontFamily: fontFamily.Poppins_Regular,
    top: scale(2),
    fontSize: fontSize.Size_11,
    color: colors.appColor2
  },
  LocationModal_Modal: {
    marginTop: responsiveHeight(5),
  },
  LocationModal_MainContainer: {
    position: 'absolute',
    width: responsiveWidth(90),
    borderRadius: responsiveWidth(4),
    backgroundColor: colors.appColor2,
    justifyContent: 'center',
  },
  LocationModal_SvgView: {
    marginTop: responsiveHeight(-6),
    height: scale(80),
    width: scale(80),
    borderRadius: responsiveWidth(25),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  LocationModal_InnerContainer: {
    marginTop: responsiveHeight(1),
  },
  LocationModal_Text: {
    fontFamily: fontFamily.Poppins_Medium,
    textAlign: 'center',
    color: colors.appColor6,
    fontSize: fontSize.Size_17
  },
  LocationModal_InputView: {
    height: responsiveHeight(4.4),
    marginTop: responsiveHeight(1),
    marginHorizontal: responsiveWidth(5.5),
    justifyContent: 'center',
    marginBottom: responsiveHeight(1),
  },
  LocationModal_Input: {
    paddingVertical: responsiveWidth(1),
    backgroundColor: colors.appColor27,
    borderRadius: responsiveWidth(2),
    fontFamily: fontFamily.Poppins_Light,
    fontSize: fontSize.Size_4,
    color: colors.appColor26
  },
  LocationModal_TouchableButton: {
    width: responsiveWidth(30)
  },

  // Oil Type Modal ==>

  OiltypeModal_Modal: {
    marginTop: responsiveHeight(5),
  },
  OiltypeModal_MainContainer: {
    position: 'absolute',
    width: responsiveWidth(90),
    borderRadius: responsiveWidth(4),
    backgroundColor: colors.appColor22,
    justifyContent: 'center',
  },
  OiltypeModal_TouchableConatiner: {
    backgroundColor: colors.appColor22,
    elevation: 2,
    borderRadius: responsiveWidth(4),
    marginHorizontal: responsiveWidth(5),
    marginBottom: responsiveHeight(1)
  },
  OiltypeModal_TouchableText1: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.appColor20
  },
  OiltypeModal_Text1: {
    color: colors.appColor9,
    fontFamily: fontFamily.Roboto_Regular,
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(2),
    fontSize: fontSize.Size_1,
    paddingLeft: responsiveWidth(6),
  },
  OiltypeModal_TouchableText2: {
    justifyContent: 'center',
  },
  OiltypeModal_TextView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.appColor20
  },
  OiltypeModal_Text2: {
    fontFamily: fontFamily.Roboto_Regular,
    color: colors.appColor9,
    paddingVertical: responsiveHeight(1),
    fontSize: fontSize.Size_1,
  },

  // Thank You ==>

  ThanYou_Container: {
    flexGrow: 1
  },
  ThanYou_ScrollView: {
    flex: 1,
  },
  ThanYou_ContentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  ThanYou_MainContainer: {
    flex: 1,
  },
  ThanYou_ThumbImage: {
    top: responsiveHeight(-1),
    height: responsiveHeight(15),
    alignSelf: 'center',
    width: responsiveWidth(25)
  },
  ThanYou_ThumbContainer: {
    flex: 0.5,
    backgroundColor: colors.appColor1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ThanYou_ThumbView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(150),
    borderRadius: responsiveWidth(200),
    width: scale(150),
    backgroundColor: colors.appColor2,
    elevation: 3
  },
  ThanYou_InnerContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: responsiveHeight(55),
  },
  ThanYou_TextView1: {
    alignItems: 'center'
  },
  ThanYou_Text1: {
    color: colors.appColor2,
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: fontSize.Size_9,
    textAlign: 'center'
  },
  ThanYou_TextView2: {
    marginTop: responsiveHeight(2.5),
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(13)
  },
  ThanYou_Text2: {
    color: colors.appColor2,
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: fontSize.Size_14,
    textAlign: 'center'
  },
  ThanYou_ImageContainer: {
    flexDirection: 'row',
    marginTop: responsiveHeight(3.5),
    justifyContent: 'center',
  },
  ThanYou_FacebookImage: {
    justifyContent: 'center',
    height: scale(50),
    alignSelf: 'center',
    width: scale(48),
    marginHorizontal: responsiveWidth(2)
  },
  ThanYou_InstagramImage: {
    justifyContent: 'center',
    height: scale(50),
    alignSelf: 'center',
    width: scale(48),
    marginHorizontal: responsiveWidth(2)
  },

  // Payment Methods ==>

  PaymentMethods_ScrollView: {
    flexGrow: 1,
    marginTop: scale(66.7),
  },
  PaymentMethods_Container: {
    flexGrow: 1,
  },
  PaymentMethods_ContentContainer: {
    flexGrow: 1,
  },
  PaymentMethods_MainContainer: {
    flex: 1,
  },
  PaymentMethods_TextView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  PaymentMethods_Text1: {
    color: colors.appColor6,
    textAlign: 'center',
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: fontSize.Size_15
  },
  PaymentMethods_View1: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  PaymentMethods_Textview_Container1: {
    top: responsiveHeight(3),
    position: 'absolute',
    backgroundColor: colors.appColor1,
    borderRadius: responsiveWidth(7),
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(38),
    width: responsiveWidth(75),
    shadowColor: colors.appColor1,
    elevation: 10,
  },
  PaymentMethods_Textview_Container2: {
    flex: 0.1,
    position: 'absolute',
    marginVertical: responsiveHeight(1),
    height: responsiveHeight(30),
    width: responsiveWidth(75),
    backgroundColor: colors.appColor2,
  },
  PaymentMethods_InnerTextview_Container: {
    flex: 3,
    flexDirection: 'row'
  },
  PaymentMethods_TextView2: {
    flex: 1,
  },
  PaymentMethods_Text2: {
    color: colors.appColor6,
    textAlign: 'right',
    fontFamily: fontFamily.Roboto_Bold,
    marginTop: responsiveHeight(2.5),
    fontSize: fontSize.Size_10
  },
  PaymentMethods_TextView3: {
    flex: 2,
    justifyContent: 'center',
  },
  PaymentMethods_Text3: {
    fontFamily: fontFamily.Roboto_Bold,
    color: colors.appColor6,
    textAlign: 'left',
    fontSize: fontSize.Size_16
  },
  PaymentMethods_TextView4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  PaymentMethods_Text4: {
    color: colors.appColor6,
    textAlign: 'center',
    fontFamily: fontFamily.Roboto_Regular,
    marginTop: responsiveHeight(-1.5),
    paddingHorizontal: responsiveWidth(2.5),
    fontSize: fontSize.Size_15
  },
  PaymentMethods_TextView5: {
    flex: 0.1,
    top: responsiveHeight(6),
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  PaymentMethods_Text5: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: fontSize.Size_17,
    color: colors.appColor1
  },
  PaymentMethods_PaymentContainer: {
    flex: 1,
    top: responsiveHeight(6)
  },
  PaymentMethods_Inner_PaymentContainer1: {
    flex: 1,
    paddingHorizontal: responsiveWidth(4),
    marginBottom: responsiveHeight(1),
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  PaymentMethods_Inner_PaymentContainer2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: responsiveHeight(7),
    paddingHorizontal: responsiveWidth(4),
  },

  // Privacy And Term of Services ==>

  Privacy_Term_MainContainer: {
    flex: 1,
    paddingHorizontal: responsiveWidth(3.5)
  },
  Privacy_Term_ScrollView: {
    flex: 1,
    marginTop: responsiveHeight(7.6)
  },
  Privacy_Term_ContentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },

  // User Profile  ==>
  UserProfile_MainContainer: {
    flex: 1,
  },
  UserProfile_InputView: {
    flex: 1,
    marginTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(3),
  },
  UserProfile_IconView: {
    position: 'absolute',
    left: scale(310),
    top: scale(29)
  },
  UserProfile_ButtonView: {
    flexDirection: 'row',
    position: 'absolute',
    left: scale(30),
    top: scale(190)
  },
  UserProfile_Button: {
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
    width: responsiveWidth(30)
  },

  // Down Modal ==>
  DownModal_Modal: {
    marginTop: responsiveHeight(53),
    width: responsiveWidth(100),
    alignSelf: 'center',
  },
  DownModal_MainContainer: {
    width: responsiveWidth(100),
    justifyContent: 'center',
  },
  DownModal_Image: {
    height: responsiveHeight(50),
    borderTopLeftRadius: responsiveWidth(15),
    borderTopRightRadius: responsiveWidth(15),
    width: responsiveWidth(100)
  },
  DownModal_ButtonText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: fontSize.Size_5,
    color: colors.appColor6
  },
  DownModal_SvgView: {
    top: responsiveHeight(5),
    position: 'absolute',
    alignSelf: 'center'
  },
  DownModal_TextView: {
    top: responsiveScreenHeight(17),
    position: 'absolute',
    alignSelf: 'center'
  },
  DownModal_Text1: {
    textAlign: 'center',
    color: colors.appColor2,
    fontSize: fontSize.Size_12,
    paddingHorizontal: scale(37),
    fontFamily: fontFamily.Roboto_Bold,
  },
  DownModal_Text2: {
    textAlign: 'center',
    color: colors.appColor2,
    fontSize: fontSize.Size_13,
    top: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(20),
    fontFamily: fontFamily.Roboto_Medium,
  },

  // Payment Modal ==>

  PaymentModal_SvgView: {
    marginTop: responsiveHeight(-5.5),
    height: scale(80),
    width: scale(80),
    borderRadius: responsiveWidth(300),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 9,
    shadowColor: colors.appColor32,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  PaymentModal_Text1: {
    top: responsiveHeight(1),
    fontFamily: fontFamily.Poppins_Regular,
    textAlign: 'center',
    color: colors.appColor6,
    fontSize: fontSize.Size_18
  },
  PaymentModal_TextView: {
    justifyContent: 'center'
  },
  PaymentModal_Text3: {
    paddingLeft: responsiveWidth(5.2),
    fontFamily: fontFamily.Montserrat_Medium,
    textAlign: 'left',
    color: colors.appColor7,
    fontSize: fontSize.Size_20
  },
  PaymentModal_Text2: {
    top: responsiveHeight(1),
    fontFamily: fontFamily.Poppins_Medium,
    textAlign: 'center',
    color: colors.appColor33,
    fontSize: fontSize.Size_19
  },
  PaymentModal_Text4: {
    color: colors.appColor7,
    fontFamily: fontFamily.Montserrat_Regular,
    marginHorizontal: responsiveWidth(4),
    fontSize: fontSize.Size_21,
  },
  PaymentModal_InputContainer: {
    top: responsiveHeight(2),
    backgroundColor: colors.appColor2,
    shadowColor: colors.appColor34,
    shadowOpacity: 0.1,
    elevation: 4,
    marginHorizontal: responsiveWidth(5),
    marginBottom: responsiveHeight(1),
  },
  PaymentModal_Input1: {
    paddingVertical: responsiveWidth(1),
    backgroundColor: colors.appColor27,
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(5),
    fontFamily: fontFamily.Montserrat_Regular,
    fontSize: fontSize.Size_4,
    color: colors.appColor26
  },
  PaymentModal_Input2: {
    width: responsiveWidth(17),
    paddingVertical: responsiveWidth(1),
    backgroundColor: colors.appColor27,
    marginHorizontal: responsiveWidth(2),
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(2),
    fontFamily: fontFamily.Montserrat_Regular,
    fontSize: fontSize.Size_4,
    color: colors.appColor26
  },
  PaymentModal_InputView: {
    height: responsiveHeight(4.4),
    marginTop: responsiveHeight(1),

    marginHorizontal: responsiveWidth(5.5),
    justifyContent: 'center',
    marginBottom: responsiveHeight(1),
  },
  PaymentModal_InputView2: {
    flexDirection: 'row',
    height: responsiveHeight(4.4),
    marginTop: responsiveHeight(1),
    marginHorizontal: responsiveWidth(5.5),
    justifyContent: 'center',
    marginBottom: responsiveHeight(1),
  },
  PaymentModal_TouchableButton: {
    width: responsiveWidth(30)
  },

  // Category Modal ==>
  
  CategoryModal_MainContainer: {
    height: responsiveHeight(52),
    width: responsiveWidth(100),
    borderTopRightRadius: responsiveWidth(10),
    borderTopLeftRadius: responsiveWidth(10),
    backgroundColor: colors.appColor2,
    justifyContent: 'center',
  },
  CategoryModal_Modal: {
    marginTop: responsiveHeight(50),
    width: responsiveWidth(100),
    alignSelf: 'center',
  },
  CategoryModal_TouchableConatiner: {
    backgroundColor: colors.appColor2,
    borderWidth: 1,
    borderColor: colors.appColor35,
    borderRadius: responsiveWidth(4),
    marginHorizontal: responsiveWidth(5),
  },
  CategoryModal_TouchableText1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.appColor35
  },
  CategoryModal_Text1: {
    color: colors.appColor36,
    fontFamily: fontFamily.Roboto_Regular,
    paddingVertical: responsiveHeight(1.7),
    paddingHorizontal: responsiveWidth(2),
    fontSize: fontSize.Size_17,
    paddingLeft: responsiveWidth(6),
  },
  CategoryModal_TouchableText2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CategoryModal_Icon: {
    paddingRight: responsiveWidth(6),
  },
})
