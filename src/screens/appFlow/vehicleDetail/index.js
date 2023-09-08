import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  BackHandler,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import Toast from 'react-native-simple-toast'
import { ImageScreenHeader } from '../../../components/hearder';
import { StatusBars } from '../../../components/statusBars'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import React, { useContext, useState, useEffect } from 'react'
import { appStyles, colors } from '../../../services'
import { InputFields } from '../../../components/textInput'
import TouchableButton from '../../../components/buttons';
import { SquareCheckBox } from '../../../components/checkBoxs';
import { DownModal } from '../../../components/modals';
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import { fontFamily } from '../../../services/utilities';
import { AuthContext } from '../../../navigation/AuthProvider'
import firestore from '@react-native-firebase/firestore';
import { DotIndicator } from 'react-native-indicators';

const VehicleDetail = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [isModalVisible, setLDown_ModalVisible] = useState(false);
  const [isSquareChecked, setIsSquareChecked] = useState(false);
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleMileage, setVehicleMileage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSquareCheckBoxChange = async () => {
    try {
      if (isSquareChecked) {
        setLoading(true);
        const documentSnapshot = await firestore()
          .collection('Users')
          .doc(user.uid)
          .get();
        if (documentSnapshot.exists) {
          const data = documentSnapshot.data();
          setVehicleMake(data.Vehicleinfo.vehicleMake || '');
          setVehicleModel(data.Vehicleinfo.vehicleModel || '');
          setVehicleYear(data.Vehicleinfo.vehicleYear || '');
          setVehicleColor(data.Vehicleinfo.vehicleColor || '');
          setVehicleMileage(data.Vehicleinfo.vehicleMileage || '');
          console.log({ data });
          console.log('Vehicle Make:', data.Vehicleinfo.vehicleMake);
          console.log('Vehicle Model:', data.vehicleModel);
          console.log('Vehicle Year:', data.vehicleYear);
          console.log('Vehicle Color:', data.vehicleColor);
          console.log('Vehicle Mileage:', data.vehicleMileage);
          setLoading(false);
        } else {
          console.warn('Document does not exist.');
          setLoading(false);
        }
      } else {
        setVehicleMake('');
        setVehicleModel('');
        setVehicleYear('');
        setVehicleColor('');
        setVehicleMileage('');
      }
    } catch (error) {
      console.error('Error fetching data from Firestore:', error);
      setLoading(false);
    }
  };
  const toggleDownModal = () => {
    if (vehicleYear.length < 4) {
      if (vehicleYear.trim() === '') {
        Toast.show('Vehicle year is empty', Toast.SHORT, Toast.TOP);
      } else {
        Toast.show('Enter valid vehicle year', Toast.SHORT, Toast.TOP);
      }
    } else if (vehicleMake.trim() === '') {
      Toast.show('Vehicle make is empty', Toast.SHORT, Toast.TOP);
    } else if (vehicleModel.trim() === '') {
      Toast.show('Vehicle model is empty', Toast.SHORT, Toast.TOP);
    } else if (vehicleColor.trim() === '') {
      Toast.show('Vehicle color is empty', Toast.SHORT, Toast.TOP);
    } else if (vehicleMileage.trim() === '') {
      Toast.show('Vehicle mileage is empty', Toast.SHORT, Toast.TOP);
    } else {
      const userData = {
        Vehicleinfo: {
          vehicleMake: vehicleMake,
          vehicleModel: vehicleModel,
          vehicleYear: vehicleYear,
          vehicleColor: vehicleColor,
          vehicleMileage: vehicleMileage,
        },
      };
      const userDocRef = firestore().collection('Users').doc(user.uid);
      setLoading(true);
      userDocRef
        .update(userData)
        .then(() => {
          console.log('User data Update in Firestore!');
          setLoading(false);
          setLDown_ModalVisible(!isModalVisible);
        })
        .catch((error) => {
          console.error('Error adding user data in Firestore:', error);
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      backHandler.remove();
    };
  }, []);
  const handleBackPress = () => {
    navigation.navigate('HomeNavigation', { screen: 'Home' });
    return true;
  };
  useEffect(() => {
    handleSquareCheckBoxChange();
  }, [isSquareChecked]);

  return (
    <KeyboardAvoidingView
      style={appStyles.VehicleDetail_Container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>

      <StatusBars hidden={false} />
      <ScrollView showsVerticalScrollIndicator={false} style={appStyles.VehicleDetail_ScrollView}
        contentContainerStyle={appStyles.VehicleDetail_ContentContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={appStyles.VehicleDetail_MainContainer}>

            <ImageScreenHeader textStyle={{ fontFamily: fontFamily.Roboto_Bold, }} text={'Vehicle Info'} />
            <View style={appStyles.VehicleDetail_Textview1}>
              <Text style={appStyles.VehicleDetail_Text1}>Please Enter Details</Text>
            </View>
            <View style={appStyles.VehicleDetail_InputView}>
              <View style={{
                ...appStyles.Signin_InputContainer,
                backgroundColor: colors.appColor22,
                marginTop: responsiveHeight(3),
                paddingRight: responsiveWidth(20),
                height: scale(61),
                elevation: 4
              }}>
                <Text style={{ ...appStyles.Signin_Text2 }}>Vehicle Year</Text>
                <InputFields style={{
                  ...appStyles.Signin_InputField,
                  marginTop: responsiveHeight(-0.5),
                }}
                  maxLength={4}
                  placeholderTextColor={colors.appColor19}
                  placeholder={'Enter the year of your Vehicle'}
                  value={vehicleYear}
                  onChangeText={setVehicleYear}
                  keyboardType={'numeric'} />
              </View>
              <View style={{
                ...appStyles.Signin_InputContainer,
                backgroundColor: colors.appColor22,
                height: scale(60),
                elevation: 4
              }}>
                <Text style={appStyles.Signin_Text2}>Vehicle Make</Text>
                <InputFields style={{
                  ...appStyles.Signin_InputField,
                  marginTop: responsiveHeight(-0.5),
                }}
                  placeholderTextColor={colors.appColor19}
                  placeholder={'Enter make of your Vehicle'}
                  value={vehicleMake}
                  onChangeText={setVehicleMake}
                  keyboardType={'default'} />
              </View>
              <View style={{
                ...appStyles.Signin_InputContainer,
                backgroundColor: colors.appColor22,
                height: scale(60),
                elevation: 4
              }}>
                <Text style={appStyles.Signin_Text2}>Vehicle Model</Text>
                <InputFields style={{
                  ...appStyles.Signin_InputField,
                  marginTop: responsiveHeight(-0.5)
                }}
                  placeholderTextColor={colors.appColor19}
                  placeholder={'Enter model of your Vehicle'}
                  value={vehicleModel}
                  onChangeText={setVehicleModel}
                  keyboardType={'default'} />
              </View>
              <View style={{
                ...appStyles.Signin_InputContainer,
                backgroundColor: colors.appColor22,
                height: scale(60),
                elevation: 4
              }}>
                <Text style={appStyles.Signin_Text2}>Vehicle Color</Text>
                <InputFields style={{
                  ...appStyles.Signin_InputField,
                  marginTop: responsiveHeight(-0.5)
                }}
                  placeholderTextColor={colors.appColor19}
                  placeholder={'Enter color of your Vehicle'}
                  value={vehicleColor}
                  onChangeText={setVehicleColor}
                  keyboardType={'default'} />
              </View>
              <View style={{
                ...appStyles.Signin_InputContainer,
                backgroundColor: colors.appColor22,
                height: scale(60),
                elevation: 4
              }}>
                <Text style={appStyles.Signin_Text2}>Vehicle Mileage</Text>
                <InputFields style={{
                  ...appStyles.Signin_InputField,
                  marginTop: responsiveHeight(-0.5)
                }}
                  placeholderTextColor={colors.appColor19}
                  placeholder={'If unknown enter approximate'}
                  value={vehicleMileage}
                  onChangeText={setVehicleMileage}
                  keyboardType={'default'} />
              </View>
            </View>
            <View style={appStyles.VehicleDetail_CheckBoxContainer}>
              <View style={appStyles.VehicleDetail_InnerCheckBoxContainer}>
                <View style={appStyles.VehicleDetail_CheckBox}>
                  <SquareCheckBox onCheckBoxChange={(data) => {
                    setIsSquareChecked(data);
                  }} />
                </View>
                <View style={appStyles.VehicleDetail_Textview2}>
                  <Text style={appStyles.VehicleDetail_Text2}>Pull info from profile here</Text>
                </View>
              </View>
            </View>
            <View style={appStyles.VehicleDetail_ButtonView}>
              <TouchableButton style={{
                ...appStyles.Signin_Button,
              }}
                touchableStlye={{
                  marginTop: responsiveHeight(3),
                  marginBottom: responsiveHeight(4)
                }}
                color={[colors.appColor29, colors.appColor6]}
                styles={appStyles.VehicleDetail_ButtonText}
                title="ADD" onPress={toggleDownModal} />
              <DownModal style={{ top: responsiveHeight(2) }}
                modalstyle={colors.appColor6}
                name={'PaymentMethods'}
                isVisible={isModalVisible}
                onBackdropPress={toggleDownModal}
                text={'Vehicle has been added successfully! One step left!'}
                vehicleMake={vehicleMake}
                vehicleColor={vehicleColor}
                vehicleMileage={vehicleMileage}
                vehicleYear={vehicleYear}
                vehicleModel={vehicleModel} />

            </View>
            {loading && (
              <View
                style={appStyles.VehicleDetail_Indicator}>
                <DotIndicator size={9} color={colors.appColor6} />
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default VehicleDetail