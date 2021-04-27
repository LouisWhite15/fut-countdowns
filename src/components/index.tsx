import React from "react";
import { Container, Row } from "reactstrap";
import Countdown from "./shared/countdown";
import * as countdownHelper from "../helpers/countdown-helper";

function Index() {
  return (
    <div>
      <Container>
        <Row className='justify-content-center'>
          <h3>Team of the Season Countdowns</h3>
        </Row>
        <Row className='justify-content-center'>
          <p>NOTE: Dates are speculative and based on previous years TOTS</p>
        </Row>
        <br />
        <Countdown 
          countdownTo={countdownHelper.getCommunityDate()} 
          title='Community + EFL' />
        <br />
        <Countdown 
          countdownTo={countdownHelper.getPremierLeagueDate()} 
          title='PL + Saudi' />
        <br />
        <Countdown 
          countdownTo={countdownHelper.getLaLigaDate()} 
          title='La Liga + Super Lig' />
        <br />
        <Countdown 
          countdownTo={countdownHelper.getBundesDate()} 
          title='Bundes + Liga NOS' />
        <br />
        <Countdown 
          countdownTo={countdownHelper.getSerieADate()} 
          title='Serie A + Eredivisie &amp; CSL' />
        <br />
        <Countdown 
          countdownTo={countdownHelper.getLigueOneDate()} 
          title='Ligue One + MLS &amp; LATAM' />
        <br />
        <Countdown 
          countdownTo={countdownHelper.getUltimateDate()} 
          title='Ultimate + ROW' />
      </Container>
    </div>
  )
}

export default Index;