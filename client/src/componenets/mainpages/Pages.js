import React from 'react'
import {Switch , Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/Not-found/NotFound'

function Pages() {




    
    return (
       <Switch>
           <Route path="/Products" exact component={Products} />
           <Route path="/detail/:id" exact component={DetailProduct} />

           <Route path="/login" exact component={Login} />
           <Route path="/register" exact component={Register}  />
           <Route path="/cart" exact component={Cart}  />
           <Route path ="/dogshop" exact component={Products} />

           <Route path="*" exact component={NotFound}  />
          


          

           
       </Switch>
    )
}

export default Pages