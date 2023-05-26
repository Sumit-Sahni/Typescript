import { useAppDispatch } from "@/hooks/store.hooks"
import { getProductSelector, Product} from "@/store/products.slice"
import  {addToCart,getCartProduct, } from "../store/cartSlice";
import { useSelector } from "react-redux"
import Logo  from "../assets/Logo.png"
import useMediaQuery from "@/scenes/hooks/useMediaQuery";
import { motion } from "framer-motion";
import {Bars3Icon, XMarkIcon, ShoppingBagIcon} from  "@heroicons/react/24/solid"
import { useState } from "react";
import { Link } from "react-router-dom";



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
const flexBetween ="flex  items-center justify-between"
const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);


 
   
  return (
   <>
      <nav>
        <div className={` ${flexBetween} bg-primary-100 drop-shadow-xl fixed top-0 z-30 w-full py-6  `}>

        <div className={`${flexBetween} mx-auto w-5/6` }> 
            <div className={`${flexBetween} w-full gap-16` }>
                {/* LEFT SIDE */}
                <img src={Logo} alt="Logo"/>
                {/* RIGHT SIDE */}
                {isAboveMediumScreen ?(
                <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                      <Link to={"/"}>Home</Link>
                    </div>
                    <div>
                    <Link to={"/contact"}>
                      <ShoppingBagIcon className=" h-8 w-8 text-yellow cursor-pointer"/>
                    </Link>  
                    
                    </div>
                </div>)
                :(
                     <button
                      className=" rounded-full bg-secondary-500 p-2"
                      onClick={()=>setIsMenuToggled(!isMenuToggled)}
                     >
                     <Bars3Icon className=" h-6 w-6 text-white"/>
                     </button>
                  )}
              </div>
           </div>
        </div>
 
        {/* MOBILE MENU MODAL */}
          {!isAboveMediumScreen && isMenuToggled && (
            <motion.div 
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{duration:0.5}}
             exit={{opacity:0}}
             className="fixed right-0  bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/*Close ICON */}
                <div className="flex justify-end p-10">
                    <button  onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                     
                     <XMarkIcon className="w-6 h-6 text-gray-400" />
                    </button>
                </div>
                {/* MENU ITEMS */}
                <div className="w-full  h-[50%]">
                <div className={`ml-[33%] flex flex-col gap-6`}>
                        <h1>Home</h1>
                        <h1>About</h1>
                        <h1>Contact</h1>
                    </div>
                </div>
            </motion.div>
          )}
      </nav>

    <div className="mt-16 w-full h-auto sm:p-16  sm:px-32 flex-col sm:flex-row items-center flex sm:flex-wrap shadow-2xl ">
        {
           products.map((product, index )=>{
              return(
             <div key={index} className=" sm:w-60 md:w-96 mx-2 border my-4 flex-col flex items-center hover:shadow-lg hover:border-2   justify-around p-10">
                 <img src={product.image} className="w-80 overflow-hidden object-contain"/>
                 <div className="text-center py-2">
                     <h1 className="text-2xl font-mono text-black font-semibold">{product.title}</h1>
                 </div>
                <div className="text-center my-2 border border-slate-600 rounded-xl">
                   <button  className="rounded-md hover:rounded-xl border bg-black-500 px-10 py-2 hover:bg-black hover:text-white cursor-pointer" onClick={()=> addToCartHandler(product)}>Add To Cart</button>
                </div>
             </div>
              )
           })
        }
    </div>
   </>
    
  )
}

export default ProductList