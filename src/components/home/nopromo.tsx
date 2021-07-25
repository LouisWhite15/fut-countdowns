import React from 'react';
import { Link } from 'react-router-dom';

const NoPromo: React.FC = () => {
  return (
    <div className='no-promo'>
      <p>No promos announced.</p>
      <p>Navigate to the <Link to='/division-rivals'>Division Rivals</Link> tab to view the weekly Divison Rivals countdown.</p>  
    </div>
  );
}

export default NoPromo;