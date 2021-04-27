import React from "react";
import Countdown from "./shared/countdown";
import * as countdownHelper from "../helpers/countdown-helper";

function DivisionRivals() {
  return (
    <div>
      <Countdown 
        countdownTo={countdownHelper.getNextDivisionRivalsDate()}
        title='Division Rivals Weekly Reward'
      />
    </div>
  )
}

export default DivisionRivals;