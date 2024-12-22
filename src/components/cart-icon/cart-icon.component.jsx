
import { useContext } from 'react';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.jsx';
import { CartContext } from '../../contexts/cart.context';
import { ShoppingIcons,ItemCount,CartIconContainer } from './cart-icon.styles.jsx';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen,cartCount} = useContext(CartContext);

    const toggleCartOpen=()=>setIsCartOpen(!isCartOpen);
    return(
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon  ShoppingIcons/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;