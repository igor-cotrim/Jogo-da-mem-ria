import React from 'react';

function GameOver(props) {
    
    return(props.show?
        //Tela de Fim de Jogo
        <div id="gameOver">
           <div id="gameOverBox">
               <h1 id="gameOverTitle">
                   JOGO DA MEMÓRIA
               </h1>
               <button id="restartGame" onClick={props.handleRestart}>Jogar Novamente</button>
           </div>
       </div> :<></>
    );

}
export default GameOver;