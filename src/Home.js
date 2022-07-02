import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'/>
              

            <div className='home__row'>
              <Product 
                id='90829332'
                title='Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones' 
                price={515} 
                image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.h_5pW0_HUUJX1LFbKz0vPgHaJK%26pid%3DApi&f=1'
                rating={5}
              />
              <Product
                id='90995943'
                title='Fitness Tracker with Heart Rate Monitor, Fitpolo Smart Watch 1.3 inches Color Touch Screen IP68 Waterproof Step Calorie Counter Sleep Monitoring Pedometer Watches Activity Tracker for Women Men Kids'
                price={6031}
                image='https://m.media-amazon.com/images/I/61h8lcXTyeL._AC_UY327_FMwebp_QL65_.jpg'
                rating={4}
                />
          
              
            </div>

            <div className='home__row'>
              <Product
                id='59403483'
                title='OnePlus Nord N200 | 5G Unlocked Android Smartphone U.S Version | 6.49" Full HD+LCD Screen | Large 5000mAh Battery | 64GB Storage | Triple Camera,Blue Quantum'
                price={27999}
                image='https://m.media-amazon.com/images/I/71DCZOdq92S._AC_SX522_.jpg'
                rating={4}
                />
              <Product
                id='8554909'
                title='2019 Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Space Gray'
                price={125990}
                image='https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg'
                rating={5}
              />
              <Product
                id='73257847'
                title="Nike Men's Gymnastic Shoes"
                price={5795}
                image='https://m.media-amazon.com/images/I/41xSzlPiR-L._AC_UL480_FMwebp_QL65_.jpg'
                rating={5}
              />

            </div>

            <div className='home__row'>
              <Product
                id='4657487'
                title='VIZIO 50-Inch M-Series 4K QLED HDR Smart TV w/Voice Remote, Dolby Vision HDR10+, Alexa Compatibility, M50Q7-J01, 2021 Model'
                price={49559}
                image='https://images-na.ssl-images-amazon.com/images/I/81R88pMeyJL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
                rating={5}
              />
            </div>

        </div>
    </div>
    
  )
}

export default Home