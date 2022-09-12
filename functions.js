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

export const recipeFilter = (addedItems) => {
  return db
    .collection("Recipes")
    .where("hiddenArr", "array-contains-any", addedItems)
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
