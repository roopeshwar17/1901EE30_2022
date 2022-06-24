import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img className='checkout__ad' src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fg-ec2.images-amazon.com%2Fimages%2FG%2F01%2Fdigital%2Fvideo%2Fmerch%2Fsubs%2Fbenefit-id%2Fs-z%2FshowtimeSub%2Fheroes%2Fasin2016%2Fweb_3p-hero-banner_post-signup_BillionsS1_000x600._V299000466_UR1500%2C300_FMJPG_.jpg&f=1&nofb=1" alt=""/>
            <div>
              <h3>Hello, {user?.email}</h3>
                <h2 className='checkout__title'>Your Shopping Basket:</h2>

                {basket.map(item => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout