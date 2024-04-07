import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving Lorem instantly',
    text: 'From Lorem, john he give of ipsum he. They age and draw lorem alike. Improving lorem instantly was household applauded.',
  },
  {
    title: 'Become the Lorem active',
    text: 'Considered sympathize lorem uncommonly occasional assistance sufficient not. Lorem of on become he ipsum active enable to.',
  },
  {
    title: 'Lorem or am nothing',
    text: 'Led ask possible lorem relation elegance eat likewise ipsum. By lorem or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy lorem county',
    text: 'Really boy loremm county she unable her ipsum. Lorem you off its like like ipsum. Among lorem are lorem built now. In built lorem in an rapid blush..',
  },
];

const Features = () => (
  <div className="lorem__features section__padding" id="features">
    <div className="lorem__features-heading">
      <h1 className="gradient__text">
        The Lorem is Now and You Just Need to Realize It. Step into Ipsum
        Today. & Make it Lorem.
      </h1>
      <p>Request Lorem Access to Get Ipsum</p>
    </div>
    <div className="lorem__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
