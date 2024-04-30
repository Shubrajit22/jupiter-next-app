import Image from "next/image";
import Navbar from "./Navbar/page";
import Video from "./Video/page";
import Sliders from "./Slider/page";
import Cards from "./Cards/page"
import Footer from "./Footer/page"
export default function Home() {
  return (
    <>
    <Navbar/>
    <Video/>
    <Sliders/>
    <Cards/>
    <Footer/>


    
    </>
 

  );
}
