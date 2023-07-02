import React from 'react';
import Button from './Button';

const Specials = ({specials}) => {
  return (
    <div clas="specials">
        <div class="container">
        <div class="specials-header">
          <h2>This week's specals</h2>
          <button class="primary-button banner-button">Online menu</button>
        </div>
        <div class="specials-content">
					{specials.map(item => (
						<div class="specials-box">
            <img src={item.img} class="specials-img" alt={item.name}/>
            <div class="specials-box-container">
              <div class="specials-title">
                <h4 class="specials-title">{item.name}</h4>
                <p class="specials-price">$ {item.price}</p>
              </div>
              <p class='specials-description'>
                {item.description}
              </p>
              <Button btnClass='specials-button'>Order a delivery</Button>
            </div>
          </div>
					))}
        </div>
        </div>
      </div>
  )
}

export default Specials;