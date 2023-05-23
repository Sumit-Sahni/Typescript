
import  { removeFromCart, getCartProduct, getTotalPrice } from "../store/cartSlice";
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/hooks/store.hooks"



const CartList = () => {
 const dispatch = useAppDispatch();
 const totalCartProduct  = useSelector(getCartProduct)
 const  totalCartPrice  = useSelector(getTotalPrice)
 const  removeFormStores = (id:string) =>{
  dispatch(removeFromCart(id));
 }
  return (
    <div>
      <span>{totalCartPrice}</span>
        {
            totalCartProduct.map((item, index)=>{
                 return(
                    <div key={index}>
                        <span>{item.title} - </span>
                        <span>{item.amount}- </span>
                        <span>{item.id}</span>
                        <button className="border-red-500 mt-8 px-2 py-4 border rounded-xl mx-4 hover:bg-red-500 hover:text-white" onClick={()=> removeFormStores(item.id)}>Remove Form Cart</button>
                    </div>
                 )
            })
        }
    </div>
  )
}

export default CartList