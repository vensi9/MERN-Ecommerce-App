import { useEffect, useState } from 'react'
import { VscError } from 'react-icons/vsc';
import CartItem from '../components/cart-item';
import { Link } from 'react-router-dom';

const cartItem = [

  {
    productId: "asasas",
    photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71an9eiBxpL._SX679_.jpg",
    name: "Macbook",
    price: 3000,
    quantity: 4,
    stock: 10,

  }

];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {

  const [couponCode, setCoupenCode] = useState<string>("");
  const [isValidcouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutID)
      setIsValidCouponCode(false)
    }
  }, [couponCode])

  return (
    <div className='cart'>
      <main>
        {cartItem.length > 0 ? (
          cartItem.map((i, idx) =>
            <CartItem key={idx} cartItem={i}
            />)
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>SubTotal: ${subtotal}</p>
        <p>Shipping Charges: ${shippingCharges}</p>
        <p>Tax: ${tax}</p>
        <p>
          Discount: <em className='red'> - ${discount}</em>
        </p>
        <p>
          <b>Total: ${total}</b>
        </p>

        <input type="text" value={couponCode}
          placeholder='Coupon Code'
          onChange={
            (e) => setCoupenCode(e.target.value)
          }
        />

        {couponCode &&
          (isValidcouponCode ? (
            <span className='green'>
              ${discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className='red'>
              Invalid Coupon <VscError />
            </span>
          ))}

        {
          cartItem.length > 0 && <Link to="/shipping"> Checkout </Link>
        }
      </aside>
    </div>
  )
}

export default Cart