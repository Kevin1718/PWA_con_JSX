import React, { Component } from 'react'
import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from "@react-firebase/database";
import { firebaseConfig } from "../firebase";
import ListaGastos from './ListaGastos'

class TablaGastos extends Component {
    render() {
        return (
            <div className="row justify-content-center">
            <div className="form-group col-md-6">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Costo</th>
                            <th>Detalle</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>                                                        
                    <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
                        <FirebaseDatabaseNode path="gastos/">
                            {(data) => {
                                const { value } = data;
                                if (value === null || typeof value === "undefined") return null;                                
                                const values = Object.values(value);
                                return <ListaGastos items={values} />
                            }}
                        </FirebaseDatabaseNode>
                    </FirebaseDatabaseProvider>
                </table>
            </div>
            </div>
            
        )
    }
}

export default TablaGastos;