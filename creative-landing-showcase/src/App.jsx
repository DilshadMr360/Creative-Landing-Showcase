import Caro from "./components/Caro"
import Slider from "./components/Slider"
import AboutUs from "./components/aboutus/AboutUs"
import Banner from "./components/banner/Banner"
import Choose from "./components/chooseus/Choose"
import FindUs from "./components/findus/FindUs"
import Footer from "./components/footer/Footer"
import Navbar from "./components/header/Navbar"
import Logos from "./components/logos/Logos"
import Prodcuts from "./components/products/Prodcuts"
import Testimonial from "./components/testimonial/Testimonial"


function App() {

  return (
    <>
     <Navbar/>
     <Banner/>
     <Logos/>
     <Prodcuts/>
     <Choose/>
     <FindUs/>
     <AboutUs/>
     <Testimonial/>
     <Footer/>
     
    </>
  )
}

export default App
