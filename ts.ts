type Turtle = "turtle" | null;

type Game = {
  makeTurn: (direction: "left" | "right") => void;
  state: Array<Turtle>;
};

const startGame = (): Game => {
  const state: Array<Turtle> = ["turtle", null, null, null, null];

  const makeTurn = (direction: "left" | "right") => {
    if (direction === "right") {
      if (state[4] != "turtle") {
        state.pop();
        state.unshift(null);
      } else throw new Error("ERROR");
    } else if (direction === "left") {
      if (state[0] != "turtle") {
        state.push();
        state.shift();
        return state;
      } else throw new Error("ERROR");
    }
  };

  return { makeTurn, state };
};

const { makeTurn, state } = startGame();
makeTurn("right");
console.log(state);
export default startGame;
