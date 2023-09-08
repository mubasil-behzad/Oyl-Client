import { TextInput } from 'react-native'
import React from 'react'

export const InputFields = ({ placeholderTextColor,
    style, onChangeText, value, editable,
    placeholder, keyboardType, secureTextEntry, maxLength }) => {
    return (
        <TextInput
            style={style}
            onChangeText={onChangeText}
            value={value}
            placeholderTextColor={placeholderTextColor}
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            maxLength={maxLength}
        />
    );
};
