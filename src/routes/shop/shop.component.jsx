// import { Fragment, useContext } from "react";
// // import { ProductContext } from "../../contexts/products.context";
// import { CategoriesContext } from "../../contexts/categories.context";
// import ProductCard from "../../components/product-card/product-card.component";
 import './shop.styles.scss';
// import CategoryPreview from "../../components/category-preview/category-preview.component";


// import SHOP_DATA from '../../shop-data.json';
import {Routes,Route} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () =>{

    return(
        <Routes>
            <Route index element={<CategoriesPreview/>} />
        
            <Route path=':category' element={<Category />} />


        </Routes>
    )
    // const {categoriesMap} = useContext(CategoriesContext);
    // return(
    //   <div className="shop-container">
    //       {
    //         Object.keys(categoriesMap).map((title)=>{
    //             const products = categoriesMap[title];
    //             return(
    //                 <CategoryPreview key={title} title={title} products={products}/>
    //             );
    //         })
    //       }


          {/* <Fragment>
{
  Object.keys(categoriesMap).map((title) =>{
    return  <Fragment key={title}>
          <h2>{title}</h2>
          <div  className="products-container">
              {
                  categoriesMap[title].map((product)=>(
                      // <ProductCard key={product.id} product={product}/>
                      <CategoryPreview products={product}/>
                  ))
              }
          </div>
      </Fragment>
  })
}
</Fragment> */}
    //   </div>


    // );
}

export default Shop;
