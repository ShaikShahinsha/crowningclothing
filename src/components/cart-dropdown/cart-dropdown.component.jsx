
import { useContext } from 'react';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.jsx';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

import { CartDropDownContainer,CartItems,EmptyMessage } from './cart-dropdown.styles.jsx';
const CartDropDown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    
    const gotoCheckoutHandler = () =>{
        navigate('/checkout');
    }
    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)):(<EmptyMessage>Your Cart Empty</EmptyMessage>)}
            </CartItems>
            <Button onClick={gotoCheckoutHandler}>Go To CheckOut</Button>
        </CartDropDownContainer>
    )
}

export default CartDropDown;