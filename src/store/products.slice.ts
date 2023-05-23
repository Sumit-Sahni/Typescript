import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Product {
    title:string,
    price:number,
    id:string
}
const initialProducts : Product[] = [
    {title:"Call Of Duty MWF", price:10, id: "eft",},
    {title:"BattleFiels Ground", price:20, id: "efft",},
    {title:"Escape Dog", price:30, id: "easft",},
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