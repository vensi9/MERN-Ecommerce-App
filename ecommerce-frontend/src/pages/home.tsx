import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/product-card'

const Home = () => {

  const addToCartHandler = () => {

  }

  return (
    <div className='home'>
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className='findmore'>
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId='qwerty'
          name='Macbook'
          price={4545}
          stock={21}
          handler={addToCartHandler}
          photo='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71an9eiBxpL._SX679_.jpg'
        />
      </main>
    </div>
  )
}

export default Home