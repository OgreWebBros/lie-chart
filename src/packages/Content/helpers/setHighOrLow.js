
import Randomizer from "react-randomizer";

export function setHighOrLow() {
  let randomizedHighWins = Randomizer.randomNumber(0, 1) > 0;
  this.setState({
    highWins: randomizedHighWins
  });
}
