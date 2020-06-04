import React from 'react';

import PlacarContainer from './Components/js/PlacarContainer';

// 1) CRIAR UM OBJETO:

const placar = {  // Objeto Placa
  casa: { // Chave do Objeto Placar 
    nome: "Sport/PE", // Chva do Objeto Casa
  },
  partida: { // Chava do Objeto Placar 
      estadio: "Mineirão/BH", // Chave do Objeto partida
      data: "10/04/2020",
      horario: "19h",
  },
  visitante: { // Chave do Objeto Placar
      nome: "Cruzeiro/MG", // Chave do Objeto visitante
  }    
};     

export default class App extends React.Component {
  render() {
  
  //return <PlacarContainer {... dados} tempo={92}/>
  //}

  // Referência ao componente principal:

  return <PlacarContainer // Referência ao Componente Principal
  
  // 2) CRIA VARIÁVEIS E ARMAZENA VALORES:
          casa={placar.casa}  
          partida={placar.partida}
          visitante={placar.visitante} 
          clima={'Frio'}  
        />   
  }
}
