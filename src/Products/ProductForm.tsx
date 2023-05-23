import React, {useState} from "react"
import {Product, addProduct}  from "../store/products.slice";
import {useAppDispatch } from "@/hooks/store.hooks";


const ProductForm: React.FC = () => {


  const dispatch = useAppDispatch();

  const [product ,setProduct] = useState<Product>({
     id: "",
     title:"",
     price:0
  })
  const {title, price, id} = product;

  const handleChange = ({ target:{name, value}}: React.ChangeEvent<HTMLInputElement>) => setProduct( prev =>{
     (prev as any )[name] = value;
     const newVlaue =  {...prev};
     return newVlaue;
  })

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault()
    dispatch(addProduct(product));
    setProduct({
      id:"",
      title:"",
      price:0
    })

  }

  return (
    <div className="w-4/6 mx-auto p-6">
        <h1>Add Game To The Store</h1>
        <form onSubmit={handleSubmit}>
            <input className="border mx-2" type="text" placeholder="Game Title" name="title" onChange={handleChange} value={title}/>
            <input className="border mx-2" type="text" placeholder="Price" name="price" onChange={handleChange} value={price}/>
            <input className="border mx-2" type="text" placeholder="Id" name="id" onChange={handleChange} value={id}/>
            <button className="mt-8 px-2 py-4 border-green-500 border rounded-xl mx-4 hover:bg-slate-900 hover:text-white">Submit</button>
        </form>
    </div>
  )
}

export default ProductForm