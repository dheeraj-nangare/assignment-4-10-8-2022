import {BrowserRouter, Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import "bootstrap/dist/css/bootstrap.css"
import "./Style/NavBar.css"
import { useState } from 'react'

const NavBar = () => {

    const [cart,setCart] = useState([]);
    const [cartLength,setCartLength] = useState(0);
    const handleClick=(item)=>{ 
        /*if(cart.indexOf(item) !== -1) return;*/
        setCart([...cart,item]);/*cart.push(item); */
        setCartLength(cart.length+1)
    }

    return(
        <div className="container">
        <BrowserRouter>
            <nav id="navbar" className="navbar navbar-expand-lg">
                <Link to='/'><h2>Shopping Cart</h2></Link>
                <div className='navBag'>
                <Link to='/cart'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <span className='navQuantity'>
                    <span>{cartLength}</span>
                </span>
                </Link>  
                </div>      
            </nav>
            <Routes>
                <Route index path='/' element={<Home handleClick={handleClick}/>}></Route>
                <Route path='/cart' element={<Cart cart={cart} setCart={setCart} setCartLength={setCartLength}/>} ></Route>
            </Routes> 
        </BrowserRouter>
        </div>
    )
}
 
export default NavBar;