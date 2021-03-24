import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Error from './pages/Error'
import Products from './pages/Products';
import SingleProduct from './components/SingleProduct'
import CartPage from './pages/cart-page/CartPage';
const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/cart" component={CartPage} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>

    </>
  )
}

export default App
