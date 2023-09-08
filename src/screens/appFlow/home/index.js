import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import Toast from 'react-native-simple-toast'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { StatusBars } from '../../../components/statusBars'
import { appStyles, colors } from '../../../services'
import { CalendarViews } from '../../../components/calendarViews';
import { Times } from '../../../components/time';
import { InputFields } from '../../../components/textInput';
import TouchableButton from '../../../components/buttons';
import { ImageScreenHeader } from '../../../components/hearder';
import { useNavigation } from '@react-navigation/native';
import { LocationModal, OiltypeModal } from '../../../components/modals';
import { scale } from 'react-native-size-matters';
import { fontFamily } from '../../../services/utilities';
import { AuthContext } from '../../../navigation/AuthProvider'
import firestore from '@react-native-firebase/firestore';


const Home = () => {
  const navigation = useNavigation();
  const [selectedViewData, setSelectedViewData] = useState(null);
  const [isLocation_ModalVisible, setLocation_ModalVisible] = useState(false);
  const [isOiltype_ModalVisible, setOiltype_ModalVisible] = useState(false);
  const [SubmitLocation, onSubmitLocation] = useState('');
  const [selectedOilType, setSelectedOilType] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);
  const [formattedHours, setFormattedHours] = useState(null);
  const [formattedMinutes, setFormattedMinutes] = useState(null);
  const [period, setPeriod] = useState(null);
  const { user } = useContext(AuthContext);

  const handleTimeSelect = (time, hours, minutes) => {
    setSelectedTime(time);
    setFormattedHours(hours);
    setFormattedMinutes(minutes);
    setPeriod(time);
  };
  const handleLocationSubmit = (location) => {
    onSubmitLocation(location);
  };
  const toggleLocationModal = () => {
    setLocation_ModalVisible(!isLocation_ModalVisible);
  };
  const toggleOiltypeModal = () => {
    setOiltype_ModalVisible(!isOiltype_ModalVisible);
  };

  const handleOilTypeSelect = (oilType) => {
    setSelectedOilType(oilType);
  };
  const handleVehicleDetailPress = () => {
    if (selectedViewData === null) {
      Toast.show('Select date first', Toast.SHORT, Toast.TOP);
    } else if (formattedHours === null || formattedHours === '0' || formattedHours === '00') {
      Toast.show('Enter hours first', Toast.SHORT, Toast.TOP);
    } else if (formattedMinutes === null || formattedMinutes === '0' || formattedMinutes === '00') {
      Toast.show('Enter minutes first', Toast.SHORT, Toast.TOP);
    } else if (SubmitLocation.trim() === '') {
      Toast.show('Location is empty', Toast.SHORT, Toast.TOP);
    } else if (selectedOilType.trim() === '') {
      Toast.show('Select oil type', Toast.SHORT, Toast.TOP);
    } else {
      const userData = {
        Uid: user.uid,
        Date: selectedViewData,
        Time: selectedTime,
        Location: SubmitLocation,
        OilType: selectedOilType
      };
      const userDocRef = firestore().collection('Appointment').doc(user.uid);
      userDocRef
        .set(userData, { merge: true })
        .then(() => {
          console.log('User data added in Firestore!');
          navigation.navigate('HomeNavigation', { screen: 'VehicleDetail' });
        })
        .catch((error) => {
          console.error('Error adding user data in Firestore:', error);
        });
    }
  };
  const handleCalendarViewSelect = (selectedViewData) => {
    setSelectedViewData(selectedViewData);
    console.log(selectedViewData);
  };
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Exit', 'Do you want to exit app?', [
        {
          text: 'No',
          onPress: () => null,
          style: 'No',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, []);

  return (
    <KeyboardAvoidingView
      style={appStyles.Home_Container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
      <StatusBars />
      <ScrollView showsVerticalScrollIndicator={false}
        style={appStyles.Home_ScrollView} contentContainerStyle={appStyles.Home_ContentContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={appStyles.Home_MainContainer}>
            <ImageScreenHeader textStyle={{ fontFamily: fontFamily.Roboto_Medium, }} text={'Schedule a Time'} />
            <View style={appStyles.Home_Textview2}>
              <Text style={appStyles.Home_Text2}>Please Enter Details</Text>
            </View>
            <View style={appStyles.Home_Calenderview}>
              <CalendarViews onCalendarViewSelect={handleCalendarViewSelect} />
            </View>
            <View style={appStyles.Home_Timeview}>
              <Times onTimeSelect={handleTimeSelect} />
            </View>
            <View style={appStyles.Home_Inputview1}>
              <View style={{
                ...appStyles.Signin_InputContainer,
                marginTop: responsiveHeight(1.5),
                height: scale(64.6),
                backgroundColor: colors.appColor22,
                elevation: 4,
              }}>
                <Text style={appStyles.Signin_Text2}>Enter Location</Text>
                <View style={appStyles.Signup_PasswordContainer}>
                  <View style={{ flex: 4 }}>
                    <InputFields
                      style={{ ...appStyles.Signin_InputField, }}
                      placeholderTextColor={colors.appColor23}
                      placeholder={'Please enter your address'}
                      keyboardType={'default'}
                      editable={false}
                      value={SubmitLocation}
                      onChangeText={onSubmitLocation} />
                  </View>
                  <View style={appStyles.Signup_ImageContainer}>
                    <TouchableOpacity onPress={toggleLocationModal}>
                      <MaterialIcons style={appStyles.Signup_Icon1} name='radio-button-on' size={25} color={colors.appColor6} />
                      <LocationModal isVisible={isLocation_ModalVisible}
                        onSubmitLocation={handleLocationSubmit}
                        onBackdropPress={toggleLocationModal} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={appStyles.Home_Inputview2}>
              <View style={{
                ...appStyles.Signin_InputContainer,
                marginTop: responsiveHeight(1.5),
                backgroundColor: colors.appColor22,
                height: scale(64.6),
                elevation: 4,
              }}>
                <Text style={appStyles.Signin_Text2}>Oil type</Text>
                <View style={appStyles.Signup_PasswordContainer}>
                  <View style={{ flex: 4, }}>
                    <TouchableOpacity onPress={toggleOiltypeModal}>
                      <InputFields
                        style={{ ...appStyles.Signin_InputField, }}
                        placeholderTextColor={colors.appColor24}
                        placeholder={'Please select Oil type from here \n(All Oil High Quality Synthetic)'}
                        keyboardType={'default'}
                        editable={false}
                        value={selectedOilType}
                        onChangeText={setSelectedOilType} />
                    </TouchableOpacity>
                  </View>
                  <View style={appStyles.Signup_ImageContainer}>
                    <TouchableOpacity onPress={toggleOiltypeModal}>
                      <AntDesign style={appStyles.Signup_Icon1} name='down' size={25} color={colors.appColor6} />
                      <OiltypeModal isVisible={isOiltype_ModalVisible}
                        onSelect={handleOilTypeSelect}
                        onBackdropPress={toggleOiltypeModal} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={appStyles.Home_Buttonview}>
              <TouchableButton style={{
                ...appStyles.Signin_Button,
                elevation: 4,
              }}
                touchableStlye={{ marginTop: responsiveHeight(3), marginBottom: responsiveHeight(3.5), }}
                color={[colors.appColor1, colors.appColor1]}
                title={'Lock it in!'}
                styles={appStyles.Home_ButtonText}
                onPress={handleVehicleDetailPress} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default Home;
