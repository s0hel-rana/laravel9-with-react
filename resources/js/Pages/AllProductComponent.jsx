import React from "react";
import ProductComponent from "./ProductComponent";

export default function AllProductComponent(){
    const product = {
        Name:"First Product",
        Price: 3000,
        Stock: "inStock"
    }
    return(
        <>
            <ProductComponent product = {product}></ProductComponent>
        </>
    )
}
