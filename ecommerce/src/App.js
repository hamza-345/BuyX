import React, {useState, useEffect} from 'react'
import AppBar from './components/Appbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import serverData from "./serverData"
import Home from "./components/Home"

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    serverData.getAll().then(data => {
      setProducts(data)
    })
  }, [])
  return (
    <>
      <AppBar/>
      <Home products = {products}/>
    </>
  )
}

export default App

