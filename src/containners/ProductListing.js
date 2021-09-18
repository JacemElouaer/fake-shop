import React , {useEffect} from 'react';
import ProductComponent from './ProductComponent';
import axios from 'axios'; 
import { set_products } from  '../redux/actions/productActions' ; 
import {useSelector ,  useDispatch} from  'react-redux';

const ProductListing = () => {
    const  products =  useSelector((state)=> state);  
    const dispatch =  useDispatch(); 

    const fetchProducts  =  async ()=>{
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log("ERR" ,err)
        }); 
        console.log("this is response :  ",response.data); 
        dispatch(set_products(response.data));
    };  
    useEffect(()=>{
        fetchProducts();
    }, []);
    console.log("this is pro", products); 
    return (
        <div className="ui grid container" style={{marginTop:"200px"}}>
            <ProductComponent />
        </div>
    )
}

export default ProductListing
