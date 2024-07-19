import { useState } from "react";
import Block from "./Block";

const TicToc =  (props)=>{
    let [state,setState] = useState(Array(9).fill(null));
    let [currentTurn,setCurrentTurn] = useState("X");
    const checkWinner = (state)=> {
        let winList= [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8] 
        ]
        for(let i=0;i<winList.length;i++){
            const [a,b,c] = winList[i];
            if(state[a] !== null &&state[a] === state[b] && state[a] === state[c]) return true;
        }
        return false;
    }
    const handleClick = (num)=>{
        console.log(num);
        let stateCopy = Array.from(state);
        if(stateCopy[num] !== null) return;
        stateCopy[num] = currentTurn;
        let win = checkWinner(stateCopy);
        if(win){alert(`${currentTurn} won the game`)}
        
        setCurrentTurn(currentTurn === 'X' ? '0':'X');
        setState(stateCopy);
       
    }
    return(
    <div className="board">
        <div className="row">
            <Block onClick={()=>handleClick(0)} value={state[0]}></Block>
            <Block onClick={()=>handleClick(1)} value={state[1]}></Block>
            <Block onClick={()=>handleClick(2)} value={state[2]}></Block>
        </div>
        <div className="row">
            <Block onClick={()=>handleClick(3)} value={state[3]}></Block>
            <Block onClick={()=>handleClick(4)} value={state[4]}></Block>
            <Block onClick={()=>handleClick(5)} value={state[5]}></Block>
        </div>
        <div className="row">
            <Block onClick={()=>handleClick(6)} value={state[6]}></Block>
            <Block onClick={()=>handleClick(7)} value={state[7]}></Block>
            <Block onClick={()=>handleClick(8)} value={state[8]}></Block>
        </div>
    </div>
    )
}

export default TicToc;