import React, {useEffect} from 'react';
import {OTPTextInput} from '@sectiontn/otp-input';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../utils/colors.ts';
import {
  Text,
  Pressable,
  StyleSheet,
  Platform,
  DimensionValue,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

const VanillaOTP = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    navigation.setOptions({
      title: 'Vanilla OTP',
      headerRight: () => (
        <Pressable
          onPress={() => {
            navigation.navigate('Ref');
          }}
          style={styles.headerRight}>
          <Text style={styles.headerRightText}>Go to Ref OTP</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <OTPTextInput
        tintColor={COLORS.blue}
        offTintColor={COLORS.grey}
        onTextChangeHandler={(pin: string) => {
          if (pin.length === 4) {
            console.log('Full OTP:', pin);
          } else {
            console.log('Current OTP:', pin);
          }
        }}
        inputCount={4}
        keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  headerRight: {
    paddingRight: '4%' as DimensionValue,
  },
  headerRightText: {
    fontSize: 16,
    color: '#000',
  },
});

export default VanillaOTP;
