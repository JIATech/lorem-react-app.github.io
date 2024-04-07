import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatLorem.css';

const WhatLorem = () => (
  <div className="lorem__whatlorem section__margin" id="wlorem">
    <div className="lorem__whatlorem-feature">
      <Feature
        title="What is Lorem"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
    <div className="lorem__whatlorem-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your Lorem
      </h1>
      <p>Explore the Lorem</p>
    </div>
    <div className="lorem__whatlorem-container">
      <Feature title="Ipsums" text="We so lorem ipsum me message as dolor." />
      <Feature
        title="Dolors"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Feature
        title="Lorems"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  </div>
);

export default WhatLorem;
