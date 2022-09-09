import { db } from "./firebase";

export const getData = (items) => {
  console.log(items);
  return db
    .collection("Recipes")
    .orderBy(`${items}`)
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
