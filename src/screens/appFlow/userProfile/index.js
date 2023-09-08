import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import React, { useContext, useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { InputFields } from '../../../components/textInput'
import { CategoryModal } from '../../../components/modals';
import { appStyles, colors } from '../../../services';
import { scale } from 'react-native-size-matters';
import TouchableButton from '../../../components/buttons';
import { appImages } from '../../../services/utilities';
import { AuthContext } from '../../../navigation/AuthProvider'
import firestore from '@react-native-firebase/firestore';
import { DotIndicator } from 'react-native-indicators';
import { ImagePicker } from 'react-native-image-picker';
import { ScreenHeader } from '../../../components/hearder';

const UserProfile = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleMileage, setVehicleMileage] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      backHandler.remove();
    };
  }, []);
  const handleBackPress = () => {
    navigation.reset({ index: 0, routes: [{ name: 'HomeNavigation', params: { screen: 'Home' } }] });
    return true;
  };
  useEffect(() => {
    fetchUserData();
  }, [route]);
  const fetchUserData = async () => {
    try {
      setLoading(true);
      const documentSnapshot = await firestore()
        .collection('Users')
        .doc(user.uid)
        .get();
      if (documentSnapshot.exists) {
        const data = documentSnapshot.data();
        setFirstName(data.firstName || '');
        setLastName(data.lastName || '');
        setBirthDay(data.birthDay || '');
        setVehicleMake(data.Vehicleinfo.vehicleMake || '');
        setVehicleModel(data.Vehicleinfo.vehicleModel || '');
        setVehicleYear(data.Vehicleinfo.vehicleYear || '');
        setVehicleColor(data.Vehicleinfo.vehicleColor || '');
        setVehicleMileage(data.Vehicleinfo.vehicleMileage || '');
        setLoading(false);
      } else {
        setFirstName('');
        setLastName('');
        setBirthDay('');
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

  return (

    <ImageBackground
      source={appImages.Background}
      style={appStyles.BackgroundImage}>
      <KeyboardAvoidingView
        style={appStyles.ThanYou_Container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        <ScreenHeader styles={{ backgroundColor: colors.appColor18 }}
          text={'User Profile'}
          textstyle={{
            color: colors.appColor1, paddingLeft: responsiveWidth(5)
          }}
          color={colors.appColor1} />
        <View style={appStyles.UserProfile_IconView}>
          <TouchableOpacity onPress={toggleModal}>
            <Feather name='settings' size={20} color={colors.appColor1} solid />
            <CategoryModal isVisible={isModalVisible} onBackdropPress={toggleModal} />
          </TouchableOpacity>
        </View>
        <ScrollView style={{...appStyles.ThanYou_ScrollView,top:scale(76.5)}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={appStyles.ThanYou_ContentContainer}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={appStyles.UserProfile_MainContainer}>

              <View style={appStyles.UserProfile_InputView}>
                <View style={{
                  ...appStyles.Signin_InputContainer,
                  marginTop: responsiveHeight(4),
                  paddingRight: responsiveWidth(20),
                  height: scale(62),
                }}>
                  <Text style={{ ...appStyles.Signin_Text2 }}>First Name</Text>
                  <InputFields style={{
                    ...appStyles.Signin_InputField,
                    marginTop: responsiveHeight(-0.5)
                  }}
                    placeholderTextColor={colors.appColor15}
                    placeholder={'Mick'}
                    keyboardType={'default'}
                    value={firstName}
                    onChangeText={setFirstName}
                    editable={false} />
                </View>
                <View style={{
                  ...appStyles.Signin_InputContainer,
                  height: scale(61),
                }}>
                  <Text style={appStyles.Signin_Text2}>Last Name</Text>
                  <InputFields style={{
                    ...appStyles.Signin_InputField,
                    marginTop: responsiveHeight(-0.5)
                  }}
                    placeholderTextColor={colors.appColor15}
                    placeholder={'Tason'}
                    keyboardType={'default'}
                    value={lastName}
                    onChangeText={setLastName}
                    editable={false} />
                </View>
                <View style={{
                  ...appStyles.Signin_InputContainer,
                  height: scale(61),
                }}>
                  <Text style={appStyles.Signin_Text2}>Birthday</Text>
                  <View style={appStyles.Signup_PasswordContainer}>
                    <View style={{ flex: 4 }}>
                      <InputFields
                        style={{
                          ...appStyles.Signin_InputField,
                          marginTop: responsiveHeight(-0.2)
                        }}
                        placeholderTextColor={colors.appColor15}
                        placeholder={'09 / 08 / 1996'}
                        keyboardType={'default'}
                        value={birthDay}
                        onChangeText={setBirthDay}
                        editable={false} />
                    </View>
                  </View>
                </View>
                <View style={{
                  ...appStyles.Signin_InputContainer,
                  height: scale(61),
                }}>
                  <Text style={appStyles.Signin_Text2}>Vehicle Make</Text>
                  <InputFields style={{
                    ...appStyles.Signin_InputField,
                    marginTop: responsiveHeight(-0.5)
                  }}
                    placeholderTextColor={colors.appColor15}
                    placeholder={'Enter the make of your Vehicle'}
                    keyboardType={'default'}
                    value={vehicleMake}
                    onChangeText={setVehicleMake}
                    editable={false} />
                </View>
                <View style={{
                  ...appStyles.Signin_InputContainer,
                  height: scale(61),
                }}>
                  <Text style={appStyles.Signin_Text2}>Vehicle Model</Text>
                  <InputFields style={{
                    ...appStyles.Signin_InputField,
                    marginTop: responsiveHeight(-0.5)
                  }}
                    placeholderTextColor={colors.appColor15}
                    placeholder={'Enter model of your Vehicle'}
                    keyboardType={'default'}
                    value={vehicleModel}
                    onChangeText={setVehicleModel}
                    editable={false} />
                </View>
                <View style={{
                  ...appStyles.Signin_InputContainer,
                  height: scale(61),
                }}>
                  <Text style={appStyles.Signin_Text2}>Vehicle Year</Text>
                  <InputFields style={{
                    ...appStyles.Signin_InputField,
                    marginTop: responsiveHeight(-0.5)
                  }}
                    maxLength={4}
                    placeholderTextColor={colors.appColor16}
                    placeholder={'Enter year of your Vehicle'}
                    keyboardType={'numeric'}
                    value={vehicleYear}
                    onChangeText={setVehicleYear}
                    editable={false} />
                </View>
                <View style={{
                  ...appStyles.Signin_InputContainer,
                  height: scale(61),
                }}>
                  <Text style={appStyles.Signin_Text2}>Vehicle Color</Text>
                  <InputFields style={{
                    ...appStyles.Signin_InputField,
                    marginTop: responsiveHeight(-0.5)
                  }}
                    placeholderTextColor={colors.appColor16}
                    placeholder={'Enter color of your Vehicle'}
                    keyboardType={'default'}
                    value={vehicleColor}
                    onChangeText={setVehicleColor}
                    editable={false} />
                </View>
                <View style={{
                  ...appStyles.Signin_InputContainer,
                  height: scale(61),
                }}>
                  <Text style={appStyles.Signin_Text2}>Vehicle Mileage</Text>
                  <InputFields style={{
                    ...appStyles.Signin_InputField,
                    marginTop: responsiveHeight(-0.5)
                  }}
                    placeholderTextColor={colors.appColor16}
                    placeholder={'If unknown enter approximate'}
                    keyboardType={'default'}
                    value={vehicleMileage}
                    onChangeText={setVehicleMileage}
                    editable={false} />
                </View>
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
    </ImageBackground>
  )
}

export default UserProfile