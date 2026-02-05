import { useEffect } from "react";
import React from 'react';
import "./ticTacToe.css"
                 

export function TicTacToe(){
    let returnOutput = [];

    const winRows =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const [ticTacToeArr, setTicTacToeArr] = React.useState(Array.from({ length: 9 }, () => [null, null]));
    const [currentOpponent, setCurrentOpponent] = React.useState("X");
    const [winner, setWinner] = React.useState(false);
    const [turns, setTurns] = React.useState(0);
    const [losers, setLosers] = React.useState(null);
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const winneroutput = winner ? 
    (<>
        <div> {currentOpponent} won the game, congrats!</div> 
        <button onClick={reset}>
            Reset
        </button>
    </>) 
    : null;

    //Check to see if anybody has won
    //returns who's won or false if nobody has won
    function hasWon() {
        const xArr = [];
        const oArr = [];

        let checker = (arr, target) => target.every(v => arr.includes(v));

        ticTacToeArr.forEach((opponent, index) => {
            if(opponent[0] === "X"){
                xArr.push(index);
            }else if(opponent[0] === "O"){
                oArr.push(index);
            }
        });
        console.log(xArr);
            if (winRows.some(row => checker(xArr, row))) return "X";
            if (winRows.some(row => checker(oArr, row))) return "O";
        return false;
    }

    //updates the board, whos playing next, and checks if all turns have been played
    function updateTicTacToe(boxNumber){
        
        if (ticTacToeArr[boxNumber][0]) return;

        const newArr = ticTacToeArr;
        newArr[boxNumber][0] = currentOpponent;

        setTicTacToeArr(newArr);
        const result = hasWon();
        if(result === "X" || result === "O"){
            setWinner(true)
            setButtonDisabled(true)
            return;
        }

        if (currentOpponent === "X"){
            setCurrentOpponent("O");
        } else{
            setCurrentOpponent("X");
        }
        if(turns === 8){

            const losersOutput =  
                (<>
                    <div> Nobody won the game.</div> 
                    <button onClick={reset}>
                        Reset
                    </button>
                </>) 
            setLosers(losersOutput)
            setButtonDisabled(true)

        }
        setTurns(turns+1);
        console.log(turns)

        
    }

    //Resets all usestate, reseting the board
    function reset() {
        setTicTacToeArr(
            Array.from(
                { length: 9 }, 
                () => [null, null]
            )
        )
        setWinner(false);
        setCurrentOpponent("X");
        setLosers("");
        setTurns(0)
        setButtonDisabled(false)
    };

    //creates grid and pushes into array array making it ready to be displayed
    for (let x = 0; x < 9; x++){
        returnOutput.push(
            <div className='ticTacToeGriObject' key={x}> 
                <button
                    className="ticTacToeButton"
                    onClick={() => updateTicTacToe(x)}
                    disabled={buttonDisabled}
                    id={x}
                > 
                    {ticTacToeArr[x][0]}
                </button>
            </div>) 
    }

    //Returns what is going to be displayed
    return(
        <div>
            
        <div className="ticTacToe">
            <h2>Tic Tac Toe made in <br></br>100%  Javascript/React</h2>
            <div className="whosTurn" hidden={buttonDisabled}>{currentOpponent}'s time to play</div>
            <div className="ticTacToeGrid">
                {returnOutput}
                
            </div>
            
            <div className="winner">{winneroutput}</div>
            <div className="winner">{losers}</div>

        </div>
        </div>
    );
}

export default TicTacToe;