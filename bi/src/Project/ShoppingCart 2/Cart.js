import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./Style/Cart.css"

const Cart = ({cart,setCart,setCartLength}) => {
    const handleRemove = (id) =>{
        setCart(cart.filter((item)=>item.id !== id));
        setCartLength(cart.length - 1);
    }

    return ( 
    <div className='container'>
        <h2 className="text-center">You have Ordered:</h2>
        <div id='cartItems'>
        {cart.map((item)=>(
            <div id={'card'}>
            <div key={item.id} className={'row'} id={'innerCard'}>
                <div className={'col-sm-2'} id={'imgContainer'}>
                    <img style={{width:'100px'}} id={'image'} src={item.img} alt={''}/>
                </div>
                <div className={'col-sm-7'} style={{paddingLeft:'20px'}}>
                    <h3>{item.shirtType}</h3>
                    <p>{item.description}</p>
                    <h4>{item.actualPrice}</h4>
                </div>
                <div className={'col-sm-2'} style={{marginTop:'40px'}}>
                    <button className={'btn btn-danger'} onClick={()=>handleRemove(item.id)}>REMOVE</button>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
    )
}
 
export default Cart;
