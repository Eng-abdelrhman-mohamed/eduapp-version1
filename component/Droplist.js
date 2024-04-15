import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'اولى اعدادي',  value: '1' },
    { label: 'ثانية اعدادي', value: '2' },
    { label: 'ثالثة اعدادي', value: '3' },
    { label: 'اولى ثانوي',   value: '4' },
    { label: 'ثانية ثانوي',  value: '5' },
    { label: 'ثالثة ثانوي',  value: '6' },
];

const Droplist = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);



  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'السنة الدراسية' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default Droplist;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginTop:"10px",
    flex:1,
    display:'flex'
  },
  dropdown: {
    height: 43,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'transparent',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});