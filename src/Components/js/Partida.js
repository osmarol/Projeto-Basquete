import React from 'react';

// Cria a classe Partida e componentes no JSX:
export default class Partida extends React.Component {
//const Partida = () => {
    render() {
        return(
             <div>
                <h2>{this.props.estadio}</h2>
                <div>
                    <span>{this.props.data}</span>
                    <span> - </span>
                    <span>{this.props.horario}</span>
                </div>
        </div>
        );        
    }
}


