import Home from "./pages/Home";
import Newsletter from './components/newsleter/Newsletter'
import Footer from './components/footer/Footer'
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
const App = () => {
  return (
    <>
      
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/category/:categoryType' element={<CategoryPage />}/>
      </Routes>
      <Newsletter />
      <Footer />
    </>
  )
};

export default App;