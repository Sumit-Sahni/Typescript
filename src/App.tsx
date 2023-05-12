import Navbar from "@/scenes/navbar";
import Home from  "@/scenes/home";
import { useEffect, useState } from "react";
import { SelectedPage } from  "@/scenes/shared/types";
import OurClasses from "@/scenes/ourClasses";
import Benifit from "@/scenes/benifits";
import ContactUs from  "@/scenes/contactUs";
import Footer from "@/scenes/footer";
function App() {
 
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(()=>{
      const handleScroll = () =>{
         if(window.scrollY === 0){
            setIsTopOfPage(true);
            setSelectedPage(SelectedPage.Home);
         }
         if(window.scrollY !==0){
            setIsTopOfPage(false);
         }
      }
      window.addEventListener('scroll', handleScroll);
      return ()=>window.addEventListener('scroll', handleScroll);
  },[])

  return (
    <div>
    <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
    <Home setSelectedPage={setSelectedPage}/>
    <Benifit setSelectedPage={setSelectedPage} />
    <OurClasses setSelectedPage={setSelectedPage}/>
    <ContactUs setSelectedPage={setSelectedPage}/>
    <Footer />
    </div>
    
  )
}

export default App
