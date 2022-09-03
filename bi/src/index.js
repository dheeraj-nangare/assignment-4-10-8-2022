import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProject from './AppProject'
/*import AppProject from './AppProject'; */


/*redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./Project/Shopping Cart/CartReducer"
const countstore=createStore(
reducer
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Provider store={countstore}>
<AppProject></AppProject>
</Provider>
</>
)*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <AppProject/>
    </>
)














/*Redux Redux Redux Redux Redux Redux Redux Redux Redux Redux Redux Redux Redux Redux Redux Redux Redux Redux Redux Redux Redux*/

/*import App from "./App"
import { Home } from './App';

import AppRedux from './AppRedux';
import {createStore} from "redux"
import { Provider } from "react-redux"
import reducer from "./Redux/CountReducer"
const countstore=createStore(
reducer
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Provider store={countstore}>
<AppRedux></AppRedux>
</Provider>
</>
)*/



/*
 npm install redux react-redux
 */
/*
npm install nodemon
if not done-> npm init
nodemon index.js
 */

/*
1. A React Component for a product page 

5 products

img
prod link
price

Prod.js
function ProdCatl(props){
return(
<div>
<img src={props.imglink}>
<a href={props.alink}>
<p>{props.price}</p>
</div>
)

}

App.js

<ProductCatl imglink="" alink="" price="">

<ProductCatl imglink="" alink="" price="">

<ProductCatl imglink="" alink="" price="">

<ProductCatl imglink="" alink="" price="">

<ProductCatl imglink="" alink="" price="">


index.js
render app.js

*/