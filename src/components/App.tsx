import Countdown from './countdown';
import Header from './layout/header';
import Footer from './layout/footer';
import { Row } from 'reactstrap';
import * as countdownHelper from '../helpers/countdown-helper';

function App() {
  return (
    <div className="app">
        <div className="main-content">
          <Header
            brandText='FUT Countdowns'
          />
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
          <br />
          <Footer />
        </div>
    </div>
  );
}

export default App;
