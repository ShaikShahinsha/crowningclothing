import { createContext, useState , useEffect} from "react";


const addCartItem = (cartItems,productToAdd)=>{
    
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(existingCartItem){
        return cartItems.map((cartItem)=> cartItem.id === productToAdd.id ? {...cartItem,quantity:cartItem.quantity +1 } :cartItem);
    }

    return [...cartItems, {...productToAdd,quantity:1}];
}

const removeCartItem = (cartItems,prodcutToRemove)=>{
    const existingCartItem =cartItems.find((cartItem) => cartItem.id === prodcutToRemove.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== prodcutToRemove.id);
    }

    return cartItems.map((cartItem)=> cartItem.id === prodcutToRemove.id ?{...cartItem,quantity:cartItem.quantity-1} : cartItem);
}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemtoCart : () =>{},
    removeItemFromCart : ()=>{},
    cartCount: 0
});


export const CartProvider =({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const [cartCount, setCartCount] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0);
        setCartCount(newCartCount);

    },[cartItems]);


    const addItemtoCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    }

    const removeItemFromCart = (prodcutToRemove) =>{
        setCartItems(removeCartItem(cartItems,prodcutToRemove));
    }

    const value = {isCartOpen,setIsCartOpen,addItemtoCart,cartItems,cartCount,removeItemFromCart};

  
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}
