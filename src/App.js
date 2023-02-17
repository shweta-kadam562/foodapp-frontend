import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from "react-router-dom";
//import PageNotFound from "./components/PageNotFound";
import NavBar from "./Components/Navbar";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Restaurant from "./Components/Restaurant";
import { store } from "./Components/store";
import { Provider } from 'react-redux';
import Category from "./Components/restaurant-components/category";
import Image from "./Components/image"; 
import './App.css';
export default class App extends Component{

  /* Which function does react call : render() */
  render(){  /* render must return something(JSX) */
    return(
        <div>
            <Provider store={store}>
          
          <NavBar />
          {/* <Image/> */}
          {/* <Restaurant/> */}
          {/* <Login/> */}
           <Routes>
            <Route path="/" element ={<Image />} />
            {/* <Route path="/RestaurantPost" element ={<RestaurantPost/>} />
            <Route path="/CategoryPost" element ={<CategoryPost />} /> 
            <Route path="/FoodItemPost" element ={<FoodItemPost />} /> */}
            <Route path="/Restaurant" element ={<Restaurant />} />
            <Route path="/sign-up" element ={<SignUp/>} />
            <Route path="/Login" element ={<Login />} />
            {/* <Route path="*" element ={<PageNotFound />} /> */}
            {/* <Route path="/CatgoryPost" element ={<CategoryPost />} /> */}
            </Routes> 
            </Provider>
        </div>
    );
  }
}