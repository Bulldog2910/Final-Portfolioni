from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from snake import snake

app = FastAPI()
game = snake()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Move(BaseModel):
    direction: str

@app.get("/state")
def get_state():
    game.updateGrid()
    return {
        "grid": game.grid,
        "lost": game.lost,
        "won": game.won,
    }

@app.post("/move")
def move_snake(move: Move):
    game.moveSnake(move.direction)
    game.updateGrid()
    return {
        "grid": game.grid,
        "lost": game.lost,
        "won": game.won,
    }
@app.post("/reset")
def reset_game():
    game.reset()
    game.updateGrid()
    return {
        "grid": game.grid,
        "lost": game.lost,
        "won": game.won,
    }