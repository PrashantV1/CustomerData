import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import Dataa from "./data.json";

const Customer = () => {
  const [customer, setcustomer] = useState("");
  const [address, setaddress] = useState("");
  const [click, setclick] = useState("");

  useEffect(() => {
    setcustomer(Dataa);
  }, []);

  if (customer.length != 0) {
    console.log(customer[0].Name);
  }

  const _renderIem = ({ item, index }) => {
    let customerData = Dataa;

    return (
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.buttoncontainer}
          onPress={() => {
            setclick(1);
            setaddress(customerData[index].adress1);
          }}
        >
          <Text
            style={styles.buttontext}
          >{`  ${customerData[index].Name} ${customerData[index].customerId} ${customerData[index].sex} ${customerData[index].AGE}`}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const adres = address.length == 0 ? "No Adress Found" : address;

  return (
    <View>
      <Text style={styles.Container2}>
        <Text>Customer Data</Text>
        <Text style={styles.Container1}>Address</Text>
      </Text>
      <View style={styles.Container}>
        <FlatList
          data={customer}
          renderItem={_renderIem}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={styles.buttontext}>
          {" "}
          {click == 0 ? "Click on any customer to get the address" : adres}{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container1: {
    paddingLeft: 180,
  },
  Container2: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#50DBB4",
  },
  Container3: {
    flex: 1,
  },
  Container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "row",

    padding: 10,
    paddingTop: 50,
    backgroundColor: "#50DBB4",
  },
  item: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#50DBB4",
    // borderRadius: 50,
  },
  icon: {
    padding: 20,
    justifyContent: "flex-start",
    alignContent: "left",
  },
  buttoncontainer: {
    backgroundColor: "#66AD47",
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttontext: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Customer;
