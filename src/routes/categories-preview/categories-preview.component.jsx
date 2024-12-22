import { Fragment, useContext } from "react";
// import { ProductContext } from "../../contexts/products.context";
import { CategoriesContext } from "../../contexts/categories.context";

//import './shop.styles.scss';
import CategoryPreview from "../../components/category-preview/category-preview.component";
import './categories-preview.styles.scss';

// import SHOP_DATA from '../../shop-data.json';
const CategoriesPreview = () =>{
    const {categoriesMap} = useContext(CategoriesContext);
    return(
      <Fragment>
          {
            Object.keys(categoriesMap).map((title)=>{
                const products = categoriesMap[title];
                return(
                    <CategoryPreview key={title} title={title} products={products}/>
                );
            })
          }


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
      </Fragment>


    );
}

export default CategoriesPreview;
