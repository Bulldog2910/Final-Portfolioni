import { useState, useEffect } from "react";
import "./snakeBoard.css"

const backendUrl = "http://127.0.0.1:8000";

export default function SnakeBoard() {
    const [grid, setGrid] = useState([]);
    const [won, setWon] = useState(false);
    const [lost, setLost] = useState(false);
    const [direction, setDirection] = useState("");
    const [pause, setPause] = useState(false)

    const fetchState = async () => {
        try{
            const res = await fetch(`${backendUrl}/state`);
            const data = await res.json();

            setGrid(data.grid);
            setWon(data.won)
            setLost(data.lost)
        } catch (error){
            console.log("An error occurred while fetching snakeboard: " + error.message);
        }
        
    };

    const resetGame = async () => {
        try {
            const res = await fetch(`${backendUrl}/reset`, {
                method: "POST",
            });
            const data = await res.json();
            setGrid(data.grid);
            setLost(data.lost);
            setWon(data.won);
        } catch (error){
             console.log("An error occurred while reseting snakeboard: " + error.message);
        } 
        
    };

    useEffect(() => {
        fetchState();
    }, []);


    const handleKey = (e) => {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
            e.preventDefault(); 
        }
        if (e.key === "ArrowUp") setDirection("Up");
        if (e.key === "ArrowDown") setDirection("Down");
        if (e.key === "ArrowLeft") setDirection("Left");
        if (e.key === "ArrowRight") setDirection("Right");
        };

    useEffect(() => {
        if (won || lost) {
            setPause(true);
        }
    }, [won, lost])

    useEffect(() => {
        if (pause) return;
        
        const interval = setInterval(async () => {
            try{
                 const res = await fetch(`${backendUrl}/move`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ direction })
                    
                });

                const data = await res.json();
                    setGrid(data.grid);
                    setLost(data.lost);
                    setWon(data.won);
                }
                catch (error){
                    console.log("An error occurred: " + error.message);
                }
                    
        }, 400);

        return () => clearInterval(interval);
    }, [pause, direction]);

    useEffect(() => {
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    
    return (
    <div>
        <div 
            className="snakeGridGrid"   tabIndex={0}
            style={{ outline: "none" }}
            onKeyDown={handleKey}
            >
            <h2>Snake (Python Backend)</h2><p>Use Arrow keys to move snake</p> 
            {lost && <h3 style={{ color: "red" }}>You Lost</h3>}
            {won && <h3 style={{ color: "green" }}>You Won!</h3>}
            <div className="rounded bg-slate-400">
                <div
                    style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(10, 20px)",
                    }}
            >
                {Array.isArray(grid) && grid.flat().map((cell, i) => (
                    <div
                        key={i}
                        style={{
                        width: 20,
                        height: 20,
                        background:
                            cell === "snake"
                            ? "green"
                            : cell === "Apple"
                            ? "red"
                            : cell === "Lost"
                            ? "black"
                            : "transparent",
                        borderRadius: cell === "Apple" ? "50%" : "0",
                        
                        }
                    }
                    />
                ))}
                
            </div>
            </div>
            
            <button className="bg-slate-400 rounded" onClick={resetGame} style={{ marginTop: "20px", padding: "10px"}}>
                    Restart Game
            </button>
            <button className="bg-slate-400 rounded" onClick={() => setPause(true)} style={{ marginTop: "20px", padding: "10px"}}>
                    Pause
            </button>
            <button className="bg-slate-400 rounded" onClick={() => setPause(false)} style={{ marginTop: "20px", padding: "10px"}}>
                    Start
            </button>
        </div>  
    </div>
  );
}