import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import PinView from "react-native-pin-view";
import { useDispatch, useSelector } from "react-redux";
import {
  selectState,
  setPinCode,
  setPinCodeSet,
} from "../../app/store/slices/appSlice";
import { YELLOW, BLACK, WHITE } from "../../utils/colors";

const Passcode = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { isAuth, pinCode, pinCodeSet } = useSelector(selectState);
  const dispatch = useDispatch();
  const [newPin, setNewPin] = useState(true);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const navigation = useNavigation();

  const handleNewPin = (val, clear) => {
    dispatch(setPinCode(val));
    dispatch(setPinCodeSet(true));
    navigation.navigate("SettingsScreen");
  };

  const handleValidatePin = (val, clear) => {
    if (pinCodeSet && pinCode.length === 4 && pinCode === val) {
      clear();
      setIncorrectPassword(false);
      dispatch(setPinCodeSet(false));
      setNewPin(true);
    } else {
      setIncorrectPassword(true);
      clear();
    }
  };

  useEffect(() => {
    if (pinCodeSet) {
      setNewPin(false);
    }
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
            fontSize: 20,
            textAlign: "center",
          }}
        >
          {incorrectPassword
            ? "Incorrect password, please enter it again"
            : pinCodeSet
            ? "Please enter your current pin"
            : newPin
            ? "Please enter a new pin"
            : "Please enter a new pin"}
        </Text>
      </View>

      <PinView
        onComplete={(val, clear) =>
          newPin ? handleNewPin(val, clear) : handleValidatePin(val, clear)
        }
        pinLength={4}
        inputBgColor="white"
        inputActiveBgColor="yellow"
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

export default Passcode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
