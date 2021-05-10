import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Cart from "./Cart";
import ProductList from "./ProductList";
export default function ParamsExample() {
    return (
        <Router>
                <ul>
                    <li>
                        <Link to="/ProductList">Product</Link>
                    </li>
                    <li>
                        <Link to="/Cart">Cart</Link>
                    </li>
                </ul>

            <Switch>
                <Route path="/Cart">
                    <Cart/>
                </Route>
                <Route path="/ProductList">
                    <ProductList/>
                </Route>
            </Switch>
        </Router>
    );
}
