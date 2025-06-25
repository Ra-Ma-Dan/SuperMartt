import React, { createContext, useState, useContext } from 'react'


const cartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    // const [cartItemsCount, setCartItemsCount] = useState(0)
    // const [allCartItemsCount, setAllCartItemsCount] = useState(0)

    const addToCart = (product) => {
        setCartItems(prev => {
            const exist = prev.find(item => item.id === product.id)
            if (exist){
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1} : item)
            } else {
                return [...prev, {...product, quantity: 1}]
            }
        })
    }
    
    
    const removeItem = (id) =>{
        setCartItems(prev => prev.filter(item => item.id !== id))
        
    }

    const increaseQuantity = (id) =>{
        setCartItems(prev => prev
            .map(item => item.id == id ? {...item, quantity: item.quantity + 1} : item))
    }

    const deccreaseQuantity = (id) =>{
        setCartItems(prev => prev
            .map(item => item.id == id ? {...item, quantity: item.quantity - 1} : item)
            .filter(item => item.quantity > 0))
    }

    const clearCart = () =>{
        setCartItems([])
    }
    
    const cartItemsCount = cartItems.length
    const allCartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    
    //console.log(`All counts: ${allCartItemsCount}`);
    //console.log(`Counts: ${cartItemsCount}`);
    
    

    const value = {
        removeItem,
        increaseQuantity,
        clearCart,
        addToCart,
        cartItems,
        cartItemsCount,
        allCartItemsCount,
        deccreaseQuantity
    }

  return (
    <cartContext.Provider value={value}>
        {children}
    </cartContext.Provider>
  )
}


export const useCart = () => useContext(cartContext)
