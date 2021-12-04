import Home from "./pages/Home";
import Newsletter from './components/newsleter/Newsletter'
import Footer from './components/footer/Footer'
import { Routes, Route, useLocation } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import { useTransition, animated } from 'react-spring'



const App = () => {
  const location = useLocation()
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    }
  })
  return (
    <main style={{ position: 'relative' }}>
      {transitions((props, item) => (
        <animated.div style={props}>
          <div style={{ width: '100%', position: 'absolute' }}>
            <Routes location={item}>
              <Route path='/' element={<Home />} />
              <Route path='/category/:categoryType' element={<CategoryPage />} />
            </Routes>
          </div>
        </animated.div>
      ))
      }
    </main>
  )
};

export default App;