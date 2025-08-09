import Email from "./components/Email"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Testimonial from "./components/Testimonial"


function App() {

  return (
    <>
      <div className="overflow-x-hidden ">
        <Navbar/>
        <Header/>
        <Testimonial/>
        <Email/>
        <Footer/>
      </div>
        
    </>
  )
}

export default App
