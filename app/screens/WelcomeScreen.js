import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

function WelcomeScreen(props) {
  const [fontsLoaded] = useFonts({
    Questrial: require("../assets/font/Questrial-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.primaryText}>welcome to {"\n"} shout</Text>
      <Text style={styles.primaryText}>
        Working on implementing Login/Signup page
      </Text>
      <View style={styles.button}>
        <Text style={styles.secondaryText}>Login</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.secondaryText}>Signup</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Questrail",
  },
  primaryText: {
    //fontFamily: "Questrial",
    fontSize: 20,
    color: "#18a1e7",
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryText: {
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "25%",
    height: 50,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#18a1e7",
  },
});

export default WelcomeScreen;
