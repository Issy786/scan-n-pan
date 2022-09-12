import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function Rating() {
  const [defaultRating, setdefaultRating] = useState(1);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

  const starImgFilled =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
  const starImgEmpty =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";

  const CustomRatingBar = () => {
    return (
      <View style={styles.CustomRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setdefaultRating(item)}
            >
              <Image
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImgFilled }
                    : { uri: starImgEmpty }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  let stars = "";
  return (
    <SafeAreaView style={styles.containter}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() => alert(defaultRating + " " + stars)}
      >
        <Text style={styles.buttonText}>Add Rating</Text>
      </TouchableOpacity>
      <CustomRatingBar />
      <Text style={styles.textStyle}>
        {`${defaultRating} ${
          defaultRating === 1 ? (stars = "Star") : (stars = "Stars")
        }`}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 14,
  },
  CustomRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  starImgStyle: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
  buttonStyle: {
    marginHorizontal: "32%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#0782F9",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
  },
});
