import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";
//import './navigation.styles.jsx';
import { UserContext } from "../../contexts/user.context";
import { SignOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { NavigationContainer,NavLinks,NavLink,LogoContainer } from "./navigation.styles";
const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  // const singOutHandler = async () => {
  //     const res = await SignOutUser();
  //     setCurrentUser(null);
  // }
    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className="logo" />
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {
                  currentUser ? (<NavLink as="span" onClick={SignOutUser} >SIGNOUT</NavLink>) :(

                    <NavLink to='/signin'>
                        SIGNIN
                    </NavLink>
                  )
                }
               <CartIcon/>
            </NavLinks>
            {

            isCartOpen && <CartDropDown/>
            }
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  };

export default Navigation;