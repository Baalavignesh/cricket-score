import React, { useEffect, useState } from "react";

function Score() {
  let [matchInfo, setMatchInfo] = useState({
    goal: 150,
    balls: 150,
  });

  let [score, setScore] = useState(0);
  let [currentBall, setCurrentBall] = useState(0);
  let [wicket, setWicket] = useState(0);

  let [result, setResult] = useState("");

  let possible = [1, 2, 3, 4, 6, "wicket", "wide"];

  let getScore = () => {
    const randomIndex = Math.floor(Math.random() * possible.length);
    // if (possible[randomIndex] === "wicket") {
    //   let newIndex = randomIndex;
    //   while (possible[newIndex] === "wicket") {
    //     newIndex = Math.floor(Math.random() * possible.length);
    //   }
    // return possible[newIndex];
    // }
    return possible[randomIndex];
  };

  let startGame = () => {
    let tempScore = 0;
    let tempWicket = 0;
    let tempBall = 0;
    var match = setInterval(() => {
      if (tempScore > matchInfo.goal) {
        setResult("You Won!");
        clearInterval(match);
        return;
      } else if (tempBall > matchInfo.balls || tempWicket === 10) {
        setResult("You Lost :(");
        clearInterval(match);
      } else {
        let response = getScore();
        setCurrentBall((curBall) => curBall + 1);
        tempBall += 1;
        console.log(response);
        console.log();
        if (typeof response == "number") {
          setScore((prevScore) => prevScore + response);
          tempScore += response;
        } else if (response == "wicket") {
          setWicket((prevWicket) => prevWicket + 1);
          tempWicket += 1;
        } else {
          setScore((prevScore) => prevScore + 1);
          tempScore += 1;
        }
      }
    }, 1000);
  };

  return (
    <div className="flex w-full  item-center h-screen ">
      <div className="p-12 m-20 flex flex-col w-3/5 bg-slate-200 rounded-lg justify-around">
        <div>
          <h1 className="text-4xl bold font-normal text-center m-10">
            Cricket Score Simulator
          </h1>
        </div>
        <div className="flex  flex-col justify-center item-center">
          <h1 className="font-light text-4xl p-4 text-center">
            {matchInfo.goal - score} runs to score in{" "}
            {matchInfo.balls - currentBall}
          </h1>
          <div className="flex justify-center item-center">
            <h1 className="font-medium text-2xl p-4">Score : {score}</h1>
            <div className="w-[0.5px] h-10 bg-opacity-50 bg-black m-3"></div>
            <h1 className="font-medium text-2xl p-4">Wicket : {wicket}</h1>
          </div>
        </div>

        <div className="mt-6 self-center">
          <h1 className="font-semibold text-4xl text-green-300 p-4">{result}</h1>
          <button className="p-4 rounded-lg bg-green-300" onClick={startGame}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default Score;
