import Countdown from './countdown';
import Header from './layout/header';
import Footer from './layout/footer';
import { getTeamOfTheSeasonReleaseDate } from '../helpers/countdown-helper';

function App() {
  return (
    <div className="app">
      
        <div className="main-content">
          <Header
            brandText='FUT Countdowns'
          />
          <Countdown 
            countdownTo={getTeamOfTheSeasonReleaseDate()} 
            title='Team of the Season' />
          <Footer />
        </div>
    </div>
  );
}

export default App;
