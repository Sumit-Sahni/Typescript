import { useAppDispatch } from "@/hooks/store.hooks"
import { getProductSelector, Product} from "@/store/products.slice"
import  {addToCart,getCartProduct} from "../store/cartSlice";
import { useSelector } from "react-redux"





const ProductList: React.FC = () => {
const dispatch = useAppDispatch();
 const products  = useSelector(getProductSelector)
 const totalCartProduct  = useSelector(getCartProduct)
//  console.log(products)
 console.log("From cart", totalCartProduct)

 const addToCartHandler= (product:Product) =>{
  console.log(product)
  dispatch(addToCart(product));
 }
//  const  removeFormStores = (id:string) =>{
//   dispatch(removeFromCart(id));
//  }
 
  return (
    <div>
        <label>Game List</label>
        {
           products.map((product, index )=>{
              return(
             
             <div key={index}>
                <span>{`${product.title} --- ${product.price}`}</span>
                 <h1 className="text-blue-500">{product.id}</h1>
                <button className="border-red-500 mt-8 px-2 py-4 border rounded-xl mx-4 hover:bg-red-500 hover:text-white" onClick={()=> addToCartHandler(product)}>Add To Cart</button>
                {/* <button onClick={()=> removeFormStore(product.id)} className="border-red-500 mt-8 px-2 py-4 border rounded-xl mx-4 hover:bg-red-500 hover:text-white">RemoveFormStore</button> */}
            </div>
              )
           })
        }
    </div>
  )
}

export default ProductList