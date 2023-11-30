import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import About from "./components/About"
import Home from "./components/Home"
import { Provider } from "./contexts/user"

const App = () => {
  return (
    <>
      <Nav/>
      <Provider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Provider>
    </>
  )
}

export default App