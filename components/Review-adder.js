import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { getData } from "../functions";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { reviewContext } from "../context";

const Review = ({ value }) => {
  const [text, setText] = useState("");
  const [review, setReview] = useState("");
  const { newReview, setNewReview } = useContext(reviewContext);

  useEffect(() => {
    getData("cookingTime").then((res) => {
      res.forEach((review) => {
        if (review.id === value) {
          setReview(review);
        }
      });
    });
  }, [setReview]);

  const handleSubmit = () => {
    setText(async (data) => {
      data = `${data} \n \n ${new Date().toLocaleString()}`;
      try {
        await updateDoc(doc(db, "Recipes", value), {
          review: [...review.data.review, data],
        });
      } catch (err) {
        alert("Input required!");
        console.log(err, "<<<error");
      }
    });
    if (text.length > 0) {
      setNewReview(text);
    }
    console.log(newReview, text, "wow");
  };

  return (
    <KeyboardAvoidingView>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Add a Review"
          onChangeText={(text) => setText(text)}
          value={text}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato",
    width: "20%",
    flexDirection: "row",
    marginBottom: 5,
    padding: 10,
    marginHorizontal: "40%",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
  },
});

export default Review;
