import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './navigation.styles.scss';
import { UserContext } from "../../contexts/user.context";
import { SignOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  // const singOutHandler = async () => {
  //     const res = await SignOutUser();
  //     setCurrentUser(null);
  // }
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
                {
                  currentUser ? (<span className="nav-link" onClick={SignOutUser} >SIGNOUT</span>) :(

                    <Link className="nav-link" to='/signin'>
                        SIGNIN
                    </Link>
                  )
                }
               <CartIcon/>
            </div>
            {

            isCartOpen && <CartDropDown/>
            }
        </div>
        <Outlet />
      </Fragment>
    )
  };

export default Navigation;