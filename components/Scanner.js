import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { addedItemsContext, barcodeContext, itemContext } from "../context";

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");
  const { barcodeData, setBarcodeData } = useContext(barcodeContext);
  const { item, setItem } = useContext(itemContext);
  const { addedItems, setAddedItems } = useContext(addedItemsContext);

  const navigation = useNavigation();

  const askForCamera = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  useEffect(() => {
    askForCamera();
  }, []);

  const handleScanned = ({ data }) => {
    setScanned(true);

    fetch(`https://en.openfoodfacts.org/api/v0/product/${data}`)
      .then((response) => response.json())
      .then((json) => {
        setBarcodeData(json.product.product_name_en);
        setText(json.product.product_name_en);
      })
      .catch(() => {
        alert("item not found, please use a food item!");
      });
  };

  const handleScannedItem = () => {
    setAddedItems([barcodeData, ...addedItems]);
    setItem(null);
    setBarcodeData(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleScanned}
          style={styles.camera}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>
      <View style={styles.buttonText}>
        {scanned && (
          <Button title={"Scan again?"} onPress={() => setScanned(false)} />
        )}
      </View>
      {scanned && (
        <Button
          title={"Add Ingredient"}
          onPress={() => {
            handleScannedItem(), navigation.navigate("Home");
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overFlow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
    color: "white",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
  },
  camera: {
    borderRadius: 30,
    height: 500,
    width: 400,
  },
  buttonText: {
    marginBottom: 2,
  },
});
