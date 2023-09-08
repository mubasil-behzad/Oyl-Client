import React, { useState, useEffect } from 'react';
import {
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { scale } from 'react-native-size-matters';
import { colors } from '../../services';
import { fontFamily, fontSize, sizes } from '../../services/utilities';

export const CalendarViews = ({ onCalendarViewSelect }) => {
    const [data, setData] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedViewIndex, setSelectedViewIndex] = useState(null);
    const generateCalendarData = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthofYears = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const currentDayIndex = currentDate.getDay();
        const newData = [];
        for (let i = currentDayIndex; i < currentDayIndex + 7; i++) {
            const dayIndex = i - currentDayIndex;
            let day = '';
            if (dayIndex === 0) {
                day = 'Today';
            } else if (dayIndex === 1) {
                day = 'Tomorrow';
            } else {
                day = daysOfWeek[(currentDayIndex + dayIndex) % 7];
            }
            const date = currentDate.getDate();
            const month = monthofYears[currentDate.getMonth()];

            newData.push({ id: String(i), date, day, month });
            currentDate.setDate(currentDate.getDate() + 1);
        }
        setData(newData);
        setSelectedYear(year);
    };
    useEffect(() => {
        generateCalendarData();
    }, []);
    const handleViewPress = (index) => {
        setSelectedViewIndex(index);
        const selectedViewData = data[index];
        const date = selectedViewData.month + ' ' + selectedViewData.date + ', ' + selectedYear;
        onCalendarViewSelect(date);
    };

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.CalendarViews_container}>
            {data.map((item, index) => (
                <TouchableOpacity
                    key={item.id}
                    style={[
                        styles.CalendarViews_item,
                        item.day === 'Today',
                        selectedViewIndex === index && styles.CalendarViews_selectedItem,
                    ]}
                    onPress={() => handleViewPress(index)}
                >
                    <Text style={styles.CalendarViews_text}>{item.day}</Text>
                    <Text style={styles.CalendarViews_text}>{item.date}</Text>
                    <Text style={styles.CalendarViews_text}>{item.month}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    CalendarViews_container: {
        flexDirection: 'row',
    },
    CalendarViews_item: {
        height: scale(100),
        margin: responsiveHeight(1),
        marginHorizontal: responsiveWidth(-1),
        marginLeft: responsiveWidth(2),
        padding: responsiveWidth(5),
        borderRightWidth: 1,
        borderColor: colors.appColor21,
        borderRadius: responsiveWidth(5),
        minWidth: responsiveWidth(28),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.appColor2,
        elevation: 5,
    },
    CalendarViews_text: {
        fontFamily: fontFamily.Roboto_Bold,
        fontSize: fontSize.Size_4,
        margin: responsiveHeight(0.5),
        color: colors.appColor9

    },
    CalendarViews_selectedItem: {
        backgroundColor: colors.appColor1,
    },
});

