import React from 'react';

import BotaoGol from './BotaoGol';

// Cria a classe Time e componentes no JSX:S
export default class Time extends React.Component {
    render() {
        return (
            <div>
                {/* <h1 className="Casinha">{this.props.nome}</h1> */}
                <h2 className="Gol">{this.props.gols}</h2>
                <BotaoGol 
                /* marcarGol={this.props.marcarGol}
                marcarGolDois={this.props.marcarGolDois} 
                marcarGolTres={this.props.marcarGolTres} */

                golMarcado={this.props.marcarGol}
                golMarcadoDois={this.props.marcarGolDois}
                golMarcadoTres={this.props.marcarGolTres}
                />
            </div>
        );
    }
}