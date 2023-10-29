import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './App/Pages/Home'
import './App.css'
import Product from './App/features/ProductList/Product'
import LoginPage from './App/Pages/LoginPage'
import SignUpPage from './App/Pages/SignUpPage'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/Login" element={<LoginPage/>} exact></Route>
        <Route path="/Signup" element={<SignUpPage/>} exact></Route>
        <Route path="/" element={ <Home/>}>
          <Route path='/' element={<Product/>}></Route>
        </Route>
      </Routes>
    </Router>
   
    </>
  )
}

export default App
