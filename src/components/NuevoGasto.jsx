import * as React from "react";
import { Component } from "react";
import { FirebaseDatabaseMutation } from "@react-firebase/database";
import firebase from "firebase/app";
import "firebase/database";
import { FirebaseDatabaseProvider } from "@react-firebase/database";

import { firebaseConfig } from "../firebase";

class NuevoGasto extends Component {
  getFecha = () => {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) {
      return `${day}-0${month}-${year}`;
    } else {
      return `${day}-${month}-${year}`;
    }
  };

  render() {
    return (
      <>
        <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
          <FirebaseDatabaseMutation type="push" path="gastos">
            {({ runMutation }) => {
              return (
                <div className="row justify-content-center">
                    <div className="col-xs-3 col-md-3 col-sm-12">
                      <input
                        type="button"
                        Style="width:100%"
                        value="Agregar nuevo gasto"
                        className="mt-3 btn btn-outline-primary"
                        onClick={async () => {
                          await runMutation({
                            categoria: this.props.categoria,
                            costo: this.props.cost,
                            detalle: this.props.detail,
                            fecha: this.getFecha(),
                          });
                        }}
                      />
                    </div>
                    <div className="col-xs-3 col-md-3 col-sm-12">
                      <input
                        type="button"
                        Style="width:100%"
                        value="Limpiar campos"
                        className="mt-3 btn btn-outline-success"
                        onClick={this.props.clean}
                      />
                    </div>

                </div>
              );
            }}
          </FirebaseDatabaseMutation>
        </FirebaseDatabaseProvider>
      </>
    );
  }
}

export default NuevoGasto;
