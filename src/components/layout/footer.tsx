import React from "react";

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {

  return (
    <footer className='footer'>
      <div>
        <p>&copy; Copyright Louis White 2021</p>
        <p>If there is a new promo you would like to see added, raise an issue on GitHub <a href='https://github.com/LouisWhite15/fut-countdowns' rel='noreferrer'>here</a></p>
      </div>
    </footer>
  )
}

export default Footer;