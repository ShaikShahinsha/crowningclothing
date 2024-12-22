import { createContext, useEffect, useState } from "react";

//import SHOP_DATA from '../shop-data.js';
import { addCollectionAndDocuments, getCategoriesandDocuments } from "../utils/firebase.utils.js";


export const CategoriesContext = createContext({
    categoriesMap:{}
});

export const CategoriesProvider = ({children}) =>{

    const [categoriesMap,setCategoriesMap] = useState({});

    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA);
    // },[]);
    useEffect(()=>{
        const getCategoriesMap = async()=>{
            const categoryMap = await getCategoriesandDocuments();
            // console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }   
        getCategoriesMap();
    },[])
    const value  = {categoriesMap,setCategoriesMap};

    return  <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}