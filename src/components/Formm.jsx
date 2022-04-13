import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from "@react-firebase/database";
import { firebaseConfig } from "../firebase";
import TablaGastos from "./TablaGastos";
import NuevoGasto from "./NuevoGasto";

class Formm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalle: "",
      costo: 0,
      categoria: null
    };    
    console.log(this.state);
  }

  setDetalle = (event) => {
    this.setState(
      { detalle: event.target.value },
      console.log(event.target.value)
    );
  };

  setCosto = (event) => {
    this.setState(
      { costo: event.target.value },
      console.log(event.target.value)
    );
  };

  setCategoria = (selectedCategoria) => {
    this.setState({ categoria: selectedCategoria.target.value });
  };

  clean = () => {
    this.setState({
        detalle: "",
        costo: 0,
        categoria: ""
    })
  }

  render() {
    const { detalle, costo, categoria } = this.state;
    return (
      <div>
        <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
          <FirebaseDatabaseNode path="categoria/">
            {(data) => {
              const { value } = data;
              if (value === null || typeof value === "undefined") return null;
              const values = Object.values(value);
              return <div className="row justify-content-center">
                <div className="form-group col-md-6">
                  <label htmlFor="">Ingrese el tipo:</label>
                  <select
                    onChange={this.setCategoria}                    
                    className="form-control"
                    value={categoria}
                  >
                    <option value={categoria}>Seleccione una categoría</option>
                    {values.map((value) => {
                      return (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>;
            }}
          </FirebaseDatabaseNode>
        </FirebaseDatabaseProvider>
        <div className="row justify-content-center">
          <div className="form-group col-md-6">
            <label htmlFor="">Ingrese el costo:</label>
            <input
              onChange={this.setCosto}
              type="number"
              name="costo"
              id="costo"
              className="form-control"
              value={costo}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="form-group col-md-6">
            <label htmlFor="">Ingrese un detalle:</label>
            <input
              onChange={this.setDetalle}
              type="text"
              name="detalle"
              id="detalle"
              className="form-control"
              value={detalle}
            />
          </div>
        </div>
        <NuevoGasto detail={detalle} cost={costo} categoria={categoria} clean={this.clean}/>
        
        <br />
        
      </div>
    );
    
  }
}

export default Formm;
