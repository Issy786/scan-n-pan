import { db } from "./firebase";

export const getData = (items) => {
  return db
    .collection("Recipes")
    .orderBy(`${items}`)
    .get()
    .then((querySnapshot) => {
      const testArr = [];
      const newData = querySnapshot.forEach((snapshot) => {
        let data = snapshot.data();
        const itemData = {
          data: data,
          id: snapshot.id,
        };
        testArr.push(itemData);
      });

      return testArr;
    });
};
