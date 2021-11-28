import React from 'react';

function GameOver(props) {
    
    return(props.show?
        //Tela de Fim de Jogo
        <div id="gameOver">
           <div id="gameOverBox">
               <h1 id="gameOverTitle">
                   JOGO DA MEMÓRIA
               </h1>
               <button id="restartGame" onClick={props.eightCards}>8 Cartas</button>
               <button id="restartGame" onClick={props.handleRestart}>16 Cartas</button>
           </div>
       </div> :<></>
    );

}
export default GameOver;