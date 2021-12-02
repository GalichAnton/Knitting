import Slider from '../components/slider/Slider'
import AnnonsmentStyle from "../components/annons/Annonsment"
import NavBar from "../components/navbar/NavBar"
import Category from '../components/category/Category'
import Products from '../components/products/Products'
import Newsletter from '../components/newsleter/Newsletter'
import Footer from '../components/footer/Footer'


const Home = () => {
  return (
    <div>
      <AnnonsmentStyle/>
      <NavBar/>
      <Slider/>
      <Category/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
