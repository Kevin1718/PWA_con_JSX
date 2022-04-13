import React, { Component } from 'react';

class ListaGastos extends Component {
    render(){
        return(
            <tbody>
                {
                this.props.items.map((val) => {
                    const s = Object.values(val);                    
                    return(
                        <tr>
                            <td>{s[0]}</td>
                            <td>{s[1]}</td>
                            <td>{s[2]}</td>
                            <td>{s[3]}</td>
                        </tr>
                    )
                })                   
                }
            </tbody>            
        )
    }
}

export default ListaGastos;