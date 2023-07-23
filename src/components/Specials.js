import React from 'react';
import Button from './Button';

const Specials = ({specials}) => {
  return (
    <section className="specials container">
			<div className="specials-header">
				<h2 className="display-title">This week's specials</h2>
				<button className="primary-button banner-button">Online menu</button>
			</div>
			<div className="specials-content">
				{specials.map(item => (
					<div className="specials-box" key={item.name}>
						<img src={item.img} className="specials-img" alt={item.name}/>
						<div className="specials-box-container">
							<div className="specials-title">
								<h4 className="specials-title">{item.name}</h4>
								<p className="specials-price">$ {item.price}</p>
							</div>
							<p className='specials-description'>
								{item.description}
							</p>
							<Button btnClass='specials-button'>Order a delivery</Button>
						</div>
					</div>
				))}
			</div>
		</section>
  )
}

export default Specials;