import React from 'react'
import { useCart } from '../context/cart_context'

function CartCard({ item }) {
    const { deccreaseQuantity, increaseQuantity} = useCart()

    let eachItemTotal = Math.round(Number(item.price * item.quantity) * 100) / 100
    //let overallTotalPrice = d
  return (
    <div className='flex gap-4 lg:gap-8 bg-gray-200'>
        <div className='max-w-[40%] bg-blue-300 py-2 flex flex-col justify-between items-center 2xl:py-3'>
            <div><img className='w-36 sm:w-[100%] xl:w-[70%]' src={ item.images[0] } alt="Product's Image" /></div>
            <p className='text-center'>${ item.price }</p>
        </div>
        <div className='flex-1 flex flex-col justify-between items-center p-2
        text-center bg-red-200'>
            <div className='flex flex-col gap-5'>
                <h1 className='font-bold text-2xl'>{ item.title }</h1>
                <div className='flex gap-10'>
                    <span>Quantity: { item.quantity }</span>
                    <span>Total price: ${ eachItemTotal }</span>
                </div>
            </div>
            <div className='flex gap-10'>
                <button onClick={ () => increaseQuantity(item.id) } className='cursor-pointer hover:bg-gray-400 bg-gray-300 py-5 transition-all ease-linear delay-75 px-6 text-4xl font-bold'>+</button>
                <button onClick={ () => deccreaseQuantity(item.id) } className='cursor-pointer hover:bg-gray-400 bg-gray-300 py-5 transition-all ease-linear delay-75 px-8 text-4xl font-bold'>-</button>
            </div>
        </div>

    </div>
  )
}

export default CartCard
