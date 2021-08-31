import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectState } from "../app/store/slices/appSlice";

/**
 * useAuthentication hook to verify authentication
 * data
 *
 * @param   {Array}  values values to verify
 * @param   {String} path path to redirect if fail
 */
export const useAuthentication = () => {
  const navigation = useNavigation();
  const { isAuth, pinCode } = useSelector(selectState);

  useEffect(() => {
    if (!isAuth) navigation.navigate("LockScreen");
    // eslint-disable-next-line
  }, []);
};
