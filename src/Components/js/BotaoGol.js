import React from 'react';

// Cria a classe Botão:
export default class BotaoGol extends React.Component {

    MetodoUmPonto(e) { // Método que usa como parâmetro um object event: e
        e.preventDefault(); // Método cancelar o comportamento padrão do evento.
        this.props.golMarcado(); // Acessa propriedades e métodos.   
    } 

    MetodoDoisPontos(e) {
        e.preventDefault();
        this.props.golMarcadoDois();
    }

    MetodoTresPontos(event) {
        event.preventDefault();
        this.props.golMarcadoTres();
    } 

    render() { // renderizar conteúdo
        return ( 
            // Cria um botão com evento de click no JSX.
            <div>
            <button className="BtGol" onClick={this.MetodoUmPonto.bind(this)}>MaisUm</button>
            <button className="BtGol" onClick={this.MetodoDoisPontos.bind(this)}>MaisDois</button>
            <button className="BtGol" onClick={this.MetodoTresPontos.bind(this)}>MaisTrês</button>
            </div>
        );
    }
} 