import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { Container, Row } from 'reactstrap';

type CountdownProps = {
  countdownTo: DateTime,
  title: string
};

const Countdown = ({ countdownTo, title }: CountdownProps) => {
  
  const [countdownDate] = useState(countdownTo);
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const tick = setInterval(() => updateCountdown(), 1000); 
    return () => clearInterval(tick) 
  }, []);

  const updateCountdown = () => {
    if (countdownDate) {
      // Get the current time
      const currentTime = DateTime.utc();
  
      // Get the time remaining until the countdown date
      const distanceToDate = countdownDate.diff(currentTime, ['days', 'hours', 'minutes', 'seconds']);
  
      // Set the state to each new time
      setState({ days: distanceToDate.days, hours: distanceToDate.hours, minutes: distanceToDate.minutes, seconds: Math.floor(distanceToDate.seconds) });
    }
  }

  return (
    <div>
      <Container>
        <Row className='justify-content-center'>
          <div className='title'>
            <h3>{title}</h3>
          </div>
        </Row>
        <Row className='justify-content-center'>
          <div>
            {state.days}d {state.hours}h {state.minutes}m {state.seconds}s
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Countdown;