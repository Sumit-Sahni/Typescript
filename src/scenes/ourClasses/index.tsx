import { SelectedPage, ClassType } from "../shared/types"
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from "../shared/HText";
import Class from "./Class";




const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];

type Props = {
    setSelectedPage:(value:SelectedPage) => void;
}

const  OurClasses= ({setSelectedPage}: Props) => {
  return (
  
    <section
     id="ourclasses"
     className="w-full bg-primary-100 py-40"
    >
    <div >
        <div className="mx-auto w-5/6" >
             <div className="md:w-3/5">
                <HText>Our Classes</HText>
                <p className="py-5">
                   Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                   tellus quam porttitor. Mauris velit euismod elementum arcu neque
                   facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                   enim mattis odio in risus nunc.
                </p>
             </div>
        </div>

        <div className="mt-10  h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
                 {
                  classes.map((item: ClassType, index)=>{
                   return(
                      <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                      />
                   )
                  })
                 }
            </ul>
        </div>
    </div>
    </section>

  )
}

export default OurClasses