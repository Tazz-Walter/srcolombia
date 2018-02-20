import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';


export default class HomePage extends React.Component {
    
    render() {
        return (
            <div className="wrapper">
                <Carousel 
                showArrows={true} 
                showStatus={false} 
                thumbWidth={80}
                autoPlay={true}
                infiniteLoop={true}>
                    <div>
                        <img src="./images/logo2.jpg" alt="" />
                        <p className="legend">logo2</p>
                    </div>
                    <div>
                        <img src="./images/logo.jpg" />
                        <p className="legend">logo</p>
                    </div>
                </Carousel>
            </div>
        );
    }
};
