import React from 'react';

import portrait from '.././assets/img/JasonWood.png';

function Content() {
  return (
    <div className="content">
      <img src={portrait} alt="portrait" />
      <div className="content__about">
        <div className="content__about-title">ABOUT ME</div>
        <div className="content__about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <br></br>{' '}
          <p>
            Duis aute irure dolor in reprehenderit in voluptatevelit velit esse cillum dolore eu
            fugiat nulla pariatur.
          </p>
        </div>
        <div className="content__about-footer">Jason Wood</div>
      </div>
    </div>
  );
}

export default Content;
