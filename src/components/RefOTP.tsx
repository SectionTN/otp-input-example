import React, {useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Platform,
  Pressable,
  DimensionValue,
} from 'react-native';
import {OTPTextInput, type OTPTextInputHandle} from '@sectiontn/otp-input';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../utils/colors.ts';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const RefOTP = () => {
  const OTPRefObject = React.useRef<OTPTextInputHandle | null>(null);

  const [pinCode, setPinCode] = React.useState('');
  const [inputText, setInputText] = React.useState('');

  const navigation = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    navigation.setOptions({
      title: 'Ref OTP',
      headerRight: () => (
        <Pressable
          onPress={() => {
            navigation.navigate('Advanced');
          }}
          style={styles.headerRight}>
          <Text style={styles.headerRightText}>Go to Advanced OTP</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <OTPTextInput
        ref={OTPRefObject}
        tintColor={COLORS.blue}
        offTintColor={COLORS.grey}
        onTextChangeHandler={pinValue => setPinCode(pinValue)}
        inputCount={4}
        keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
      />
      <View style={styles.space} />
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={value => setInputText(value)}
        placeholder="Type a pin"
        placeholderTextColor={COLORS.grey}
        keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
      />
      <View style={styles.space} />
      <View style={styles.footer}>
        <Pressable
          onPress={() => {
            OTPRefObject?.current?.clear();
            setPinCode('');
          }}>
          <Text style={styles.footerText}>Reset OTP</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            OTPRefObject?.current?.setValue(inputText);
            setPinCode(inputText);
          }}>
          <Text style={styles.footerText}>Set OTP</Text>
        </Pressable>
      </View>
      <View style={styles.space} />
      <Text>Current OTP value is: {pinCode}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  space: {
    height: '3.5%',
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    margin: '4%',
    fontSize: 16,
  },
  headerRight: {
    paddingRight: '4%' as DimensionValue,
  },
  headerRightText: {
    fontSize: 16,
    color: '#000',
  },
});

export default RefOTP;
