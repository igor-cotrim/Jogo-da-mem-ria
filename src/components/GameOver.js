import React from 'react';

function GameOver(props) {
    
    return(props.show?
        //Tela de Fim de Jogo
        <div id="gameOver">
           <div id="gameOverBox">
               <h1 id="gameOverTitle">
                   Fim de Jogo!
               </h1>
               <h2 id="gameOverSubtitle"> Você completou o desafio.</h2>
               <button id="restartGame" onClick={props.handleRestart}>Jogar Novamente</button>
           </div>
       </div> :<></>
    );

}
export default GameOver;