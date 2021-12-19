import React from 'react';
import { View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { getFontSize, dynamicSize } from '../utils/responsive';

const TxtInput = ({
  image,
  placeholder,
  placeholderTextColor,
  right,
  returnKeyType,
  inputSomething,
  keyboardType,
  maxLength,
  autoCorrect,
  reference,
  onSubmitEditing,
  value,
  multiline,
  containerStyle,
  inputStyle,
  editable,
  secureTextEntry,
  autoCapitalize,
  onBlur,
  searchButtonClick
}) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      {image !== undefined ? (
        <TouchableOpacity onPress={searchButtonClick}>
          <Image style={{ alignSelf: 'center', width: dynamicSize(20), height: dynamicSize(20), marginLeft: dynamicSize(10) }} source={image} />
        </TouchableOpacity>
      ) : null}
      <TextInput
        ref={reference}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || '#000'}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType ? keyboardType : 'default'}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        autoCorrect={autoCorrect}
        multiline={multiline}
        editable={editable}
        style={{ right: right || -20, ...styles.inputStyle, ...inputStyle }}
        value={value}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
        onChangeText={text => inputSomething(text)}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: dynamicSize(340),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10
  },
  inputStyle: {
    flex: 1,
    color: '#000',
    fontSize: getFontSize(15),
  },
});

export default TxtInput;
