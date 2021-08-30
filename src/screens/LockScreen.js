import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { Dimensions } from "react-native";
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

const { height } = Dimensions.get("window");

const LockScreen = () => {
  const navigation = useNavigation();
  const { isAuth, pinCode, pinCodeSet } = useSelector(selectState);
  const dispatch = useDispatch();
  const onComplete = (val, clear) => {
    dispatch(setAuth(true));
    dispatch(setPinCode(val));
    navigation.navigate("Home");
  };
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
          Please enter a pin for your APP
        </Text>
      </View>
      <PinView
        onComplete={onComplete}
        pinLength={4}
        inputBgColor="white"
        inputActiveBgColor="yellow"
      />
    </View>
  );
};

export default LockScreen;

const styles = StyleSheet.create({});
