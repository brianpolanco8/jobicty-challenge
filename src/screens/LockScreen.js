import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
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
import AwesomeAlert from "react-native-awesome-alerts";

import { useAuthentication } from "../hooks";

const LockScreen = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigation = useNavigation();
  const { isAuth, pinCode, pinCodeSet } = useSelector(selectState);
  const dispatch = useDispatch();
  const [compatible, setCompatible] = useState(false);
  const [fingerprints, setFingerprints] = useState(false);

  const onComplete = (val, clear) => {
    if (!pinCodeSet) {
      dispatch(setAuth(true));
      dispatch(setPinCode(val));
      dispatch(setPinCodeSet(true));
      navigation.navigate("BottomTabNavigator");
    } else if (val === pinCode) {
      navigation.navigate("BottomTabNavigator");
    } else if (val !== pinCode) {
      setShowAlert(true);
      clear();
    }
  };

  const handleBiometrics = async () => {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    console.log('compatible', compatible)
    setCompatible(compatible);

    let fingerprints = await LocalAuthentication.isEnrolledAsync();
    console.log('fingerprints', fingerprints)
    setFingerprints(fingerprints);
  };

  const handleScan = async () => {
    let { success } = await LocalAuthentication.authenticateAsync({
      promptMessage: "Allow Biometrics Authentication",
    });

    if (success) {
      dispatch(setAuth(true));
      navigation.navigate("BottomTabNavigator");
    }
  };

  useEffect(() => {
    handleBiometrics();
  }, []);

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
        allowFaceId={compatible}
        handleScan={handleScan}
      />

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={"Oh oh!"}
        message={"Wrong Pin"}
        closeOnTouchOutside={true}
        onDismiss={() => setShowAlert(false)}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor={YELLOW}
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
      />
    </View>
  );
};

export default LockScreen;

const styles = StyleSheet.create({});
