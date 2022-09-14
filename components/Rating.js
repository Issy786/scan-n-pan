import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getData } from "../functions";

export default function Rating({ value }) {
  const [defaultRating, setdefaultRating] = useState("");
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const [rating, setRating] = useState({});

  const setdefaultRatingFunc = (ratings) => {
    const sum = ratings.reduce((a, b) => a + b, 0);
    const avg = sum / ratings.length || 0;
    setdefaultRating(Math.round(avg));
  };

  useEffect(() => {
    getData("cookingTime").then((res) => {
      res.forEach((recipe) => {
        if (recipe.id === value) {
          setRating(recipe);
          setdefaultRatingFunc(recipe.data.rating);
        }
      });
    });
  }, [setRating]);

  const submitRating = async (rate) => {
    await updateDoc(doc(db, "Recipes", value), {
      rating: [...rating.data.rating, rate],
    });
  };

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
              onPress={() => {
                setdefaultRating(item);
              }}
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
        onPress={() => {
          alert(defaultRating + " " + stars);
          submitRating(defaultRating);
        }}
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
    backgroundColor: "brown",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
  },
  textStyle: {
    fontWeight: "700",
    textAlign: "center",
    margin: 5,
    color: "darkorange",
  },
});
