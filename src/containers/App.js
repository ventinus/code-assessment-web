import React from 'react'

import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

import {
  PrimaryButton,
  SecondaryButton,
  SecondaryAltButton,
  DecButton,
  IncButton,
  Link
} from '../components'

import '../scss/global.css'

const App = () => {

  return (
    <div style={{backgroundColor: 'white'}}>
      <h2>Shopping Cart Example</h2>
      <div>
        <DecButton onClick={() => console.log('second')} text="Increment" />
        <IncButton onClick={() => console.log('second')} text="Decrement" />
        <PrimaryButton onClick={() => console.log('first')} disabled>Add to Cart</PrimaryButton>
      </div>
      <Link href="/">go here</Link>
      <p className="type--a1">Lorem ipsum dolor sit amet.</p>
      <p className="type--a2">Lorem ipsum dolor sit amet.</p>
      <p className="type--a3">Lorem ipsum dolor sit amet.</p>
      <p className="type--a4">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quo dignissimos possimus ex magni! Vero, perferendis ullam quos consequatur. Beatae nobis aperiam amet fugit quia vel minus iure corrupti totam.</p>
      <p className="type--a5">Lorem ipsum dolor sit amet.</p>
      <p className="type--a6">Lorem ipsum dolor sit amet.</p>
      <p className="type--a7">Lorem ipsum dolor sit amet.</p>
      <p className="type--a8">Lorem ipsum dolor sit amet.</p>
      <p className="type--a9">Lorem ipsum dolor sit amet.</p>
      <hr/>
      <ProductsContainer />
      <hr/>
      <CartContainer />
    </div>
  )
}

export default App
