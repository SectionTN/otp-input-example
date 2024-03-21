import React, {useEffect} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {OTPTextInput, type OTPTextInputHandle} from '@sectiontn/otp-input';
import COLORS from '../utils/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {fontValue, heightPercentageToDP} from '../utils/dimensions.ts';

const AdvancedOTP = () => {
  const OTPRefObject = React.useRef<OTPTextInputHandle | null>(null);

  const [codeCorrect, setCodeCorrect] = React.useState<boolean | null>(null);

  const navigation = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    navigation.setOptions({
      title: 'Advanced OTP',
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_bar}>
        <Text style={styles.top_text}>
          {`Enter the code that we sent ${'\n'} to +216 55 001 002`}
        </Text>
      </View>
      <View style={styles.centredView}>
        <OTPTextInput
          inputCount={6}
          ref={OTPRefObject}
          tintColor={
            codeCorrect === true
              ? COLORS.green
              : codeCorrect === false
              ? COLORS.red
              : COLORS.blue
          }
          offTintColor={
            codeCorrect === true
              ? COLORS.green
              : codeCorrect === false
              ? COLORS.red
              : COLORS.grey
          }
          containerStyle={styles.TextInputContainer}
          textInputStyle={styles.RoundedTextInput}
          onTextChangeHandler={(text: string) => {
            console.log('OTP:', text);
          }}
          editable={!codeCorrect}
          keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingTop: '3%',
          paddingBottom: '3%',
          paddingLeft: '2%',
          paddingRight: '2%',
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: fontValue(14),
              color: COLORS.black,
              opacity: 0.6,
              textAlign: 'left',
              fontFamily: 'Roboto-Regular',
            }}
            onPress={() => {
              if (codeCorrect === null) {
                setCodeCorrect(true);
              } else if (!codeCorrect) {
                setCodeCorrect(true);
              } else {
                setCodeCorrect(false);
              }
            }}>
            CORRECT / INCORRECT
          </Text>
        </View>
        <Text
          style={{
            fontSize: fontValue(14),
            color: COLORS.black,
            opacity: 0.6,
            textAlign: 'right',
            fontFamily: 'Roboto-Regular',
          }}
          onPress={() => {
            OTPRefObject?.current?.clear();
            setCodeCorrect(null);
          }}>
          CLEAR CODE
        </Text>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.bottomText}>
          The OTP isn't editable when the code is correct (editable prop)
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  top_bar: {
    flexDirection: 'row',
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingLeft: '2%',
    paddingRight: '2%',
    justifyContent: 'center',
  },
  top_text: {
    position: 'relative',
    fontSize: fontValue(28),
    paddingLeft: '3%',
    paddingRight: '3%',
    textAlign: 'center',
    color: COLORS.blue,
    fontFamily: 'Roboto-Regular',
  },
  TextInputContainer: {
    marginRight: heightPercentageToDP(8),
    marginLeft: heightPercentageToDP(8),
  },
  RoundedTextInput: {
    borderRadius: heightPercentageToDP(1),
    borderWidth: 2,
  },
  centredView: {
    paddingLeft: '2%',
    paddingRight: '2%',
    alignSelf: 'center',
  },
  bottomView: {
    width: '100%',
    height: heightPercentageToDP(7.5),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  bottomText: {
    color: COLORS.black,
    fontSize: fontValue(12),
    marginBottom: '3%',
    opacity: 0.6,
    textAlign: 'center',
  },
});

export default AdvancedOTP;
