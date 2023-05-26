import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Product {
    title:string,
    price:number,
    id:string
    image:string,
}
const initialProducts : Product[] = [
    {title:"Call Of Duty MWF", image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", price:10, id: "eft",},
    {title:"BattleFiels Ground",image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", price:20, id: "efft",},
    {title:"Escape Dog", price:30,image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", id: "easft",},
    {title:"Call Of Duty MWF", image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", price:10, id: "eft",},
    {title:"BattleFiels Ground",image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", price:20, id: "efft",},
    {title:"Escape Dog", price:30,image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", id: "easft",},
    {title:"Call Of Duty MWF", image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", price:10, id: "eft",},
    {title:"BattleFiels Ground",image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", price:20, id: "efft",},
    {title:"Escape Dog", price:30,image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", id: "easft",},
    {title:"Call Of Duty MWF", image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", price:10, id: "eft",},
    {title:"BattleFiels Ground",image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", price:20, id: "efft",},
    {title:"Escape Dog", price:30,image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", id: "easft",},
    {title:"Call Of Duty MWF", image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", price:10, id: "eft",},
    {title:"BattleFiels Ground",image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", price:20, id: "efft",},
    {title:"Escape Dog", price:30,image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", id: "easft",},
    {title:"Call Of Duty MWF", image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", price:10, id: "eft",},
    {title:"BattleFiels Ground",image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", price:20, id: "efft",},
    {title:"Escape Dog", price:30,image:"https://images-static.nykaa.com/media/catalog/product/8/e/8ecf994748927056365_1.jpg", id: "easft",},
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