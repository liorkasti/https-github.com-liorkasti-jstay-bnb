import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import MaterialButtonViolet33 from "../components/MaterialButtonViolet33";
import MaterialButtonViolet28 from "../components/MaterialButtonViolet28";
import Icon from "react-native-vector-icons/Entypo";
import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";
import MaterialButtonWithVioletText32 from "../components/MaterialButtonWithVioletText32";
import MaterialButtonViolet30 from "../components/MaterialButtonViolet30";
import MaterialButtonWithVioletText21 from "../components/MaterialButtonWithVioletText21";
import MaterialButtonWithVioletText22 from "../components/MaterialButtonWithVioletText22";
import MaterialButtonWithVioletText23 from "../components/MaterialButtonWithVioletText23";
import MaterialButtonWithVioletText24 from "../components/MaterialButtonWithVioletText24";
import MaterialButtonWithVioletText25 from "../components/MaterialButtonWithVioletText25";
import MaterialButtonWithVioletText26 from "../components/MaterialButtonWithVioletText26";
import MaterialButtonWithVioletText28 from "../components/MaterialButtonWithVioletText28";
import MyNameDetails from "../components/MyNameDetails";
import DateBirthDetails from "../components/DateBirthDetails";
import MyLocationDetails from "../components/MyLocationDetails";
import TitleDetails from "../components/TitleDetails";
import KashrutDetails from "../components/KashrutDetails";
import EmailDetails from "../components/EmailDetails";
import PhoneDetails from "../components/PhoneDetails";
import MaterialButtonViolet15 from "../components/MaterialButtonViolet15";
import MaterialButtonViolet16 from "../components/MaterialButtonViolet16";
import MaterialButtonWithVioletText46 from "../components/MaterialButtonWithVioletText46";
import MyStaysRating from "../components/MyStaysRating";
import MyKosherRating from "../components/MyKosherRating";

function MyProfile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <View style={styles.materialButtonViolet22Stack}>
            <MaterialButtonViolet33
              style={styles.materialButtonViolet22}
            ></MaterialButtonViolet33>
            <MaterialButtonViolet28
              editAccount="Change Language"
              style={styles.materialButtonViolet27}
            ></MaterialButtonViolet28>
          </View>
          <Text style={styles.bsD1}>BS&quot;D</Text>
          <View style={styles.button4RowRow}>
            <View style={styles.button4Row}>
              <TouchableOpacity style={styles.button4}>
                <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button5}>
                  <Icon name="chevron-left" style={styles.icon1}></Icon>
                </TouchableOpacity>
              </TouchableOpacity>
              <Text style={styles.text}>My Profile</Text>
            </View>
            <View style={styles.button4RowFiller}></View>
            <MaterialButtonTransparentHamburger
              style={styles.materialButtonTransparentHamburger}
            ></MaterialButtonTransparentHamburger>
          </View>
        </View>
        <MaterialButtonViolet28
          style={styles.materialButtonViolet26}
        ></MaterialButtonViolet28>
      </View>
      <View style={styles.image2StackStack}>
        <View style={styles.image2Stack}>
          <ImageBackground
            source={require("../assets/images/a349af9c-4f91-4501-b494-4d0971940c24.jpg")}
            resizeMode="stretch"
            style={styles.image2}
            imageStyle={styles.image2_imageStyle}
          >
            <MaterialButtonWithVioletText32
              style={styles.materialButtonWithVioletText39}
            ></MaterialButtonWithVioletText32>
          </ImageBackground>
          <MaterialButtonViolet30
            style={styles.materialButtonViolet30}
          ></MaterialButtonViolet30>
          <View style={styles.rect2}>
            <View style={styles.groupFiller}></View>
            <View style={styles.group}>
              <View style={styles.button6Stack}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("MyStaysList")}
                  style={styles.button6}
                >
                  <View
                    style={styles.materialButtonWithVioletText47Filler}
                  ></View>
                  <MaterialButtonWithVioletText21
                    caption="Edit Account"
                    style={styles.materialButtonWithVioletText47}
                  ></MaterialButtonWithVioletText21>
                </TouchableOpacity>
                <MaterialButtonWithVioletText22
                  caption="Update Kashrut"
                  style={styles.materialButtonWithVioletText48}
                ></MaterialButtonWithVioletText22>
                <View style={styles.rect4}></View>
              </View>
              <View style={styles.materialButtonWithVioletText49Stack}>
                <MaterialButtonWithVioletText23
                  caption="Change Language"
                  style={styles.materialButtonWithVioletText49}
                ></MaterialButtonWithVioletText23>
                <View style={styles.rect5}></View>
              </View>
              <View style={styles.materialButtonWithVioletText50Stack}>
                <MaterialButtonWithVioletText24
                  style={styles.materialButtonWithVioletText50}
                ></MaterialButtonWithVioletText24>
                <View style={styles.rect6}></View>
              </View>
              <View style={styles.materialButtonWithVioletText51Stack}>
                <MaterialButtonWithVioletText25
                  style={styles.materialButtonWithVioletText51}
                ></MaterialButtonWithVioletText25>
                <MaterialButtonWithVioletText26
                  caption="Delete Account"
                  style={styles.materialButtonWithVioletText52}
                ></MaterialButtonWithVioletText26>
                <MaterialButtonWithVioletText28
                  style={styles.materialButtonWithVioletText53}
                ></MaterialButtonWithVioletText28>
                <View style={styles.rect3}></View>
                <View style={styles.rect7}></View>
                <View style={styles.rect8}></View>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.loremIpsum}></Text>
        <MyNameDetails style={styles.myNameDetails}></MyNameDetails>
        <DateBirthDetails style={styles.dateBirthDetails}></DateBirthDetails>
        <MyLocationDetails style={styles.myLocationDetails}></MyLocationDetails>
        <TitleDetails style={styles.titleDetails}></TitleDetails>
      </View>
      <KashrutDetails style={styles.kashrutDetails}></KashrutDetails>
      <EmailDetails style={styles.emailDetails}></EmailDetails>
      <PhoneDetails style={styles.phoneDetails}></PhoneDetails>
      <MaterialButtonViolet15
        style={styles.materialButtonViolet15}
      ></MaterialButtonViolet15>
      <MaterialButtonViolet16
        style={styles.materialButtonViolet16}
      ></MaterialButtonViolet16>
      <MaterialButtonWithVioletText46
        style={styles.materialButtonWithVioletText46}
      ></MaterialButtonWithVioletText46>
      <MyStaysRating style={styles.myStaysRating}></MyStaysRating>
      <MyKosherRating style={styles.myKosherRating}></MyKosherRating>
      <MaterialButtonViolet28
        style={styles.materialButtonViolet25}
      ></MaterialButtonViolet28>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  rect1: {
    top: 0,
    left: 0,
    width: 414,
    height: 91,
    position: "absolute",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: 4
  },
  materialButtonViolet22: {
    height: 0,
    width: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  materialButtonViolet27: {
    height: 0,
    width: 32,
    position: "absolute",
    left: 0,
    top: 0,
    borderWidth: 0,
    borderColor: "rgba(2,172,235,1)",
    borderBottomWidth: 1
  },
  materialButtonViolet22Stack: {
    width: 32,
    height: 1,
    marginTop: 5
  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end",
    marginTop: 7,
    marginRight: 38
  },
  button4: {
    width: 29,
    height: 40
  },
  button5: {
    width: 29,
    height: 40
  },
  icon1: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  text: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 115,
    marginTop: 8
  },
  button4Row: {
    height: 40,
    flexDirection: "row"
  },
  button4RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonTransparentHamburger: {
    height: 36,
    width: 36,
    marginTop: 6
  },
  button4RowRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 6,
    marginRight: 20
  },
  materialButtonViolet26: {
    height: 50,
    width: 412,
    position: "absolute",
    left: 217,
    top: 0,
    borderWidth: 0,
    borderColor: "rgba(2,172,235,1)",
    borderBottomWidth: 1
  },
  rect1Stack: {
    width: 629,
    height: 91
  },
  image2: {
    top: 29,
    width: 150,
    height: 150,
    position: "absolute",
    borderRadius: 100,
    left: 130,
    overflow: "hidden"
  },
  image2_imageStyle: {},
  materialButtonWithVioletText39: {
    width: 100,
    height: 36,
    marginTop: 114,
    marginLeft: 25
  },
  materialButtonViolet30: {
    height: 50,
    width: 180,
    position: "absolute",
    left: 0,
    top: 107
  },
  rect2: {
    top: 0,
    left: 205,
    width: 207,
    height: 350,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute",
    flexDirection: "row"
  },
  groupFiller: {
    flex: 1,
    flexDirection: "row"
  },
  group: {
    width: 207,
    height: 344,
    alignItems: "flex-end",
    marginTop: 1
  },
  button6: {
    top: 0,
    width: 207,
    height: 50,
    position: "absolute",
    right: 0,
    flexDirection: "row"
  },
  materialButtonWithVioletText47Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonWithVioletText47: {
    width: 207,
    height: 50
  },
  materialButtonWithVioletText48: {
    top: 49,
    width: 207,
    height: 50,
    position: "absolute",
    right: 0
  },
  rect4: {
    top: 50,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  button6Stack: {
    width: 207,
    height: 99
  },
  materialButtonWithVioletText49: {
    top: 0,
    width: 207,
    height: 50,
    position: "absolute",
    right: 0
  },
  rect5: {
    top: 1,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  materialButtonWithVioletText49Stack: {
    width: 207,
    height: 50
  },
  materialButtonWithVioletText50: {
    top: 0,
    width: 207,
    height: 50,
    position: "absolute",
    right: 0
  },
  rect6: {
    top: 1,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  materialButtonWithVioletText50Stack: {
    width: 207,
    height: 50
  },
  materialButtonWithVioletText51: {
    top: 0,
    width: 207,
    height: 50,
    position: "absolute",
    right: 0
  },
  materialButtonWithVioletText52: {
    top: 49,
    width: 207,
    height: 50,
    position: "absolute",
    right: 0
  },
  materialButtonWithVioletText53: {
    top: 95,
    width: 207,
    height: 50,
    position: "absolute",
    right: 0
  },
  rect3: {
    top: 93,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect7: {
    top: 1,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect8: {
    top: 46,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  materialButtonWithVioletText51Stack: {
    width: 207,
    height: 145
  },
  image2Stack: {
    top: 0,
    left: 0,
    width: 412,
    height: 350,
    position: "absolute"
  },
  loremIpsum: {
    top: 188,
    left: 50,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 20
  },
  myNameDetails: {
    position: "absolute",
    top: 243,
    left: 33,
    height: 36,
    right: 0
  },
  dateBirthDetails: {
    position: "absolute",
    top: 283,
    left: 29,
    height: 36,
    right: 0
  },
  myLocationDetails: {
    position: "absolute",
    top: 324,
    left: 35,
    height: 36,
    right: 0
  },
  titleDetails: {
    position: "absolute",
    top: 203,
    left: 28,
    height: 36,
    right: 0
  },
  image2StackStack: {
    height: 360,
    marginTop: 1,
    marginLeft: 2
  },
  kashrutDetails: {
    height: 36,
    marginTop: 3,
    marginLeft: 33
  },
  emailDetails: {
    height: 36,
    marginTop: 4,
    marginLeft: 31
  },
  phoneDetails: {
    height: 38,
    marginTop: 8,
    marginLeft: 31
  },
  materialButtonViolet15: {
    height: 45,
    borderRadius: 10,
    marginTop: 168,
    marginLeft: 31,
    marginRight: 28
  },
  materialButtonViolet16: {
    height: 45,
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 0,
    marginTop: 11,
    marginLeft: 30,
    marginRight: 28
  },
  materialButtonWithVioletText46: {
    height: 30,
    marginTop: -156,
    marginLeft: 14,
    marginRight: 153
  },
  myStaysRating: {
    height: 48,
    width: 159,
    marginTop: -139,
    marginLeft: 29
  },
  myKosherRating: {
    height: 49,
    width: 159,
    marginTop: 9,
    marginLeft: 30
  },
  materialButtonViolet25: {
    height: 0,
    width: 32,
    borderWidth: 0,
    borderColor: "rgba(2,172,235,1)",
    borderBottomWidth: 1,
    marginTop: -692
  }
});

export default MyProfile;