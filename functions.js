import { db } from "./firebase";

export const getData = () => {
  return db
    .collection("Recipes")
    .get()
    .then((querySnapshot) => {
      const testArr = [];
      const newData = querySnapshot.forEach((snapshot) => {
        let data = snapshot.data();
        testArr.push(data);
      });

      return testArr;
    });
};
