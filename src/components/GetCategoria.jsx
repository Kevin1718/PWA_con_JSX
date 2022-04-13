import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from "@react-firebase/database";
import { firebaseConfig } from "../firebase";
import Select from './Select'

class GetCategoria extends Component {
  render() {
    return (
      <div>
        <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
          <FirebaseDatabaseNode path="categoria/">
            {(data) => {
              const { value } = data;
              if (value === null || typeof value === "undefined") return null;
              const values = Object.values(value);
              return <Select categoria={values}/>
            }}
          </FirebaseDatabaseNode>
        </FirebaseDatabaseProvider>
      </div>
    );
  }
}

export default GetCategoria;
