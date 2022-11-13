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
            <img src={breakfast} alt='Breakfast on table outside log cabin' />
            <img src={bedroomone} alt='View of bedroom from beside master bed' />
            <img src={kitchen} alt='view of kitchen cooking space (sink, stove, fridge, microwave, cabnets)' />
            <img src={bathroom} alt='View of bathroom toilet, sink and shower' />
            <img src={customerbook} alt='Review left by customer in a book for reviews' />
            <img src={bedroomtwo} alt='View of rustic bedroom from footer of master bed' />
            <img src={waffles} alt='Tasty breakfast waffles and berries' />
            <img src={backdoor} alt='Outside view of cabin looking towards the back door' />

        </div>
    </div>
}