import React from 'react';
import '../../scss/components/_gallery.scss';

import breakfast from '../../img/galleryImages/breakfast-outside.jpg';
import bedroomone from '../../img/galleryImages/bedroom-1.jpg';
import kitchen from '../../img/galleryImages/kitchen.jpg';
import bathroom from '../../img/galleryImages/bathroom.jpg';
import customerbook from '../../img/galleryImages/customer-book.jpg';
import bedroomtwo from '../../img/galleryImages/bedroom-2.jpg';
import waffles from '../../img/galleryImages/waffles.jpg';
import backdoor from '../../img/galleryImages/cabin-backdoor.jpg';


export default function Gallery() {
    return <div className='gallery'>
        <div className='images'>
            <img src={breakfast} />
            <img src={bedroomone} />
            <img src={kitchen} />
            <img src={bathroom} />
            <img src={customerbook} />
            <img src={bedroomtwo} />
            <img src={waffles} />
            <img src={backdoor} />
        </div>
    </div>
}