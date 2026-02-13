import { useEffect, useRef, useState } from "react";

export default function PongGame(){
    const ballMargin = useRef(45);
    const ballDirection = useRef("right");
    const ballHeight = useRef(50);
    const heightRegulator = useRef(0.5);
    const ballMoving = useRef(false);

    const leftBarHeightRef = useRef(50);
    const rightBarHeightRef = useRef(50);

    const Score = useRef([0,0]);

    const [ballStyle, setBallstyle] = useState({ marginLeft : (ballMargin.current.toString() + "%"), marginTop: (ballHeight.current.toString() + "%"),});
    const [leftBarStyle, setLeftBarStyle] = useState({marginTop: (leftBarHeightRef.current.toString() + "%"), height: "20%"});
    const [rightBarStyle, setRightBarStyle] = useState({marginTop: (rightBarHeightRef.current.toString() + "%"), height: "20%"});

    
    useEffect(() => {
        document.addEventListener('keydown', (event) => {
                moveBars(event);
            });
    }, [])

    function moveBars(event){
            if(event.key === 'ArrowUp'){
            if(rightBarHeightRef.current <= 0){
                rightBarHeightRef.current = 0;
            }else{
                rightBarHeightRef.current -= 3;
            }
        } else if(event.key === 'ArrowDown'){
            if(rightBarHeightRef.current >= 80){
                rightBarHeightRef.current = 80;
            }else{
                rightBarHeightRef.current += 3;
            }
        } else if (event.key === 'w'){
            if(leftBarHeightRef.current <= 0){
                leftBarHeightRef.current = 0;
            } else {
                leftBarHeightRef.current -= 3;
            }
        } else if (event.key === 's'){
            if(leftBarHeightRef.current >= 80){
                leftBarHeightRef.current = 80
            }else {
                leftBarHeightRef.current += 3;
            }
        }
        setLeftBarStyle({marginTop: (leftBarHeightRef.current.toString() + "%"), height: "20%"});
        setRightBarStyle({marginTop: (rightBarHeightRef.current.toString() + "%"), height: "20%"});
    };

    useEffect(() => {
        function inRange(x, min, max){
            return x >= min && x <= max
        };
        function inRangeY(x, min, max){
            return x >= min && x <= (max - 14)
        };

        function whereOnBar(x, min, max){
            const barHeight = max - min - 14;
            let ballHeight = x - min;
            const middleOfBar = barHeight / 2;
            
            // Calculate position relative to middle (-middleOfBar to +middleOfBar)
            const distanceFromMiddle = ballHeight - middleOfBar;
            
            // Normalize to range -1 to 1
            let newHeightRegulator = distanceFromMiddle / middleOfBar;
            
            // Clamp between -1 and 1
            newHeightRegulator = Math.max(-1, Math.min(1, newHeightRegulator));
            
            heightRegulator.current = Number(newHeightRegulator.toFixed(3));
        }
        setInterval(moveBall, 30);
        function moveBall(){
                if(!inRange(ballMargin.current, -5, 100)){
                    if(ballMoving.current === true){
                        if(ballDirection.current === "right") {
                            Score.current[0] += 1;
                        } else { 
                            Score.current[1] += 1;
                        }
                        ballHeight.current = 45;
                        ballMargin.current = 50;
                    }
                }else {
                    if (ballMoving.current === true){
                        if((ballMargin.current === 96  && inRangeY(ballHeight.current, rightBarHeightRef.current, rightBarHeightRef.current + 45))){
                            ballDirection.current = "left";
                            whereOnBar(ballHeight.current, rightBarHeightRef.current, rightBarHeightRef.current + 48);
                        }
                        if((ballMargin.current === 0  && inRangeY(ballHeight.current, leftBarHeightRef.current, leftBarHeightRef.current + 45))){
                            ballDirection.current = "right";
                            whereOnBar(ballHeight.current, leftBarHeightRef.current, leftBarHeightRef.current + 48);
                        }
                        if(ballHeight.current <= 0 || ballHeight.current >= 112){
                            heightRegulator.current *= -1;
                        }

                        if(ballDirection.current === "right"){
                            ballMargin.current += 0.5;
                        }
                        if(ballDirection.current === "left"){
                            ballMargin.current -= 0.5;
                        }
                            ballHeight.current += Number(heightRegulator.current.toFixed(3));
                    }
                    
                    setBallstyle({ marginLeft : (ballMargin.current.toString() + "%"), marginTop: ballHeight.current.toString() + "%",});
                }
                
            };
        
    }, [])
    


        const pauseStart = () =>{
        if(ballMoving.current === false){
            ballMoving.current = true;
        } else {
            ballMoving.current = false;
        }
        console.log(ballMoving.current);
    }
    
    
    
    return (
    <div>
        <div className="flex flex-col align-items-center justify-center">
            <div >
            <h1  className="text-2xl text-center">Score: {Score.current[0]} : {Score.current[1]}</h1>
            {/* <h1>Height Regulator: {heightRegulator.current}</h1>
            <h1>Ball x: {ballMargin.current}</h1>
            <h1>Ball y: {ballHeight.current}</h1>
            <h1>Ball Moving: {ballMoving.current? "yes" : "no"}</h1>
            <h1>barheight right: {leftBarHeightRef.current}</h1> */}
        </div>
        <div className="bg-black size-60 flex justify-center">
            {<div style={leftBarStyle} id="leftBar" className="bg-white w-[3%] ml-[5%] rounded-lg"></div>}
            <div className="w-[84%]">
                {<div id="pongBall" style={ballStyle} className="bg-white size-[5%] rounded-[50%]"></div>}
            </div>
            {<div style={rightBarStyle} id="rightBar" className='bg-white w-[3%] rounded-lg'></div>}
            
        </div>
        <button className="bg-slate-50 rounded border-1" onClick={pauseStart} > Star/Pause</button>
        <p>Left Bar: W to move up and S to move down</p>
        <p>Right Bar: ArrowUp to move up and ArrowDown to move down</p>
        </div>
        

    </div>
    )
}