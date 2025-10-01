import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext=createContext(null)

export const CartProvider=({children})=>{
     const [cartItem, setCartItem] = useState(() => {
    const stored = localStorage.getItem("cartItem");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);
    const addToCart=(product)=>{
        const itemInCart=cartItem.find((item)=>item.id==product.id)
        if(itemInCart){
             const updatedCart = cartItem.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItem(updatedCart)
            toast.success("Product quanity increased!")
        }
        else{
        setCartItem([...cartItem, { ...product, quantity: 1 }])        
        toast.success("Added to Cart!")
        }
    }
    const updateQuantity=(productId,action)=>{
        setCartItem(cartItem.map(item=>{
            if(item.id==productId){
                let newUnit=item.quantity
                if(action==="Increase"){
                    newUnit=newUnit+1                    
                    toast.success("Product quanity increased!")
                }
                else{
                    newUnit=newUnit-1
                    toast.success("Product quanity decreased!")
                }
                return newUnit>0?{...item,quantity:newUnit}:null
            }
            return item
        }).filter((item)=>item!=null))
    }
    const deleteItem=(productId)=>{
        setCartItem(cartItem.filter((item)=>item.id!=productId))
        toast.success("Deleted from cart!")
    }
    return <CartContext.Provider value={{cartItem,setCartItem ,addToCart,updateQuantity,deleteItem}}>
        {children}
    </CartContext.Provider>
}   
export const useCart=()=>useContext(CartContext)