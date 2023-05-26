import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Product {
    title:string,
    price:number,
    id:string
    image:string,
}
const initialProducts : Product[] = [
    {title:"Gold Standard", image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", price:1000, id: "eft",},
    {title:"Performance Whey", image:"https://images-static.nykaa.com/media/catalog/product/c/1/c1ae303748927066012_1.jpg?tr=w-500,pr-true", price:899, id: "efdc",},
    {title:"Muscle Blaze",image:"https://img6.hkrtcdn.com/12135/prd_1213415-MuscleBlaze-Raw-Whey-Protein-4.4-lb-Unflavoured_c_l.jpg", price:879, id: "dfds",},
    {title:"Escape Dog", price:499,image:"https://cdn.shopify.com/s/files/1/0038/0656/0365/products/WHEYPROTEIN1_2c9b2284-556a-46e0-a3ee-4a7d8d3f0494.jpg?v=1679305410", id: "sdf",},
    {title:"Nutrilite Whey",image:"https://media.amway.in/sys-master/images/h99/h8f/9125736153118/EIA.w375.h375.308449ID_1.png", price:1999, id: "weq",},
    {title:"Pro Whey Protine", price:30,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUSPltzznNRgvg-u3ZimWiq8tXwG6eN49PnQ&usqp=CAU", id: "jvn",},
    {title:"My Protine", image:"https://static.thcdn.com/productimg/300/300/11654647-1954934880530787.jpg", price:9000, id: "opo",},
    {title:"Clear Whey Protine",image:"https://static.thcdn.com/images/large/original//productimg/1600/1600/12457911-2014790136736620.jpg", price:2500, id: "cbh",},
    {title:"Pro Biotics", price:2800,image:"https://drinkprotein2o.com/wp-content/uploads/2022/01/powder-menu-image.png", id: "euiuj",},
    {title:"Raw Whey Protine", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbEyBSV6YML2oW_a7_X7fCSXYNUtc3ChkXA&usqp=CAU", price:800, id: "sdfts",},
    {title:"OZIVA",image:"https://seniority.in/media/catalog/product/cache/242b55c74bcaf9102cfc5599e255893a/p/a/paphm01ch01_1__2.jpg", price:8990, id: "effsdt",},
    {title:"Designer Whey Protine", price:799,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZUYJlDVTDrMwVFStOH_nqB38RlgcOpPvLF7WKGs-0Dmh4Ul9DuRKuw1-c8vW4wuqxrA&usqp=CAU", id: "easdsft",},

]

const productSlice = createSlice({
    name:'products',
    initialState:initialProducts,
    reducers:{
         addProduct: (state, action:PayloadAction<Product>)=>{
             state.push(action.payload);
         },
         removeProduct:(state, action:PayloadAction<string>)=> state.filter(product => product.id !== action.payload)
    }

})


export const  {addProduct, removeProduct} = productSlice.actions;
export const getProductSelector = (state:RootState) => state.products;
export default productSlice.reducer;