import React, {useState, useEffect} from "react";
import "./pList.css";
import Cart from "./Cart";

function ProductList() {

    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('Product.json')
            .then(function(response){
                return response.json();
            })
            .then(function(myJson) {
                setData(myJson)
            });
    }
    useEffect(()=>{
        getData()
    },[])

    function AddToCard(item) {
            <Cart data={item}/>
       }
    return(
        <>
            {
                data && data.length>0 && data.map((item)=>
                        <div key={item.id} className="Product-img">
                            <img src={item.image===null?"https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg":item.image} />
                            <p>{item.name}</p>
                            <button key={item.id} onClick={((()=>{
                                {AddToCard(item)}
                            }))}>Add to cart</button>
                        </div>
                )}
        </>
     )
}

export  default ProductList;



