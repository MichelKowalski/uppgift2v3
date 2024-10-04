import { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

export default function Index() {
  function addPlus() {
    setAddNumber(addNumber + 1);
  }

  function addMinus() {
    setAddNumber(addNumber - 1);

    if (addNumber <= 0) {
      setAddNumber(0);
    }
  }

  function resetNumbers() {
    setAddNumber(0);
  }

  const [addNumber, setAddNumber] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
      <Text style={{ fontSize: 40, fontStyle: "italic" }}>{addNumber}</Text>
      <Button
        title="PLUS"
        onPress={() => {
          addPlus();
        }}
      />
      <Button
        title="MINUS"
        onPress={() => {
          addMinus();
        }}
      />
      {addNumber > 0 && <Button title="RESET" onPress={resetNumbers} />}
    </View>
  );
}
