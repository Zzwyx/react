
require("./header.css");
require('../lib/swiper.min.css');
let Swiper = require('../lib/swiper.min.js');
let jsonp = require('../util/jsonp.js');

import React from 'react';     

let Header = React.createClass({
	componentDidMount: function() {
		new Swiper ('#header .swiper-container', {
		    loop: true,
		    pagination: '.swiper-pagination',
		    paginationClickable: true,
		    autoplay : 3000,
			autoplayDisableOnInteraction : true,		    
		});
	},

	render: function () {
		let countId = 0;
	    return (
	      <div id="header">
    		<div className="swiper-container">
			    <div className="swiper-wrapper">
			    	<div className="swiper-slide">
						<img className="img" src={require('../images/1.jpg')} />
				   </div>
				   <div className="swiper-slide">
						<img className="img" src={require('../images/1.jpg')} />
				   </div>
				   <div className="swiper-slide">
						<img className="img" src={require('../images/1.jpg')} />
				   </div>
			    </div>
				<div className="swiper-pagination"></div>
			</div>
	      </div>
	    );
	  }
})

module.exports = Header;

