import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Modal,
    TouchableWithoutFeedback,
    BackHandler,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native'
import Toast from 'react-native-simple-toast'
import Icon from 'react-native-vector-icons/Feather'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { StatusBars } from '../../../components/statusBars'
import { ScreenHeader } from '../../../components/hearder'
import { InputFields } from '../../../components/textInput'
import TouchableButton from '../../../components/buttons'
import { appStyles, colors } from '../../../services'
import { format } from 'date-fns';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import { appImages } from '../../../services/utilities';
import CustomTabBar from '../../../components/customTabBar';
import { AuthContext } from '../../../navigation/AuthProvider'
import firestore from '@react-native-firebase/firestore';
import { DotIndicator } from 'react-native-indicators';

const EditProfile = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { user } = useContext(AuthContext);
    const [isCalendarModalVisible, setCalendarModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [manualDate, setManualDate] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [vehicleMake, setVehicleMake] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [vehicleYear, setVehicleYear] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehicleMileage, setVehicleMileage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCalendarButtonPress = () => {
        setCalendarModalVisible(true);
    };
    const handleScreenPress = () => {
        setCalendarModalVisible(false);
    };

    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })
        return () => {
            navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } })
        }
    });
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);

    const handleBackPress = () => {
        navigation.reset({ index: 0, routes: [{ name: 'AccountNavigation', params: { screen: 'UserProfile' } }] });
        return true;
    };
    const handleGoBackPress = () => {
        navigation.reset({ index: 0, routes: [{ name: 'AccountNavigation', params: { screen: 'UserProfile' } }] });
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
                setFirstName(data.FirstName || '');
                setLastName(data.LastName || '');
                setManualDate(data.BirthDay || '');
                setVehicleMake(data.Vehicleinfo.VehicleMake || '');
                setVehicleModel(data.Vehicleinfo.VehicleModel || '');
                setVehicleYear(data.Vehicleinfo.VehicleYear || '');
                setVehicleColor(data.Vehicleinfo.VehicleColor || '');
                setVehicleMileage(data.Vehicleinfo.VehicleMileage || '');
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
    const handleUserProfilePress = () => {
        if (firstName.trim() === '') {
            Toast.show('First name is empty', Toast.SHORT, Toast.TOP);
        } else if (lastName.trim() === '') {
            Toast.show('Last name is empty', Toast.SHORT, Toast.TOP);
        } else if (manualDate.trim() === '') {
            Toast.show('Birthday is empty', Toast.SHORT, Toast.TOP);
        } else if (vehicleMake.trim() === '') {
            Toast.show('Vehicle make is empty', Toast.SHORT, Toast.TOP);
        } else if (vehicleModel.trim() === '') {
            Toast.show('Vehicle model is empty', Toast.SHORT, Toast.TOP);
        } else if (vehicleYear.length < 4) {
            if (vehicleYear.trim() === '') {
                Toast.show('Vehicle year is empty', Toast.SHORT, Toast.TOP);
            } else {
                Toast.show('Enter valid vehicle year', Toast.SHORT, Toast.TOP);
            }
        } else if (vehicleColor.trim() === '') {
            Toast.show('Vehicle color is empty', Toast.SHORT, Toast.TOP);
        } else if (vehicleMileage.trim() === '') {
            Toast.show('Vehicle mileage is empty', Toast.SHORT, Toast.TOP);
        } else {
            const userData = {
                firstName: firstName,
                lastName: lastName,
                birthDay: manualDate,
                Vehicleinfo: {
                    VehicleMake: vehicleMake,
                    VehicleModel: vehicleModel,
                    VehicleYear: vehicleYear,
                    VehicleColor: vehicleColor,
                    VehicleMileage: vehicleMileage,
                },
            };
            const userDocRef = firestore().collection('Users').doc(user.uid);
            userDocRef
                .update(userData)
                .then(() => {
                    console.log('User data updated successfully!');
                    navigation.reset({ index: 0, routes: [{ name: 'AccountNavigation', params: { screen: 'UserProfile' } }] });
                })
                .catch((error) => {
                    console.error('Error adding user data in Firestore:', error);
                });
        }
    };
    return (
        <ImageBackground
            source={appImages.Background}
            style={appStyles.BackgroundImage}>
            <KeyboardAvoidingView
                style={appStyles.E_Profile_Container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
                <StatusBars barStyle={'dark-content'} backgroundColor={colors.appColor2} />
                <ScreenHeader styles={{ backgroundColor: colors.appColor18 }}
                    name={'chevron-small-left'} text={'Edit Profile'}
                    textstyle={{
                        color: colors.appColor1, paddingLeft: responsiveWidth(5)
                    }} onPress={handleGoBackPress}
                    color={colors.appColor1} />
                <ScrollView style={appStyles.E_Profile_ScrollView}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={appStyles.E_Profile_ContentContainer}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={appStyles.E_Profile_MainContainer}>
                            <View style={appStyles.E_Profile_InputView}>
                                <View style={{
                                    ...appStyles.Signin_InputContainer,
                                    marginTop: responsiveHeight(4),
                                    paddingRight: responsiveWidth(20),
                                    shadowColor: colors.appColor20,
                                    elevation: 20,
                                    height: scale(58),
                                }}>
                                    <Text style={{ ...appStyles.Signin_Text2 }}>First Name</Text>
                                    <InputFields style={{
                                        ...appStyles.Signin_InputField,
                                        marginTop: responsiveHeight(-0.5)
                                    }}
                                        placeholderTextColor={colors.appColor19}
                                        placeholder={'Enter your first name'} 
                                        value={firstName}
                                        onChangeText={setFirstName}
                                        keyboardType={'default'} />
                                </View>
                                <View style={{
                                    ...appStyles.Signin_InputContainer,
                                    shadowColor: colors.appColor20,
                                    elevation: 20,
                                    height: scale(58),
                                }}>
                                    <Text style={appStyles.Signin_Text2}>Last Name</Text>
                                    <InputFields style={{
                                        ...appStyles.Signin_InputField,
                                        marginTop: responsiveHeight(-0.5)
                                    }}
                                        placeholderTextColor={colors.appColor19}
                                        placeholder={'Enter your last name'}
                                        value={lastName}
                                        onChangeText={setLastName}
                                        keyboardType={'default'} />
                                </View>
                                <View style={{
                                    ...appStyles.Signin_InputContainer,
                                    shadowColor: colors.appColor20,
                                    elevation: 20,
                                    height: scale(58),
                                }}>
                                    <Text style={appStyles.Signin_Text2}>Birthday</Text>
                                    <View style={appStyles.Signup_PasswordContainer}>
                                        <View style={{ flex: 4 }}>
                                            <InputFields
                                                style={{ ...appStyles.Signin_InputField, marginTop: responsiveHeight(-0.2) }}
                                                placeholderTextColor={colors.appColor19}
                                                placeholder={'Select your birthday'}
                                                keyboardType={'default'}
                                                value={manualDate}
                                                onChangeText={setManualDate}
                                                editable={false}
                                            />
                                        </View>
                                        <View style={appStyles.Signup_ImageContainer}>
                                            <TouchableOpacity onPress={handleCalendarButtonPress}>
                                                <Icon style={appStyles.Signup_Icon1} name='calendar' size={18} color={colors.appColor9} />
                                            </TouchableOpacity>
                                            <Modal
                                                visible={isCalendarModalVisible}
                                                transparent={true}
                                                animationType="slide"
                                                onRequestClose={() => setCalendarModalVisible(false)}
                                            >
                                                <TouchableWithoutFeedback onPress={handleScreenPress}>
                                                    <DateTimePicker
                                                        value={selectedDate}
                                                        mode="date"
                                                        display="calendar"
                                                        onChange={(event, date) => {
                                                            if (date !== undefined) {
                                                                setSelectedDate(date);
                                                                setManualDate(format(date, 'dd / MM / yyyy'));
                                                                setCalendarModalVisible(false);
                                                            }
                                                        }}
                                                    />
                                                </TouchableWithoutFeedback>
                                            </Modal>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    ...appStyles.Signin_InputContainer,
                                    shadowColor: colors.appColor20,
                                    elevation: 20,
                                    height: scale(58),
                                }}>
                                    <Text style={appStyles.Signin_Text2}>Vehicle Make</Text>
                                    <InputFields style={{
                                        ...appStyles.Signin_InputField,
                                        marginTop: responsiveHeight(-0.5)
                                    }}
                                        placeholderTextColor={colors.appColor19}
                                        placeholder={'Enter the make of your Vehicle'}
                                        value={vehicleMake}
                                        onChangeText={setVehicleMake}
                                        keyboardType={'default'} />
                                </View>
                                <View style={{
                                    ...appStyles.Signin_InputContainer,
                                    shadowColor: colors.appColor20,
                                    elevation: 20,
                                    height: scale(58),
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
                                    shadowColor: colors.appColor20,
                                    elevation: 20,
                                    height: scale(58),
                                }}>
                                    <Text style={appStyles.Signin_Text2}>Vehicle Year</Text>
                                    <InputFields style={{
                                        ...appStyles.Signin_InputField,
                                        marginTop: responsiveHeight(-0.5)
                                    }}
                                        maxLength={4}
                                        placeholderTextColor={colors.appColor19}
                                        placeholder={'Enter year of your Vehicle'}
                                        value={vehicleYear}
                                        onChangeText={setVehicleYear}
                                        keyboardType={'numeric'} />
                                </View>
                                <View style={{
                                    ...appStyles.Signin_InputContainer,
                                    shadowColor: colors.appColor20,
                                    elevation: 20,
                                    height: scale(58),
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
                                    shadowColor: colors.appColor20,
                                    elevation: 20,
                                    height: scale(58),
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
                            <View style={appStyles.E_Profile_ButtonView}>
                                <TouchableButton style={{
                                    ...appStyles.Signin_Button,
                                    shadowColor: colors.appColor17,
                                    elevation: 7
                                }}
                                    touchableStlye={{
                                        marginTop: responsiveHeight(1),
                                        marginBottom: responsiveHeight(2),
                                    }}
                                    styles={appStyles.E_Profile_ButtonText} title="SAVE CHANGES"
                                    onPress={handleUserProfilePress}
                                />
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
                <CustomTabBar />
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}
export default EditProfile;
