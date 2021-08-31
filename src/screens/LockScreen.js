import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Dimensions } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import PinView from "react-native-pin-view";
import { useDispatch, useSelector } from "react-redux";
import {
  selectState,
  setAuth,
  setPinCode,
  setPinCodeSet,
} from "../app/store/slices/appSlice";
import { BLACK, WHITE, YELLOW } from "../utils/colors";
import * as LocalAuthentication from "expo-local-authentication";
import { useAuthentication } from "../hooks";

const { height } = Dimensions.get("window");

const LockScreen = () => {
  const navigation = useNavigation();
  const { isAuth, pinCode, pinCodeSet } = useSelector(selectState);
  const dispatch = useDispatch();
  const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);
  const [faceIdWorking, setFaceIdWorking] = React.useState(false);

  const onComplete = (val, clear) => {
    if (!pinCodeSet) {
      dispatch(setAuth(true));
      dispatch(setPinCode(val));
      dispatch(setPinCodeSet(true));
      navigation.navigate("BottomTabNavigator");
    } else {
      if (val === pinCode) navigation.navigate("BottomTabNavigator");
    }

    // navigation.navigate("BottomTabNavigator");
  };

  const handleBiometricsStored = async () => {
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics)
      return Alert.alert(
        "Biometric record not found",
        "Please verify your identity with your password",
        "OK",
        () => fallBackToDefaultAuth()
      );
  };

  const handleBiometricAuth = async () => {
    const { success } = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Biometrics",
      disableDeviceFallback: true,
    });

    setFaceIdWorking(success);
  };

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);

      await handleBiometricsStored();
      await handleBiometricAuth();
    })();
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: BLACK,
      }}
    >
      <View
        style={{
          flex: 0.5,
          alignItems: "center",
          justifyContent: "center",
          borderColor: YELLOW,
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: WHITE,
            // backgroundColor: "red",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          {!pinCodeSet
            ? "Please enter a pin for your APP"
            : "Please enter your pin"}
        </Text>
      </View>
      <PinView
        onComplete={onComplete}
        pinLength={4}
        inputBgColor="white"
        inputActiveBgColor="yellow"
      />

      <Text style={{ color: WHITE }}>
        {" "}
        {isBiometricSupported
          ? "Your device is compatible with Biometrics"
          : "Face or Fingerprint scanner is available on this device"}
      </Text>

      {faceIdWorking && <Text style={{ color: WHITE }}>Authenticated</Text>}
    </View>
  );
};

export default LockScreen;

const styles = StyleSheet.create({});
