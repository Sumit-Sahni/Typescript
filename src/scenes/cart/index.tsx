import  {getCartProduct, removeFromCart , getTotalPrice} from "../../store/cartSlice";
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/hooks/store.hooks"

const Cart = () => {
  const totalCartProduct  = useSelector(getCartProduct)
  const Toatl = useSelector(getTotalPrice)
  const dispatch = useAppDispatch();


  const  removeFormStores = (id:string) =>{
      dispatch(removeFromCart(id));
     }
  return (
 <>
  <div className="flex flex-col sm:flex-row">
     <div className="mt-8 sm:w-[50%] px-4">
                         <div className="flow-root ">
                          <ul role="list" className=" divide-gray-200">
                            {totalCartProduct.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                       
                                      </h3>
                                      <p className="ml-4">₹ {product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.title}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Qty   {product.amount}
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={()=> removeFormStores(product.id)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
           </div>
          </div>

          <div className="sm:w-[30%] mx-4 px-4 my-12 items-end">
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p className="font-bold">₹ {Toatl}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or - 
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
          </div>
  </div>

 </>

    
)
}

export default Cart