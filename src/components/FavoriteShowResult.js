import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BLACK, GRAY, WHITE, YELLOW } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import AntIcon from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { removeFromFavShows } from "../app/store/slices/appSlice";
import AwesomeAlert from "react-native-awesome-alerts";

// DIMENSIONS
const { height } = Dimensions.get("window");

const FavoriteShowResult = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ShowDetails", {
          id: item?.id,
          name: item?.name,
        })
      }
    >
      <View style={styles.showContainer}>
        <Image
          source={
            item?.image?.original
              ? {
                  uri: item?.image?.original,
                }
              : require("../../assets/notFound.jpg")
          }
          style={styles.showImage}
        />
        <View style={styles.showTextContainer}>
          <Text style={styles.showTitle}>{item?.name}</Text>
          <Text style={styles.showDescription}>
            {item?.network?.name && item?.genres[0]
              ? `${item?.network?.name} - ${item?.genres[0]}`
              : item?.network?.name || item?.genres[0] || ""}
          </Text>

          <Button
            title={"Remove"}
            style={styles.button}
            buttonStyle={{ backgroundColor: YELLOW, marginTop: 10 }}
            titleStyle={{ color: BLACK }}
            icon={
              <AntIcon
                style={{ marginHorizontal: 5 }}
                name={"delete"}
                size={20}
                color={BLACK}
              />
            }
            onPress={() => setShowAlert(true)}
            // disabled={true}
          />
        </View>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title={"Oh oh!"}
          message={"Are you sure you want to delete this from your favorites?"}
          closeOnTouchOutside={true}
          onDismiss={() => setShowAlert(false)}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          confirmText="Yes"
          confirmButtonColor={YELLOW}
          onCancelPressed={() => {
            setShowAlert(false);
          }}
          onConfirmPressed={() => {
            setShowAlert(false);
            dispatch(removeFromFavShows(item));
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteShowResult;

const styles = StyleSheet.create({
  showContainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderBottomColor: GRAY,
  },
  showImage: {
    height: height * 0.15,
    width: height * 0.1,
  },
  showTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    flexShrink: 1,
  },
  showTitle: {
    color: WHITE,
    fontWeight: "bold",
  },
  showDescription: {
    color: WHITE,
    fontWeight: "300",
  },
});
