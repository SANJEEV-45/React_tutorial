import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Square({ value, onclick }) {
  return (
    <button className="square" onClick={onclick}>
      {value}
    </button>
  );
}


function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX,setIsX] = useState(true);

  const handleClick = (i) => {

    if(calaculateWinner(squares)){
      return ;
    }
    
    squares[i] = isX ? 'X':'O';
    setSquares(squares);
    setIsX(!isX);
 }
  
 function handleRestart(){
  setSquares(Array(9).fill(null));
  setIsX(true);
 }

  const winner = calaculateWinner(squares);
  let status;

  if(winner){
    status = `Winner :${winner}`;
  }else{
    status = "Next turn "+(isX ? 'X':'O');
  }

  function calaculateWinner(squares){
        const winningPatterns = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for(let i=0; i<winningPatterns.length;i++){
          const[a,b,c] = winningPatterns[i];
          if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
             return squares[a];
          }
        }
        return null;
   } 

  return (
    <body>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onclick={() => handleClick(0)} />
          <Square value={squares[1]} onclick={() => handleClick(1)} />
          <Square value={squares[2]} onclick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onclick={() => handleClick(3)} />
          <Square value={squares[4]} onclick={() => handleClick(4)} />
          <Square value={squares[5]} onclick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onclick={() => handleClick(6)} />
          <Square value={squares[7]} onclick={() => handleClick(7)} />
          <Square value={squares[8]} onclick={() => handleClick(8)} />
        </div>
        <div className="status">{status}</div>
        <button className="restart" onclick={handleRestart()}>Restart</button>
      </div>
    </body>
  );
}

export default App;
