import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="lorem__header section__padding" id="home">
    <div className="lorem__header-content">
      <h1 className="gradient__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit!
      </h1>
      <p>
        Donec consectetur, odio eget porta faucibus, nunc libero ultricies nunc, nec
        lacinia turpis ex sit amet mi. Nam nec justo sit amet dolor lacinia
        tincidunt. Sed auctor, nunc nec ultricies ultricies, nunc libero
        ultricies nunc, nec lacinia turpis ex sit amet mi. Nam nec justo sit amet
      </p>

      <div className="lorem__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Lorem</button>
      </div>

      <div className="lorem__header-content__people">
        <img src={people} alt='' />
        <p>1,600 people do not understand what I wrote above this...
        </p>
      </div>
    </div>

    <div className="lorem__header-image">
      <img src={ai} alt='' />
    </div>
  </div>
);

export default Header;
