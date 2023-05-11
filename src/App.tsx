import Navbar from "@/scenes/navbar";
import Home from  "@/scenes/home";
import { useState } from "react";
import { SelectedPage } from  "@/scenes/shared/types";
function App() {
 
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  return (
    <>
    <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
    <Home  setSelectedPage={setSelectedPage}/>
    </>
    
  )
}

export default App
