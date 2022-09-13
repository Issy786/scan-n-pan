import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
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
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleScanned}
        style={styles.camera}
      >
        <View>
          <Text style={styles.maintext}>{text}</Text>
        </View>
        <View style={styles.buttonText}>
          {scanned && (
            <Pressable style={styles.scan} onPress={() => setScanned(false)}>
              <Text style={styles.scanText}>{"Scan Again"}</Text>
            </Pressable>
          )}
        </View>
        <View style={styles.addButton}>
          {scanned && (
            <Pressable
              style={styles.scan}
              onPress={() => {
                handleScannedItem(), navigation.navigate("Home");
              }}
            >
              <Text style={styles.scanText}>{"Add Ingredient"}</Text>
            </Pressable>
          )}
        </View>
      </BarCodeScanner>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 10,
  },
  buttonText: {
    marginBottom: 2,
    bottom: 20,
  },
  scan: {
    padding: 10,
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  scanText: {
    color: "white",
  },
  addButton: {
    bottom: 1,
  },
});
