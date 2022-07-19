import React, { createContext, useReducer } from 'react';
import ProductsReducer, { productsInitialState } from '../reducer/ProductsReducer.reducer';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products, dispatchProducts] = useReducer(ProductsReducer,productsInitialState);

    return (
        <ProductsContext.Provider value={ { products, dispatchProducts } }>
            {props.children }
        </ProductsContext.Provider>
    );
}; 

export default ProductsContextProvider;