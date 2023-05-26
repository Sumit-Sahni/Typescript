import { useState } from "react"
import { motion } from "framer-motion"
import {Bars3Icon, XMarkIcon} from  "@heroicons/react/24/solid"
import Logo  from "../../assets/Logo.png"
// import Link from "./Link"
import { Link } from 'react-router-dom';
import { SelectedPage } from "@/scenes/shared/types";
import ActionButton from "../shared/ActionButton";
import useMediaQuery from "../hooks/useMediaQuery";

type Props = {

    isTopOfPage:boolean;
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage) => void;

}

const Navbar = ({isTopOfPage,selectedPage, setSelectedPage,}: Props) => {

    const flexBetween ="flex  items-center justify-between"
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow-xl"
  return (

      <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 `}>

        <div className={`${flexBetween} mx-auto w-5/6` }> 
            <div className={`${flexBetween} w-full gap-16` }>
                {/* LEFT SIDE */}
                <img src={Logo} alt="Logo"/>
                {/* RIGHT SIDE */}
                {isAboveMediumScreen ?(
                <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <h1>Home</h1>
                        <h1>About</h1>
                        <h1>Contact</h1>
                         <Link to="/products" className=" animate-pulse">Go to Products</Link>
                    </div>
                    <div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div>
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
                    <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                     <XMarkIcon className="w-6 h-6 text-gray-400" />
                    </button>
                </div>
                {/* MENU ITEMS */}
                <div className="w-full  h-[50%]">
                <div className={`ml-[33%] flex flex-col gap-6`}>
                        <h1>Home</h1>
                        <h1>About</h1>
                        <h1>Contact</h1>
                        <Link to="/products">Go to Products</Link>
                    </div>
                </div>
            </motion.div>
          )}
      </nav>
  )
}

export default Navbar;