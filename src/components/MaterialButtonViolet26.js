import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonViolet26(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.textAdded}>Collect a Deductible Charge</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,88,155,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  textAdded: {
    width: 528,
    height: 17,
    color: "rgba(2,172,235,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    textAlign: "center"
  }
});

export default MaterialButtonViolet26;
