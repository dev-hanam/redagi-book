import {useState} from 'react';
import {
  GestureResponderEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Counter({
  count,
  onPressPlus,
  onPressMinus,
}: {
  count: number;
  onPressPlus: (event: GestureResponderEvent) => void;
  onPressMinus: (event: GestureResponderEvent) => void;
}) {
  return (
    <>
      <View style={styles.countContainer}>
        <View style={styles.countArea}>
          <Text style={styles.countNum}>{count}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPressPlus}>
          <Text style={styles.buttonFont}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressMinus}>
          <Text style={styles.buttonFont}>-1</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  const onPressPlus = () => {
    setCount(count + 1);
  };
  const onPressMinus = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <SafeAreaView style={{flex: 2}}>
      <Counter
        count={count}
        onPressPlus={onPressPlus}
        onPressMinus={onPressMinus}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  countContainer: {
    flex: 1,
  },
  countArea: {
    padding: 10,
    backgroundColor: 'red',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  countNum: {
    color: 'white',
    fontSize: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  button: {
    marginHorizontal: 10,
  },
  buttonFont: {
    fontSize: 40,
    padding: 10,
    margin: 10,
    color: 'black',
  },
});

export default App;
