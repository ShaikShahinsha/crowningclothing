import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss';
// import SHOP_DATA from '../../shop-data.json';
const Shop = () =>{
    const {products} = useContext(ProductContext);
    return(
        <div className="products-container">
            {products.map((product)=>
            (
                
                // <div key={id}>
                //     <h1>{name}</h1>
                // </div>
                <ProductCard key={product.id} product={product} />
            
        ))}
        </div>
    );
}

export default Shop;
