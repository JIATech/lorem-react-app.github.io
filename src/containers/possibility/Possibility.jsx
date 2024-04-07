import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="lorem__possibility section__padding" id="possibility">
    <div className="lorem__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="lorem__possibility-content">
      <h4>Request Early Lorem to Get Ipsum</h4>
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your Lorem
      </h1>
      <p>
        Yet lorem any ipsum assistance indulgence unpleasing. Not
        thoughts all lorem blessing. Indulgence way everything. Party we lorem to order allow ipsum of.
      </p>
      <h4>Request Early Lorem to Get Ipsum</h4>
    </div>
  </div>
);

export default Possibility;
