import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";

export default function App() {
  const [display, setDisplay] = useState("");
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);

  // Função para lidar com o pressionamento de números
  const handleNumberPress = (number) => {
    setDisplay((prevDisplay) => prevDisplay + number);
  };

  // Função para lidar com os botões de operação
  const handleOperationPress = (op) => {
    if (display === "") return;
    setResult(parseFloat(display));
    setOperation(op);
    setDisplay("");
  };

  // Função para lidar com o botão de igual
  const handleEqualsPress = () => {
    if (operation && display) {
      const currentNumber = parseFloat(display);
      let finalResult = result;

      switch (operation) {
        case "+":
          finalResult += currentNumber;
          break;
        case "-":
          finalResult -= currentNumber;
          break;
        case "X":
          finalResult *= currentNumber;
          break;
        case "/":
          if (currentNumber !== 0) {
            finalResult /= currentNumber;
          } else {
            alert("Erro: Divisão por zero");
            return;
          }
          break;
        case "%":
          finalResult = (result * currentNumber) / 100;
          break;
        default:
          return;
      }

      setDisplay(finalResult.toString());
      setResult(null);
      setOperation(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <Text style={styles.title}>{display}</Text>
      <Text style={styles.title}>{result}</Text>
      <Text style={styles.title}> {operation}</Text>

      <View style={styles.row}>
        <Button
          label="C"
          style={styles.clearBtn}
          onPress={() => {
            setDisplay("");
            setResult(null);
            setOperation(null);
          }}
        />
        <Button label="+/-" style={styles.clearBtn} />
        <Button label="%" style={styles.clearBtn} />
        <Button
          label="/"
          style={styles.operatorBtn}
          onPress={() => handleOperationPress("/")}
        />
      </View>

      <View style={styles.row}>
        <Button label="7" onPress={() => handleNumberPress("7")} />
        <Button label="8" onPress={() => handleNumberPress("8")} />
        <Button label="9" onPress={() => handleNumberPress("9")} />
        <Button
          label="X"
          style={styles.operatorBtn}
          onPress={() => handleOperationPress("X")}
        />
      </View>

      <View style={styles.row}>
        <Button label="4" onPress={() => handleNumberPress("4")} />
        <Button label="5" onPress={() => handleNumberPress("5")} />
        <Button label="6" onPress={() => handleNumberPress("6")} />
        <Button
          label="-"
          style={styles.operatorBtn}
          onPress={() => handleOperationPress("-")}
        />
      </View>

      <View style={styles.row}>
        <Button label="1" onPress={() => handleNumberPress("1")} />
        <Button label="2" onPress={() => handleNumberPress("2")} />
        <Button label="3" onPress={() => handleNumberPress("3")} />
        <Button
          label="+"
          style={styles.operatorBtn}
          onPress={() => handleOperationPress("+")}
        />
      </View>

      <View style={styles.row}>
        <Button label="#"></Button>
        <Button label="0" onPress={() => handleNumberPress("0")} />
        <Button label="." onPress={() => handleNumberPress(".")} />
        <Button
          label="="
          style={styles.operatorBtn}
          onPress={handleEqualsPress}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginVertical: 20,
  },
  number: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
  operatorBtn: {
    backgroundColor: "#ff9500",
  },
  clearBtn: {
    backgroundColor: "#a5a5a5",
  },
});
