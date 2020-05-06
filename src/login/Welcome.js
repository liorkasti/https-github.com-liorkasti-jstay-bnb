import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import ContinueGoogleButton from "./components/ContinueGoogleButton";
import Svg, { Path } from "react-native-svg";
import GotoLoginButton from "./components/GotoLoginButton";
import CreateAccountButton from "./components/CreateAccountButton";
import ContinueFacebookButton from "./components/ContinueFacebookButton";
import Icon from "react-native-vector-icons/Entypo";

function WelcomePage(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button2}>
        <ContinueGoogleButton
          style={styles.continueGoogleButton}
        ></ContinueGoogleButton>
      </TouchableOpacity>
          <Svg viewBox="0 0 44 63.01159786070548" style={styles.path}>
            <Path
              strokeWidth={1}
              fill="rgba(230, 230, 230,1)"
              stroke="rgba(230, 230, 230,1)"
              d="M0.00 0.01 C0.00 1.01 44.00 63.01 44.00 63.01 C44.00 63.01 0.00 -0.99 0.00 0.01 Z"
            ></Path>
          </Svg>
      <TouchableOpacity style={styles.button4}>
        <GotoLoginButton onPress={props.onNext} style={styles.gotoLoginButton}></GotoLoginButton>
        </TouchableOpacity>
      <TouchableOpacity style={styles.button5}>
        <CreateAccountButton
        onPress={props.createAccount}
          style={styles.createAccountButton}
        ></CreateAccountButton>
      </TouchableOpacity>
      <Text style={styles.text}>
        By tapping &#39;Continue with Facebook&#39;, &#39;Continue with
        Google&#39; or &#39;Create an Account&#39; you agree to Jstays&#39;
        Terms of Service, Payments Terms of Service, Privacy Policy and
        Non-Discrimination Policy.
      </Text>
      <TouchableOpacity style={styles.button3}>
        <ContinueFacebookButton
          style={styles.continueFacebookButton}
        ></ContinueFacebookButton>
      </TouchableOpacity>
      <Text style={styles.bsD}>BS&quot;D</Text>
      <Image
        source={require("../assets/images/JStay-Logo-blue-shin6.png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
      <TouchableOpacity style={styles.button6}>
        <Icon name="chevron-down" style={styles.icon}></Icon>
        <Text style={styles.chooseLanguage}>Choose language</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0,88,155,1)"
  },
  button2: {
    top: 425,
    left: 31,
    width: 352,
    height: 62,
    position: "absolute"
  },
  continueGoogleButton: {
    top: 0,
    left: 0,
    width: 352,
    height: 62,
    position: "absolute"
  },
  path: {
    top: 151,
    left: -121,
    width: 29,
    height: 42,
    position: "absolute"
  },
  button4: {
    top: 40,
    width: 108,
    height: 48,
    position: "absolute",
    right: -14
  },
  gotoLoginButton: {
    top: 0,
    left: 0,
    width: 108,
    height: 48,
    position: "absolute"
  },
  button5: {
    top: 507,
    left: 31,
    width: 352,
    height: 62,
    position: "absolute"
  },
  createAccountButton: {
    top: 0,
    left: 0,
    width: 352,
    height: 62,
    position: "absolute"
  },
  text: {
    left: "7.51%",
    width: 304,
    height: 60,
    color: "rgba(168,219,243,1)",
    position: "absolute",
    bottom: 54,
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  button3: {
    top: 350,
    left: 31,
    width: 352,
    height: 62,
    position: "absolute"
  },
  continueFacebookButton: {
    top: 0,
    left: 0,
    width: 352,
    height: 62,
    position: "absolute"
  },
  bsD: {
    top: 13,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    right: 38,
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  image2: {
    width:"auto",
    top: "15.29%",
    left: 0,
    height: 150,
    position: "absolute",
    right: 0
  },
  button6: {
    top: 46,
    left: 31,
    width: 150,
    height: 33,
    position: "absolute"
  },
  icon: {
    top: 0,
    left: 125,
    position: "absolute",
    color: "rgba(2,172,235,1)",
    fontSize: 25
  },
  chooseLanguage: {
    top: 3,
    left: 0,
    width: 149,
    height: 30,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(2,172,235,1)",
    borderWidth: 2,
    fontSize: 16,
    fontFamily: "roboto-regular"
  }
});

export default WelcomePage;