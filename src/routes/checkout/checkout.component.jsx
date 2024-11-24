import { useContext } from 'react';
import './checkout.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


const CheckOut = () =>{
    const {cartItems,cartCount,addItemtoCart,removeItemFromCart} = useContext(CartContext);

    return (
            <div className='checkout-container'>
                <h2>List of Cart Items YOu Shopped!!!</h2>
                <div className='checkout-header'>
                        <div className='header-block'>
                            <span>Product</span>
                        </div>
                        <div className='header-block'>
                            <span>Description</span>
                        </div>
                        <div className='header-block'>
                            <span>Quantity</span>
                        </div>
                        <div className='header-block'>
                            <span>Price</span>
                        </div>
                        <div className='header-block'>
                            <span>Remove</span>
                        </div>

                </div>
              

         
            {cartItems.map((cartItem)=>{
                    // const {id, name, quantity,price} = cartItem;
                //    return <div key={id}>
                        {/* <img src={cartItem.imageUrl}/> */}
                        {/* <h2>{name}</h2>
                        <span>{price}*</span>
                        <span>{quantity}   </span>
                        <span onClick={()=>removeItemFromCart(cartItem)}>drc  </span>
                        <span onClick={() =>addItemtoCart(cartItem)}>inc  </span> */}
                    // </div>
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                }
                  )}
                <span className='total'>Total</span>
               
            </div>
    )
};

export default CheckOut;