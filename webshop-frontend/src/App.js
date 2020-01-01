import React from 'react';

import './App.css';

import WebChat from "./components/WebChat";
import Cart from "./components/Cart";
import ProductListing from "./components/ProductListing";
import CategorySwitcher from "./components/CategorySwitcher";
import {getCartDataToPost, getCategories, getProductsPerCategory, postData} from "./util/util";
import urls from "./util/constants"

class App extends React.Component {
    state = {
        categories: [],
        products: [],
        quantities: [],
        productsInCart: [],
        cart: {},
        pageState: 'shop'
    };


    refreshCategories = () => {
        getCategories().then(response => this.setState({categories: response._embedded.categories}));
    };

    refreshProductPerCategory = () => {
        getProductsPerCategory(this.state.currentCategory).then(response => this.setState({products: response._embedded.products}));
    };

    categoryOnClick = (e) => {
        let categoryId = e.currentTarget.dataset.id;
        let category = this.state.categories.find(e => e.id == categoryId);
        this.setState({currentCategory: category, pageState: "shop"});
        this.state.currentCategory = category;
        this.refreshCategories();
        this.refreshProductPerCategory();

    };

    addtoCartOnClick = (e) => {
        let productId = e.currentTarget.dataset.id;
        let product = this.state.products.find(e => e.id == productId);
        let currentQuantity = this.state.cart[productId];
        if (currentQuantity === undefined)
            currentQuantity = 0;
        currentQuantity += Number(this.state.quantities[productId]);
        this.state.cart[productId] = currentQuantity;
        this.state.productsInCart.push(product);
        this.setState({
            cart: this.state.cart,
            productsInCart: this.state.productsInCart
        });
    };

    quantitiesOnChange = (e) => {
        this.state.quantities[e.currentTarget.dataset.id] = e.currentTarget.value;
        this.setState({quantities: this.state.quantities});
    };

    checkoutDataOnChange = (e) => {
        this.setState({[e.currentTarget.id]: e.currentTarget.value});
    };

    checkoutOnClick = (e) => {
        let data = getCartDataToPost(this.state.cart, this.state.customerName, this.state.customerAddress);
        postData(urls.ORDER_URL, data);
        this.setState({quantities: [], cart: [], productsInCart: []});
        this.refreshCategories();
        this.refreshProductPerCategory();
    };

    changePageState = (e) => {
        this.setState({pageState: e.currentTarget.dataset.state});
    };

    componentDidMount() {
        this.refreshCategories();
    };

    render() {
        return (
            <div>
                <CategorySwitcher click={this.categoryOnClick} categories={this.state.categories}
                                  onChangePageState={this.changePageState}/>

                {this.state.pageState === "shop" ?
                    (<ProductListing products={this.state.products} onAddToCart={this.addtoCartOnClick}
                                     onQuantityChange={this.quantitiesOnChange}/>) : ""
                }

                {this.state.pageState === "cart" ?
                    (<Cart cart={this.state.cart} products={this.state.productsInCart}
                           onCheckoutDataChange={this.checkoutDataOnChange} onCheckout={this.checkoutOnClick}/>) : ""
                }

                {this.state.pageState === "chat" ? (<WebChat/>) : ""}
            </div>
        );
    }
}

export default App;
